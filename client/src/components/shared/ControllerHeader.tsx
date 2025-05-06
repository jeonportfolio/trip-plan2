import { format } from "date-fns";
import CalendarIcon from '@/assets/icons/calendar.svg?react';

interface Props {
    startDate: Date | null;
    endDate: Date | null;
}


export default function ControllerHeader ({ startDate, endDate }: Props){
    return (
        <div className="text-left">
            <h2 className="text-35 font-bold mb-18">서울</h2>
            {startDate && endDate && (
                 <div className="text-17 tracking-[0.17px] font-medium flex items-center">
                    <span className="mr-8">{`${format(startDate,"yyyy.MM.dd(EEE)")} ~ ${format(
                        endDate,"yyyy.MM.dd(EEE)"
                    )}`}</span>
                    <CalendarIcon/>
                </div>
            )}
        </div>
    )
}