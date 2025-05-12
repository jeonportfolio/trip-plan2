import { usePlanStore } from "@/store";
import Map, { MapMarker, MapPath } from "@/components/plan/Map";

interface Props {
    coordinates: {
        lat: number;
        lng: number;
    }
}


export default function PlanMapContainer({coordinates}: Props) {
   
    const { plannedPlaces } = usePlanStore();
    const markers = plannedPlaces.map((plannedPlaces) => plannedPlaces.place.coordinates);
   
    return(
        <Map center={coordinates}>
            {markers.map((marker, index) => (
                <MapMarker key={index} coordinate={marker} options={{ color:'#0095A9'}} label={`${index + 1}`}/>
            ))}
            <MapPath path={markers} options={{ color: "#0095A9"}}/>
        </Map>

    )
}