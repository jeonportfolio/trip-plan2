import { categories } from "@/constants";
import { Place } from "@/types";
import cn from 'classnames';

const filters:Place['category'][] = [
    'attraction', 
    'cafe', 
    'restaurant',
];

 export function PlaceFilterList({ 
    selected, 
    onFilter }: {
        selected: Place['category'] | null; 
        onFilter: (category: Place['category']) => void
    }) {
     return <ul className="flex gap-x-6">
                {filters.map(filter => {
                    const active = filter === selected

                    return(
                        <li key={filter}>
                        <button className={
                            cn("border border-gray100 py-7 px-10 rounded-3 text-15 tracking-[0.15px]", {
                                "text-main border-main": active,
                                "text-gray600": !active
                            })
                        }
                        onClick={() => onFilter(filter)}
                        > 
                            {categories[filter]}
                        </button>
                    </li>
                    )
                })}
            </ul>
            }