import { City } from "@/types";
import Card from "./Card";
import { useModalStore } from "@/store";
import Modal, { ModalBackdrop, ModalPanel } from "../common/Modal";
import CloseIcon from '@/assets/icons/close.svg?react';
import CityDetail from "./CityDetail";

interface Props {
    cities: City[];
}

export default function CityList({ cities }: Props) {
    const { openModal } = useModalStore(); 
    const openDetailModal = (city:City) => {
        openModal(({ onClose }) => (
            <Modal>
                <ModalBackdrop/>
                <ModalPanel className="pt-58 pb-37 relative w-[655px] min-h-[300px]"> 
                        <button onClick={onClose} className="absolute right-28 top-22">
                            <CloseIcon />
                        </button>
                        <CityDetail city={city} />
                </ModalPanel>
            </Modal>
        ));
    };
    return <div className="flex flex-wrap justify-between gap-y-28 items-start w-full">
        {cities.map(city => (
            <button 
                data-testid="city-card" 
                onClick={() => openDetailModal(city)} 
                key={city.code}
            >
                 <Card 
                    title={city.nameEn.toUpperCase()} 
                    description={`${city.country.name} ${city.name}`} 
                    image={city.thumbnail} 
                 />
            </button>
           
        ))}
    </div>
}