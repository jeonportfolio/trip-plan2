import Loading from "@/components/common/Loading";
import ItineraryController from "@/components/itinerary/ItineraryController";
import useGenerateItinerary from "@/hooks/itinerary/useGenerateItinerary"
import { PlanState, usePlanStore } from "@/store";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ItineraryCity(){

        const { generateItinerary } = useGenerateItinerary();

        const{ plannedPlaces, dailyTimes } = usePlanStore();
        const navigate = useNavigate();
        const { city } = useParams();
    
        

        const [ itinerary, setItinerary ] = useState<PlanState["plannedPlaces"][] | null>(null);
        
        useEffect(() => {

            if(plannedPlaces.length === 0 || dailyTimes.length === 0) {
                navigate(`/plan/${city}`);
                return;
            }
    
            generateItinerary(plannedPlaces, dailyTimes).then((itinerary) => {
                setItinerary(itinerary);
            })
        },[ city, dailyTimes, generateItinerary, navigate, plannedPlaces])

    
    return itinerary ? (
        <ItineraryController itinerary={itinerary}/>
    ): (
        <Loading/>
    )
}