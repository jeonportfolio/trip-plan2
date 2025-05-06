import { categories } from "@/constants";
import { Place } from "@/types";
import DeleteIcon from '@/assets/icons/trashcan.svg?react';
import { addDays, format } from "date-fns";

interface Props {
    plannedAccomodations: Array<Place | null>;
    onDeleteAccomodation: (index: number) => void;
    startDate: Date ;
}


export default function PlannedAccomodationList ({
    startDate,
    plannedAccomodations,
    onDeleteAccomodation,
    }: Props) {

    return (
        <div>
            {plannedAccomodations.map((plannedAccomodation, index) => {
                const targetDate = addDays(startDate, index);
                return  plannedAccomodation ? ( 
                    <PlannedAccomodation 
                        plannedAccomodation={plannedAccomodation} 
                        index={index} 
                        key={`${plannedAccomodation.name}_${index}`}
                        onDeleteAccomodation={() => onDeleteAccomodation(index)}
                        targetDate = {targetDate}
                      
                    />
                ): (
                    <EmptyAccomodation index={index} targetDate= {targetDate}  key={`empty_${index}`} />
                )
            })}
        </div>
    )
}

function EmptyAccomodation( {index, targetDate}: {index: number; targetDate: Date}) {
    return (
        <div className="flex items-center mb-20">
        <span className="inline-block w-38 h-38 bg-main rounded-full text-white text-16 font-semibold tracking-[0.16px] leading-[35px] align-middle
            text-center mr-10">
        {index + 1}
        </span>
        <div className="rounded-10 w-[390px] h-68 border-gray200 border-1 flex px-12 py-10 items-center">

                    <div className="h-48 w-48 shrink-0 rounded-6 mr-12 bg-bg" />
            <div className="flex-1 mr-12 overflow-hidden">
                <h6 className="text-15 font-semibold tracking-[0.15px] mb-8">
                    숙소를 추가해 주세요
                </h6>
                <p className="text-14 tracking-[0.14px] text-gray500 overflow-hidden whitespace-nowrap text-ellipsis">
                    <span className="text-14 text-main  font-medium">
                        {categories['accomodation']}
                    </span>
                    {format(targetDate,'MM.dd(EEE)')} - {format(addDays(targetDate, 1),'MM.dd(EEE)' )}
                </p>
            </div>
         
          
        </div>
    </div>
    );
}

function PlannedAccomodation({ plannedAccomodation, index, targetDate, onDeleteAccomodation }: 
    {plannedAccomodation:Place, 
         index: number; 
         targetDate: Date;
         onDeleteAccomodation: () => void;
         
    }) {


    return(
        <div className="flex items-center mb-20" >
                <span className="inline-block w-38 h-38 bg-main rounded-full text-white text-16 font-semibold tracking-[0.16px] leading-[35px] align-middle
                    text-center mr-10">
                {index + 1}
                </span>
                <div className="rounded-10 w-[390px] h-68 border-gray200 border-1 flex px-12 py-10 items-center">

                            <img src= {plannedAccomodation.thumbnail} className="h-48 w-48 shrink-0 rounded-6 mr-12" />
                    <div className="flex-1 mr-12 overflow-hidden">
                        <h6 className="text-15 font-semibold tracking-[0.15px] mb-8">
                            {plannedAccomodation.name}
                        </h6>
                        <p className="text-14 tracking-[0.14px] text-gray500 overflow-hidden whitespace-nowrap text-ellipsis">
                            <span className="text-14 text-main  font-medium">
                                {categories[plannedAccomodation.category]}
                            </span>
                            {format(targetDate,'MM.dd(EEE)')} - {format(addDays(targetDate, 1),'MM.dd(EEE)' )}
                        </p>
                    </div>
                    <button onClick={() => onDeleteAccomodation()}>
                        <DeleteIcon/>
                    </button>
                  
                </div>
            </div>
    )
}