import { GoogleMap, LoadScript, MarkerF, Polyline, PolylineF } from "@react-google-maps/api";
import { PropsWithChildren } from "react";

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEYS;

interface Props {
    center: {
        lat: number;
        lng: number;
    }
    markers?: {
        lat: number;
        lng: number;
    }[];
}

export default function Map({center, children}: PropsWithChildren<Props>) {
    return (
        <LoadScript googleMapsApiKey={API_KEY}>
            <GoogleMap 
                center={center} 
                zoom={12} 
                mapContainerClassName="w-full h-full"
        >
            {children}

        </GoogleMap>
        </LoadScript>
    )
}

export function MapMarker({
    coordinate,
    label,
    options: {color ='#C730DF'} = {}
}:{
    coordinate: {
        lat: number;
        lng: number;
    };
    label?: string;
    options?:{
        color?:`#${string}`
    }
}) {
    const markerIcon = generateMarkerIcon(color);

    return (
        <MarkerF 
            position={coordinate} 
            icon={markerIcon} 
            label={ label ? { text: label, color: '#fff'} : undefined} 
         />
    ) 
}

export function MapPath( { path, options: { color = "#C730DF"} = {} }: { path: { lat:number; lng: number}[]; options?:{color?: `#${string}`}}) {
    return (
        <PolylineF path={path} options={{strokeColor: color}}/>
    )
}

const generateMarkerIcon = (color:`#${string}`) => {
    const svg = `
        <svg width="30" height="30" viewbox="15 15 30 30" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="20" fill="${color}"/>
        </svg>
    `;

    return `data:image/svg+xml;charset=UTF-8, ${encodeURIComponent(svg)}`;
};