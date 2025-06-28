import Loading from "@/components/common/Loading";
import WideLayout from "@/components/common/WideLayout";
import ItineraryController from "@/components/itinerary/ItineraryController";
import useGenerateItinerary from "@/hooks/itinerary/useGenerateItinerary"
import { PlanState, usePlanStore } from "@/store";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ItineraryCity() {
        const { gernerateItinerary } = useGenerateItinerary();

        const { plannedPlaces, dailyTimes } = usePlanStore();
        const navigate = useNavigate();
        const { city } = useParams();
    
    
        //일정이 없다면 다시 계획으로 돌아감 
  

    const [itinerary, setItinerary] = useState<PlanState["plannedPlaces"][] | null>(null);

    useEffect(() => {

        if (plannedPlaces.length === 0 || dailyTimes.length === 0) {
            navigate(`/plan/${city}`);
            return;
        }
        gernerateItinerary(plannedPlaces, dailyTimes).then((itinerary) => {
            setItinerary(itinerary);
        })
    },[city, dailyTimes, gernerateItinerary, navigate, plannedPlaces]);


    return <WideLayout>{
        !itinerary ? 
            <Loading/> : <div className="flex h-full">
                <ItineraryController itinerary={itinerary}/>
                <div className="flex-1 bg-gray300">
                    {/* 지도 */}
                </div>
            </div>
        
    }</WideLayout> 
}