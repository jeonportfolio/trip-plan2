import useGenerateItinerary from "@/hooks/itinerary/useGenerateItinerary";

export default function ItineraryCity() {
    const Itinerary = useGenerateItinerary();
    return<>(JSON.stringify(itinerary))</>;
}