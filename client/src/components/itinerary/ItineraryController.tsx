import { PlanState, usePlanStore } from "@/store";
import ControllerHeader from "../shared/ControllerHeader";
import Tabs from "../common/Tabs";


interface Props {
    itinerary: PlanState['plannedPlaces'][];
}

export default function ItineraryController({itinerary} : Props) {
    
    const { startDate, endDate } = usePlanStore();
    
    return (
        <div className="h-full flex">
            <div>
                <Tabs tabs={itinerary.map((day, index) => ({
                    title:`${index + 1} 일차`,
                    content: () => (
                       <div>
                            <ControllerHeader startDate={startDate} endDate={endDate}/>
                            <div>{JSON.stringify(day)}</div>
                        </div> 
                    )
                }))}/>
                
            </div>
        </div>
    );
}