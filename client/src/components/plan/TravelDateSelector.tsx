import { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import './TravelDateSelector.css';
import LeftArrowIcon from '@/assets/icons/keyboard_arrow_left.svg?react';

export default function TravelDateSelector() {
    const today = new Date();
    const [ startDate, setStartDate ] = useState<Date | null>(null);
    const [ endDate, setEndDate ] = useState<Date | null>(null);
    
    const handleChange = ([start ,end]: [Date | null, Date | null]) => {
        setStartDate(start)
        setEndDate(end)
    }
    return(
        <DatePicker 
            inline 
            monthsShown={2} 
            selectsRange 
            startDate={startDate ?? undefined} 
            endDate={endDate ?? undefined}
            minDate={today}
            maxDate={
                startDate !== null && endDate === null 
                    ? new Date(
                        startDate.getFullYear(), 
                        startDate.getMonth(), 
                        startDate.getDate() + 10
                    ) : undefined
            }
            locale={ko}
            dateFormatCalendar="yyyy년 M월"
            onChange={handleChange}
            renderCustomHeader={({
                monthDate,
                customHeaderCount,
                decreaseMonth,
                increaseMonth,
              }) => (
                <div>
                  <button
                    aria-label="Previous Month"
                    className={
                      "react-datepicker__navigation react-datepicker__navigation--previous"
                    }
                    style={customHeaderCount === 1 ? { visibility: "hidden" } : undefined}
                    onClick={decreaseMonth}
                  >
                   <LeftArrowIcon/>
                  </button>
                  <span className="react-datepicker__current-month">
                    {monthDate.toLocaleString("ko-KR", {
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <button
                    aria-label="Next Month"
                    className={
                      "react-datepicker__navigation react-datepicker__navigation--next"
                    }
                    style={customHeaderCount === 0 ? { visibility: "hidden" } : undefined}
                    onClick={increaseMonth}
                  >
                   
                   <LeftArrowIcon className="rotate-180"/>
                  </button>
                </div>
              )}
             
        
        />
    );
}