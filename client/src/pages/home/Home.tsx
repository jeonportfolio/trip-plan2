import FilterList from "@/components/home/FilterList";
import CityList from "@/components/home/CityList";
import { City } from "@/types";
import SearchInput from "@/components/home/SearchInput";
import { useState } from "react";
import NarrowLayout from "@/components/common/NarrowLayout";

export default function Home() {

    //const { data } = useQuery()

    const [search, setSearch] = useState('');

    return (
        <NarrowLayout className="flex flex-col items-center my-30">
            <div className="w-[339] mb-24">
                <SearchInput value = {search} onChange = {setSearch} onCompositionEnd = {value => console.log(value)}/> 
            </div>
        
            <div className="mb-21">
             <FilterList active="all" onChange={() => {}}/>
            </div>
            <CityList cities={DUMMY_DATA}/>
        </NarrowLayout>
    );
}

const DUMMY_DATA: City[] = [
    {
        city: "seoul",
        name: "서울",
        description: "서울 ㅎㅇ",
        thumbnail: "https://picsum.photos/300/200?random=1"
    },
    {
        city: "busan",
        name: "부산",
        description: "부산 ㅎㅇ",
        thumbnail: "https://picsum.photos/300/200?random=2" 
    },
    {
        city: "jeju",
        name: "제주",
        description: "제주 ㅎㅇ",
        thumbnail: "https://picsum.photos/300/200?random=3"
        
    },
    {
        city: "gunpo",
        name: "군포",
        description: "군포 ㅎㅇ",
        thumbnail: "https://picsum.photos/300/200?random=4"
        
    }
]