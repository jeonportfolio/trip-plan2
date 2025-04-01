export interface City {
    code: string; //도시의 코드, 구분자 역할
    name: string;// 도시 한글 이름
    nameEn: string;// 도시의 영어이름 
    thumbnail: string; // 썸네일 이미지
    description:string;
    timezone: string; //도시의 타임존
    flightHour: number; //비행시간
    timezoneOffset: number; //시차시간 
    cordinates: {
        lat: number;
        lng: number;
    };

    country: Country;
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

export interface Place {
    name: string; // 장소의 이름
    thumbnail: string; // 썸네일 이미지 URL 
    category: 'attraction' | 'restaurant' | 'cafe'; //장소 카테고리
    address: string;//장소의 주소소
    coordinates: {
        lat:number;
        lng: number;
    };
    likes: number; // 장소의 좋아요 수 
    rating: number; //장소의 평점
    city: City['code'];// 구분자
}