import { getCity } from "@/services/plan";
import { PlanState, usePlanStore } from "@/store";
import { transfromTimeToMinutes } from "@/utils/time";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function useGenerateItinerary() {
    const { city: cityId } = useParams();
    const { data, isLoading } = useQuery({
        queryKey: ['city', cityId],
        queryFn: () => getCity(cityId),
    });
    const { plannedPlaces, dailyTimes } = usePlanStore();

    return gernerateItinerary( plannedPlaces, dailyTimes);
}

// 경유지간 거리 측정 
function getMatrix(locations: {lat:number; lng: number}[]): Promise<google.maps.DistanceMatrixResponse> {
    const distanceMatrixService = new google.maps.DistanceMatrixService();
    // 출발지와, 도착지 
    return new Promise((resolve, reject) => {
        const request: google.maps.DistanceMatrixRequest = {
            origins: locations,
            destinations : locations,
            travelMode: google.maps.TravelMode.TRANSIT
        }
        distanceMatrixService.getDistanceMatrix(request, (response, status) => {
            if(status === google.maps.DistanceMatrixStatus.OK) {
                resolve(response!);
            }else {
                reject(status);
            }
        })
    })
}


 async function gernerateItinerary(places: PlanState["plannedPlaces"], dailyTimes:PlanState["dailyTimes"]) {
    const locations = places.map(({ place }) => place.coordinates);
    const matrix = await getMatrix(locations); 
    const route = findOptimalRoute(matrix);
    const times = dailyTimes.map(({ startTime, endTime}) => {
        const start = transfromTimeToMinutes(startTime);
        const end = transfromTimeToMinutes(endTime);
        return end - start;
    })
    const itinerary = groupPlacesByDay({ route, places, matrix}, times );
    
    return itinerary;

}

// 최적의 경로 도출 (방문된 장소를 제외)
function findOptimalRoute(matrix: google.maps.DistanceMatrixResponse) {
    const length = matrix.rows.length;
    const visited = new Set<number>();
    const route = [0];
    visited.add(0);

    while(visited.size < length) {
        let min = Infinity;
        let next = -1;
        const current = route[route.length -1];

        for( let i = 0; i < length; i++) {
            if(visited.has(i)) {
                continue;
            }

            const distance = matrix.rows[current].elements[i].distance.value;
            if(distance < min) {
                min = distance;
                next = i;
            }
        }
        if(next !== -1) {
            route.push(next);
            visited.add(next);
        }
    }

    return route;
}

const THRESHOLD = 10_000; // 10km이내 지점만 여행 가능 

function groupPlacesByDay({ route, places, matrix }: { route:number[]; places: PlanState["plannedPlaces"]; matrix: google.maps
    .DistanceMatrixResponse}, times: number[]) {
    const itinerary: PlanState['plannedPlaces'][] = [];
    let dailyDuration = 0; 

    route.forEach((placeIndex, index) => {
        if(itinerary.length === 0) {
            itinerary.push([places[placeIndex]]);
            dailyDuration = places[placeIndex].duration;
            return;
        } 

        const day = itinerary[itinerary.length - 1];
        const lastPlaceIndex = route[index - 1];
        const distance = matrix.rows[lastPlaceIndex].elements[placeIndex].distance.value;
        const duration = matrix.rows[lastPlaceIndex].elements[placeIndex].distance.value / 60; //분단위 사용
        dailyDuration += duration;

        // 10km 초과 했거나 하루 일정 시간을 넘어가면 새로운 일정으로 등록
        if(distance > THRESHOLD || dailyDuration > times[itinerary.length - 1]) {
            itinerary.push([places[placeIndex]]);
            dailyDuration = places[placeIndex].duration;
        } else {
            day.push(places[placeIndex])
        }
    })

    // 일정이 많은 날을 쪼개서 새로운 일정을 만듬
    while (itinerary.length < times.length) {
        const max = itinerary.reduce((acc, day , index) => {
            if(day.length> itinerary[acc].length){
                return index;
            }
            return acc;
        },0);

        if(itinerary[max].length === 1) {
            break;
        }
    
        const day = itinerary[max]; 
        const half = Math.floor(day.length / 2);
        itinerary[max] = day.slice(0,half);
        itinerary.push(day.slice(half));

    }

    return itinerary;
}