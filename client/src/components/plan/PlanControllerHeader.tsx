import { format } from "date-fns";

interface Props {
    startDate: Date | null;
    endDate: Date | null;
}


export default function PlanControllerHeader ({ startDate, endDate }: Props){
    return (
        <div>
            <h2 className="text-35 font-bold mb-18">서울</h2>
            {startDate && endDate && (
                 <div>
                    <span>{`${format(startDate,"yyyy.MM.dd(EEE)")} ~ ${format(
                        endDate,"yyyy.MM.dd(EEE)"
                    )}`}</span>
                </div>
            )}
        </div>
    )
}