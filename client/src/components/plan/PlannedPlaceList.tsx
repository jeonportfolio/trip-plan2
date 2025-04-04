import { categories } from "@/constants";
import { Place } from "@/types";
import DeleteIcon from '@/assets/icons/trashcan.svg?react';

interface Props {
    plannedPlace: {
        place: Place;
        duration: number;
    }[];
}


export default function PlannedPlaceList ({plannedPlace}: Props) {
    return (
        <div>
            {plannedPlace.map((plannedPlace, index) => (
                <div className="flex items-center mb-20" key={`${plannedPlace.place.name}`}>
                <span className="inline-block w-38 h-38 bg-main rounded-full text-white text-16 font-semibold tracking-[0.16px] leading-[35px] align-middle
                    text-center mr-10">
                {index + 1}
                </span>
                <div className="rounded-10 w-[390px] border-gray200 border-1 flex px-12 py-10 items-center">
                    <img src= {plannedPlace.place.thumbnail} className="h-48 w-48 shrink-0 rounded-6 mr-12" />
                    <div className="flex-1 mr-12">
                        <h6 className="text-15 font-semibold tracking-[0.15px] mb-8">
                            {plannedPlace.place.name}
                        </h6>
                        <p className="text-14 tracking-[0.14px] text-gray500">
                            <span className="text-14 text-main  font-medium">
                                {categories[plannedPlace.place.category]}
                            </span>
                            {plannedPlace.place.address}
                        </p>
                    </div>
                    <button className="py-6 px-8 rounded-10 bg-main/10 text-14 font-medium text-main mr-5">
                        {plannedPlace.duration}분
                    </button>
                    <button>
                        <DeleteIcon/>
                    </button>
                </div>
            </div>
            ))}
        </div>
    )
}