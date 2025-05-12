import { usePlanStore } from "@/store";
import ControllerHeader from "../shared/ControllerHeader";
import Tabs from "../common/Tabs";
import DayItineraryView from "./DayItineraryView";
import ItineraryMapContainer from "./ItineraryMapContainer";
import { ItineraryItem } from "@/types";



interface Props {
    itinerary: ItineraryItem[][];
}

export default function ItineraryController({itinerary} : Props) {
    
    const { startDate, endDate, plannedAccomodations } = usePlanStore();
    
    
    return (

    <div className="flex-h-full">    
       
            
                <Tabs className="h-full" tabs={itinerary.map((day, index) => ({
                    title:`${index + 1} 일차`,
                    content: () => (
                       <div className="h-full flex">
                        <div className="px-24 py-30 flex-col gap-y-18 overflow-y-hidden h-full shrink-0">
                            <ControllerHeader startDate={startDate} endDate={endDate}/>
                            <DayItineraryView plannedPlaces={day}/>
                        </div> 
                        <ItineraryMapContainer plannedPlaces={day} accomodation={plannedAccomodations[index]!} />
                        </div> 
                    )
                }))}/>
                
            </div>
    );
}