import FilterList from "@/components/home/FilterList";
import CityList from "@/components/home/CityList";
import SearchInput from "@/components/common/SearchInput";
import NarrowLayout from "@/components/common/NarrowLayout";
import { useQuery } from "@tanstack/react-query";
import { getCities, getSearchedCities } from "@/services/home";
import Loading from "@/components/common/Loading";
import { useState } from "react";

export default function Home() {
    //const { data } = useQuery()

    const [q, setQ] = useState('');
    const [filter, setFilter] = useState<'all' | 'domestic' | 'international'>('all')
    const { isLoading, data } = useQuery({
        queryKey: ['cities', q, filter],
        queryFn: q 
            ? () =>  getSearchedCities(q) 
            : () =>  getCities(filter === 'all' ? undefined: filter),
    });

    return isLoading || !data ? ( 
        <Loading/>) : 
        (
         <>  
        <NarrowLayout className="flex flex-col items-center my-30">
            <div className="w-[339] mb-24">
                <SearchInput onSearch = {value => setQ(value)}/> 
            </div>
        
            <div className="mb-21">
             <FilterList active={filter} onChange={(f) => setFilter(f)}/>
            </div>
            <CityList cities={data}/>
        </NarrowLayout>
        </>    
    );
}



