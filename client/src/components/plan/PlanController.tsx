import { usePlanStore } from "@/store";
import DailyTimeSelector from "./DailyTimeSelector"
import PlanSteps from "./PlanSteps"
import PlanControllerHeader from "./PlanControllerHeader";

export default function PlanController () {
    
    const { startDate, endDate } = usePlanStore();    
    return( <div className="h-full flex">
        <PlanSteps/>
        
    <div className="px-24 py-30 flex-col gap-y-10">
        <PlanControllerHeader startDate={startDate} endDate={endDate}/>    
        <DailyTimeSelector/>
    </div>
</div>    
);
}