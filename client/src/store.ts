import { addDays, differenceInDays } from "date-fns";
import { FunctionComponent } from "react";
import { create } from "zustand";
import { Place } from "./types";

interface State {
    startDate: Date | null;
    endDate: Date | null;
    status: 'period_edit' | 'planning';
    dailyTimes: { startTime: string; endTime: string, date: Date}[];
    plannedPlaces: {
        place:Place;
        duration: number; // 분단위
    }[];
}

type Action = {
    setStartDate: (date: Date | null) => void;
    setEndDate:(date: Date | null ) => void;
    setStatus: (status: State['status']) => void;
    setDailyTime: (index: number, time: string, type:'startTime' | 'endTime') => void;
    addPlannedPlace: (place: Place, duration: number) => void;
    removePlannedPlace: (index: number)=> void;
    setDurationForPlannedPlace: (index: number, duration: number) => void;
}


export const usePlanStore = create<State & Action>()((set, get) => ({
    startDate:null,
    endDate:null,
    status:'period_edit',
    dailyTimes: [],
    plannedPlaces:[],
    setStartDate: (date) => set({ startDate: date}),
    setEndDate: (date) => {
        if(date) {
            const startDate = get().startDate!;
            const diff = differenceInDays(date, startDate) + 1;
            const dailyTimes = Array.from({ length: diff }, (_, i) => {
                    return {
                        startTime: '10:00',
                        endTime: '22:00',
                        date: addDays(startDate, i),
                    }
            })

            set({
                dailyTimes,
                endDate: date,
            })
        } else {
            set({ endDate: date, dailyTimes:[]})
        }
    },
    setStatus: status => set({ status }),
    setDailyTime: (index, time, type) => {
            set(state => ({
                dailyTimes:state.dailyTimes.map((dailyTime, i) => 
                    i === index ? {...dailyTime, [type]: time } : dailyTime,
                ),
            }));
        },
        addPlannedPlace: (place: Place, duration: number) => set(prev => ({ plannedPlaces: [...prev.plannedPlaces, {place, duration}]})),
        removePlannedPlace: (index: number)=> set( prev => ({ plannedPlaces: prev.plannedPlaces.filter((_, i) => i !== index)})),
        setDurationForPlannedPlace: (index: number, duration: number) => 
            set(prev => ({ 
                plannedPlaces: prev.plannedPlaces.map((place, i) => 
                    i === index ? {...place, duration} : place
            ),
        })),
    }));
            
interface ModalState {
    modals: FunctionComponent<{ onClose: () => void}>[];
}

type ModalAction = {
    openModal: (modal: FunctionComponent<{ onClose: () => void }>) => void;
    closeModal: (index: number) => void;
}

export const useModalStore = create<ModalState & ModalAction>()(set => ({
    modals: [],
    openModal: modal => set(state => ({ modals: [...state.modals, modal]})),
    closeModal: index => set(state => ({ modals: state.modals.filter((_, i) => i !== index)})),
}))