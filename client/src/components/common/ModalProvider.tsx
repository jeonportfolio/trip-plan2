import { useModalStore } from "@/store";
export default function ModalProvider() {
    const { modals, closeModal } = useModalStore();

    return(
    <>
        {modals.map((Modal, index) => (
        <Modal key={index} onClose={() => closeModal(index)} />
        ))}
    </>
    );
}