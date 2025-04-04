import { categories } from "@/constants";
import { Place } from "@/types";
import DeleteIcon from '@/assets/icons/trashcan.svg?react';
import PlannedPlaceList from "./PlannedPlaceList";

export default function PlaceController() {
    return (
        <div className="flex flex-col text-left">
            <h5 className="flex items-end mb-13">
                <span className="text-30 font-medium tracking-[0.3px]">0</span>
                <span className="text-15 tracking-[0.15px] mb-4">
                    1시간 0분 / 36시간 0분
                </span>
            </h5>
            {DUMMY_PLACES.length === 0 ? (
                <EmptyList/> ): (
                    <PlannedPlaceList plannedPlace={DUMMY_PLACES}/>
        
        )}   
        </div> 
    );
}

function EmptyList() {
    return (
        <div className="w-[430px] h-89 bg-bg rounded-10">
            <p className="mt-70 mx-auto text-gray500 text-14">장소를 선택해 주세요</p>
        </div>
    );
}

const DUMMY_PLACES = [
    { place: {
        name: '경복궁',
        address: '서울특별시 종로구 사직로 161',
        category: 'attraction',
        thumbnail: 'https://picsum.photos/300/200?ramdom=1'
    } as unknown as Place, duration: 60},
    { place: {
        name: '경복궁2',
        address: '서울특별시 종로구 사직로 161',
        category: 'attraction',
        thumbnail: 'https://picsum.photos/300/200?ramdom=2'
    } as unknown as Place, duration: 60},
    { place: {
        name: '경복궁',
        address: '서울특별시 종로구 사직로 161',
        category: 'attraction',
        thumbnail: 'https://picsum.photos/300/200?ramdom=3'
    } as unknown as Place, duration: 60},
    { place: {
        name: '경복궁',
        address: '서울특별시 종로구 사직로 161',
        category: 'attraction',
        thumbnail: 'https://picsum.photos/300/200?ramdom=4'
    } as unknown as Place, duration: 60},
    { place: {
        name: '경복궁',
        address: '서울특별시 종로구 사직로 161',
        category: 'attraction',
        thumbnail: 'https://picsum.photos/300/200?ramdom=5'
    } as unknown as Place, duration: 60}
]