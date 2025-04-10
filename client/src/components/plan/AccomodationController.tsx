
import { usePlanStore } from "@/store";
import PlannedAccomodationList from "./PlannedAccomodationList";


export default function AccomodationController() {

    const { 
        plannedAccomodations, 
        removePlannedAccomodation,
        startDate 
    } = usePlanStore();

   
    const plannedAccomodationLength = plannedAccomodations.filter(Boolean).length; //빈값을 제외하는 숙소 수 구하기 
    const accomodationCount = new Set(plannedAccomodations).size;

    return (
        <div className="flex flex-col text-left">
            <h5 className="flex items-end mb-13">
                <span className="text-30 font-medium tracking-[0.3px] mr-8">{accomodationCount}</span>
                <span className="text-15 tracking-[0.15px] mb-4">
                {plannedAccomodationLength}일 / {''}
                {plannedAccomodations.length}일
                </span>
            </h5>    
                    <PlannedAccomodationList
                        plannedAccomodations={plannedAccomodations}
                        onDeleteAccomodation={removePlannedAccomodation}
                        startDate={startDate!}
                    />
        </div> 
    );
}


