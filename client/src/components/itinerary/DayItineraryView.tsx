import PlaceCategory from "../common/PlaceCategory";
import { ItineraryItem } from "@/types";

interface Props {
    plannedPlaces: ItineraryItem[];

}

export default function DayItineraryView({ plannedPlaces }: Props) {
    return (
        <div className="flex flex-col gap-y-50" data-testid="itinerary-card">
            {plannedPlaces.map(({ place, startTime, endTime}) => (
                <div 
                    key={`${place.name}`}
                    className="flex w-[253px] pl-29 relative before:absolute before:w-1 before:h-69 
                    before:top-35 before:left-10 before:block before:bg-gray200 last:before:h-0">

                    <div className="flex-1 flex-col gap-y-8 text-left">
                        <p className="text-14 text-gray500">
                            {startTime} - {endTime}
                        </p>
                        <PlaceCategory category={place.category} className="text-13"/>
                        <p className="text-gray900 text-16 font-semibold">{place.name}</p>
                    </div>
                    <img src={place.thumbnail} className="w-75 h-55 shrink-0 rounded-6 bg-bg" />
                </div>

           ))}
        </div>
    )
   
}