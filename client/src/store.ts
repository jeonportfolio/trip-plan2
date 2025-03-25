import { FunctionComponent } from "react";
import { create } from "zustand";

interface State {
    startDate: Date | null;
    endDate: Date | null;
    status: 'period_edit' | 'planning';
}

type Action = {
    setStartDate: (date: Date | null) => void;
    setEndDate:(date: Date | null ) => void;
    setStatus: (status: State['status']) => void;
}


export const usePlanStore = create<State & Action>()(set => ({
    startDate:null,
    endDate:null,
    status:'period_edit',
    setStartDate: (date) => set({ startDate: date}),
    setEndDate: (date) => set({ endDate: date}),
    setStatus: status => set({ status }),
}))

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