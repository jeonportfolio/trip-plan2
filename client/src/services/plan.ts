import { City, Place } from "@/types";

export const getCity = async (cityId: string): Promise<City> => {
    return fetch(`/api/cities/${cityId}`).then((res) => res.json())
};

export const getPlaces = async (
    city: string, 
        { q, category }: { category?: string | string[], q?: string} = {},
    ): Promise<Place[]> => {
        const queries = new URLSearchParams(q);
        if(category) {
            const categories = Array.isArray(category) ? category:[category];
            categories.forEach(c => {
                queries.append('category',c)
            })
        }

        const queryString = queries.toString();

        return fetch(
            `/api/cities/${city}/places${queryString ? `?${queryString}` : ""}`,
         ).then(res => res.json());
        };