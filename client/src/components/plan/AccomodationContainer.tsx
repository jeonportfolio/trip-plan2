import { useState } from "react"
import SearchInput from "../common/SearchInput"
import { Place } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getPlaces } from "@/services/plan";
import PlaceList from "./PlaceList";
import Loading from "../common/Loading";
import { usePlanStore } from "@/store";

export default function AccomodationContainer() {
    const { city } = useParams();
    const [q,setQ] = useState('');
    const { addPlannedAccomodation } = usePlanStore();


    const { isLoading, data} = useQuery({
        queryKey: ['places', city, q],
        enabled: !!city,
        queryFn: () => {
            const query = {
                ...(q ? {q} : {}),
                ...({category: 'accomodation'}),
            }
            return getPlaces(city!, query);
        }
    })

   
    
    return(
        <div className="flex flex-col gap-y-18 h-full">
            <SearchInput onSearch={(query) => setQ(query)}/>
            <div className="flex-1 overflow-y-hidden">
                {isLoading || !data ? (<Loading/>) : (
                    <PlaceList 
                        places={data} 
                        onAddPlace={(place: Place) => addPlannedAccomodation(place) } 
                    />)}
            </div>
        </div>
    );
}

