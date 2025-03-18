export interface City {
    code: string; //도시의 코드, 구분자 역할
    name: string;// 도시 한글 이름
    nameEn: string;// 도시의 영어이름 
    thumbnail: string; // 썸네일 이미지
    description:string;
    timezone: string; //도시의 타임존
    flightHour: number; //비행시간 
    cordinates: {
        lat: number;
        lng: number;
    };

    country: Country["code"];
}

export interface Country {
    code: string; //국가 코드, 구분자 역할
    name: string;
    nameEn: string;
    voltage: number;// 국가의 전압값
    visa: {
        required: boolean; //비자 필요 여부
        duration: number;// 비자 유효 기간
    },
    continent : 
        | 'Asia' 
        | 'Europe' 
        | 'Afirca' 
        | 'Oceania' 
        | 'North America' 
        | 'South America' 
        | 'Antarctica';
}