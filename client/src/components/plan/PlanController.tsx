import { usePlanStore } from "@/store";
import DailyTimeController from "./DailyTimeController"
import PlanControllerHeader from "./PlanControllerHeader";
import Wizard from "../common/Wizard";
import { PropsWithChildren } from "react";
import PlaceController from "./PlaceController";

export default function PlanController () {
    
    const { startDate, endDate } = usePlanStore();    
    return( <div className="h-full flex">
        <Wizard
            steps={[{
                title:'날짜 확인',
                content: ({ onNext }) => (
                    <Layout startDate={startDate} endDate={endDate}>
                        <DailyTimeController onCompleted={onNext}/>
                    </Layout>
                ),
            },
            {
                title:'장소 선택',
                content: () => (
                    <Layout startDate={startDate} endDate={endDate}>
                        <div><PlaceController/></div>
                    </Layout>
                ),
            },
            {
                title:'숙소 선택',
                content: () => (
                    <Layout startDate={startDate} endDate={endDate}>
                        <div>숙소 선택</div>
                    </Layout>
                ),
            },    
        ]}
        />
</div>    
);
}

function Layout({ startDate, endDate, children}: PropsWithChildren<{startDate: Date | null; endDate: Date | null;}>) {
    return (
        <div className="px-24 py-30 flex-col gap-y-10 overflow-y-hidden h-full">
            <PlanControllerHeader startDate={startDate} endDate={endDate}/>
            {children}    
        </div>
    )
}