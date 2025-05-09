import { Place } from "@/types";
import PlusIcon from"@/assets/icons/plus_rect.svg?react";
import { categories } from "@/constants";
import HeartIcon from '@/assets/icons/heart.svg?react';
import StarIcon from '@/assets/icons/star.svg?react';
import PlaceCategory from "../common/PlaceCategory";


interface Props{
    places: Place[];
    onAddPlace: (place: Place) => void;
}

export default function PlaceList({ places, onAddPlace }: Props) {
    return (
        <div className="flex flex-col overflow-y-scroll h-full">
            {places.map(place => (
                <PlaceItem 
                    key={`${place.city}_${place.name}`} 
                    place={place} 
                    onAddPlace={onAddPlace}/>
            ))}
        </div>
    )
}

function PlaceItem({ place, onAddPlace }: { place: Place; onAddPlace: (place: Place) => void }){
    return (
        <div className="flex gap-x-11 mb-24">
            <img className="w-68 h-68 rounded-6 bg-bg" src={place.thumbnail}></img>
            <div className="flex-1 flex flex-col items-start gap-y-8">
                <h6 className="text-17 font-semibold tracking-[0.17px] ">{place.name}</h6>
                <p className="text-14 tracking-0.14[px] text-gray500">
                    <PlaceCategory className="text-14 tracking-[0.14px]" category={place.category}/>
                    {place.address}
                </p>
                <div className="flex text-14 tracking-[0.14] text-gray600">
                    <span>
                        <HeartIcon className="inline-block mr-4"/>
                        {place.likes}
                    </span>
                    <span>
                        <StarIcon className="inline-block mr-4"/>
                        {place.rating}
                    </span>
                </div>
            </div>
            <button className="relative" onClick={() => onAddPlace(place)}>
                <PlusIcon className="absolute top-1/2 transform -translate-y-1/2  -translate-x-1/2"/>
            </button>
        </div>
    )
}