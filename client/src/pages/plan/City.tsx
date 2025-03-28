import Loading from "@/components/common/Loading";
import WideLayout from "@/components/common/WideLayout";
import Map from "@/components/plan/Map";
import PlanController from "@/components/plan/PlanController";
import TravelPeriodModal from "@/components/plan/TravelPeriodModal";
import { getCity } from "@/services/plan";
import { usePlanStore } from "@/store";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";


export default function PlanCity() {
    const { status } = usePlanStore();
    const { city:cityId ='' } = useParams();
    const { data, isLoading} = useQuery({
        queryKey:['city', cityId ],
        queryFn: () => getCity(cityId),
    })
    return (
    <>
        {status === 'period_edit' &&  <TravelPeriodModal/>}
        <WideLayout>
            { isLoading || !data ? <Loading/>: (
                    <div className="flex h-full">
                        <PlanController/>
                        <div className="flex-1 bg-gray300">
                            <Map 
                                center={data.cordinates} 
                            />

                        </div>
                    </div>   
            )}
    
        </WideLayout>    
    </>
    );
}

