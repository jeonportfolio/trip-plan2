import FilterList from "@/components/home/FilterList";
import CityList from "@/components/home/CityList";
import SearchInput from "@/components/home/SearchInput";
import NarrowLayout from "@/components/common/NarrowLayout";
import { useQuery } from "@tanstack/react-query";
import { getCities, getSearchedCities } from "@/services/home";
import Loading from "@/components/common/Loading";
import { useState } from "react";

export default function Home() {
    //const { data } = useQuery()

    const [q, setQ] = useState('');

    const { isLoading, data } = useQuery({
        queryKey: ['cities', q],
        queryFn: q ? () =>  getSearchedCities(q) : getCities,
    });

    return isLoading || !data ? ( 
        <Loading/>) : 
        (
         <>  
        <NarrowLayout className="flex flex-col items-center my-30">
            <div className="w-[339] mb-24">
                <SearchInput onCompositionEnd = {value => setQ(value)}/> 
            </div>
        
            <div className="mb-21">
             <FilterList active="all" onChange={() => {}}/>
            </div>
            <CityList cities={data}/>
        </NarrowLayout>
        </>    
    );
}



