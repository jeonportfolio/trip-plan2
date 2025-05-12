import { PlanState } from "@/store";
import Map, { MapMarker, MapPath } from "@/components/plan/Map";
import { Place } from "@/types";

interface Props {
   plannedPlaces: PlanState['plannedPlaces'];
   accomodation: Place | null;
}


export default function ItineraryMapContainer({plannedPlaces, accomodation}: Props) {

    const markers = plannedPlaces.map((plannedPlaces) => plannedPlaces.place.coordinates);
   
    return(
        <Map center={plannedPlaces[0].place.coordinates}>
            {markers.map((marker, index) => (
                <MapMarker key={index} coordinate={marker} options={{ color:'#0095A9'}} label={`${index + 1}`}/>
            ))}
            {accomodation && 
                (<MapMarker 
                    coordinate={accomodation.coordinates} 
                    options={{color:'#C730DF'}} 
                    label="숙소"
                />)}
            <MapPath 
                path={[
                    ...markers, 
                    ...(accomodation ? [accomodation.coordinates] : []), 
                ]}
                    options={{ color: "#0095A9"}} 
                />
        </Map>

    )
}