import { FunctionComponent } from "react";
import { create } from "zustand";

interface State {
    startDate: Date | null;
    endDate: Date | null;
}

type Action = {
    setStartDate: (date: Date) => void;
    setEndDate:(date: Date) => void;
}


export const store = create<State & Action>()(set => ({
    startDate:null,
    endDate:null,
    setStartDate: (date) => set({ startDate: date}),
    setEndDate: (date) => set({ endDate: date})
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