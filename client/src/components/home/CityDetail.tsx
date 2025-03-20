import { City } from "@/types";
import ArrowIcon from '@/assets/icons/arrow.svg?react'
import FligthtIcon from'@/assets/icons/flight.svg?react'
import VisaIcon from'@/assets/icons/ticket.svg?react'
import VoltageIcon from'@/assets/icons/power.svg?react'
import ClockIcon from'@/assets/icons/schedule.svg?react'

interface Props {
    city: City;
}

export default function CityDetail({city}: Props) {
    return <div className="w-full flex flex-col">
        <div className="mb-18 flex">
            <div className="flex-1 flex-col mr-17">
                <div className="mb-18">
                    <h3 className="text-20 text-gray300">{city.nameEn.toLocaleUpperCase()}</h3>   
                    <h2 className="text-30 font-bold">{city.country.name}{city.name}</h2>
                </div>
                <p className="text-14 leading-[160%] -tracking-[0.08px] mb-18">
                    {city.description}
                </p>           
                <div className="flex gap-x-26 mb-16">
                    <div className="flex flex-col">
                        <div className="text-15 tracking-[0.15px] font-semibold mb-16">
                            <FligthtIcon className="mr-8"/>
                            <span>항공</span>
                        </div>
                        <p className="text-gray600 tracking-[0.14] text-14 mb-8">
                            직항
                        </p>
                        <p>
                            막 {city.flightHour} 시간
                        </p>
                     </div>
                     <div className="flex flex-col">
                        <div className="text-15 tracking-[0.15px] font-semibold mb-16">
                            <VisaIcon className="mr-8"/>
                            <span>비자</span>
                        </div>
                        <p className="text-gray600 tracking-[0.14] text-14 mb-8">
                            {city.country.visa.required ? '필요' : '무비자'}
                        </p>
                        <p>
                            {city.country.visa.duration}
                        </p>
                     </div>
                     
                     <div className="flex flex-col">
                        <div className="text-15 tracking-[0.15px] font-semibold mb-16">
                            <VoltageIcon className="mr-8"/>
                            <span>전압</span>
                        </div>
                        <p className="text-gray600 tracking-[0.14] text-14 mb-8">
                            콘센트
                        </p>
                        <p>
                            {city.country.voltage}V
                        </p>
                     </div>
                     <div className="flex flex-col">
                        <div className="text-15 tracking-[0.15px] font-semibold mb-16">
                            <ClockIcon className="mr-8"/>
                            <span>시차</span>
                        </div>
                        <p className="text-gray600 tracking-[0.14] text-14 mb-8">
                            한국대비
                        </p>
                        <p>
                            {city.timezoneOffset === 0 
                                ? "없음" 
                                : `${city.timezoneOffset}시간`
                            }
                        </p>
                     </div>

                    
                    </div>
                </div>
            <img 
                src={city.thumbnail} 
                alt={city.name} 
                className="w-[261px] rounded-10"
            />
        </div>
        <div>
            <button className="w-185 bg-black text-white text-16 font-medium rounded-6 py-14 flex items-center justify-center">
                <span className="ml-8">
                    일정 만들기
                </span>
                <ArrowIcon className="ml-5"/>
            </button>
        </div>
    </div>;
}

