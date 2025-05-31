import { queryOptions } from "@tanstack/react-query";
import { getCity } from "./plan";

export const planQueries = {    
    city: (cityId: string) => 
        queryOptions(
            {
                queryKey: ['city', cityId],
                queryFn: () => getCity(cityId)
            }
    )
}