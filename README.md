# 

## 세팅 <br/>

▶`npm create vite@5.2.3 travel-plan -- --template react-ts`<br/>
▶client로 public, src, index.html 이동<br/>
▶ 서버 설정 `yarn add express@4.19.2`, `yarn add -D @types/express@4.17.21 vite-node@2.0.4`<br/>
▶DB 설정 `yarn add nedb@1.8.0`, `yarn add -D @types/nedb@1.8.16`<br/>
▶ id 설정 `yarn add nanoid@5.0.7`<br/>


## 설계 <br/>

▶nedb를 사용해 도시 정보 가져오기 (get, post) 방식 사용<br/>
▶fetch를 통해 api 통신 (JSON)<br/>
▶api는 따로 서버를 만들고 proxy 적용, client와 서버 분리` yarn add -D concurrently@8.2.2` 서버 클라이언트 동시실행<br/>
▶api 에서 get과 post 연결 (db.findOne, db.insert)
▶상대경로를 tsconfig.js를 생성하여 절대경로로 변환 경로 간편화<br/>
▶`yarn add react-router-dom@6.25.1` 리액트 라우터 사용<br/>
▶ Suspense와 lazy를 사용해서 초기로딩 (필요한 자원만 렌더링 네트워크 소스 최적화)사용자 경험 증가<br/>
▶`yarn add -D tailwindcss@3.4.3 postcss@8.4.39 autoprefixer@10.4.19` `yarn tailwindcss init -p` tailwindcss 관련 모듈 설치<br/>
▶ card -> cardList 구조<br/>

## 데이터 입력 <br/> 

▶ fetch에서 Post를 사용해 JSON 방식으로 받음 <br/>
▶ 데이터 전송의 성공과 실패 알림<br/>

## 상단 탭 & 검색창 구성 <br/>

▶ 필터 기능을 통해 필요한 부분만 렌더링 하도록 설정 <br/>
▶`yarn add classnames@2.5.1` css 동적 사용(active로 활성 비활성)<br/>
▶ `yarn add -D vite-plugin-svgr@4.2.0` svg를 컴포넌트<br/>
▶ onCompositionEnd를 사용해서 단어완성과 useState로 상태를 판단<br/>

## 레이아웃 구성 & 상태관리<br/>

▶ `PropsWithChildren`를 통해 children을 배치<br/>
▶ wide와 narrow로 넒고 좁은 레이아웃을 컴포넌트화 하여 적용<br/>
▶ zustand를 활용해 상태관리 `yarn add zustand@4.5.4` -> 일시적인 데이터는 useState 사용 모든 컴포넌트에 공유되는 것은 zustand<br/>

## 데이터 API 연동 <br/>

▶ 국가 및 도시 이름, 비행시간, 비자, 전압값 등의 정보 데이터 타입설정 -> Chat Gpt를 사용해 데이터 생성<br/>
▶ JSON 형식으로 useRef를 사용해 country 데이터 받기 <br/>
▶ 서버에서 클라이언트로 데이터 가져오기 React-Query사용 `yarn add @tanstack/react-query@5.29.2`<br/>
▶ 서치 할때 $or 연산자로 비슷한 검색어 찾기 (국가와 도시)<br/>

## 모달 컴포넌트 생성<br/>
▶ 컨텐츠를 보여주는 모달과 backDrop 생성 createPortal 사용<br/>
▶ zustand로 모달의 상태 관리(store.ts), ModalProvider을 통해 전체 관리<br/>
▶ flex-1 속성으로 이미지 먼저 자리잡고 설명 구성<br/>

## 달력 모달 생성 <br/>

▶ `yarn add react-datepicker@7.3.0` 설치 -> `react-datepicker/dist/react-datepicker.css`로 스타일링<br/>
▶ 시작과 끝 날짜 범위를 선택할 수 있게 설정 (시작일로부터 10일까지)<br/>
▶ `yarn add date-fns@3.6.0` -> 한글로 설정 

## 일정 선택  <br/>

▶ store.ts에서 Zustand로 상태관리<br/>
▶ 시작날짜와 종료날짜 선택후 일정 전달 -> 선택이 되지 않으면 버튼 활성화 x<br/>
▶ 날짜 선택 중과 선택 완료의 상태를 정의 preiod edit:planning<br/>

## 일정 선택 후 장소 선택 <br/>

▶ endDate가 설정된 후 이동 -> endDate가 정해진 경우와 안 정해진 경우를 나눔 <br/>
▶ 기본 시간 (오전 10시 ~ 오후 10시)의 데이터로 store에 저장 (시작일과 종료일의 차이만큼 시간 목록 생성)<br/>
▶ 탭창, 시간 선택창, 지도정보로 구성 (classnames를 사용해서 active상태 판별)<br/>
▶ 시간과 분을 slice를 사용해 나누어 시간 부분은 60을 곱함<br/>
▶ date-fns로 format하여 시차와 날짜 표시<br/>
▶ 시간 변경 action을 store.ts에 추가 (setDailyTime)<br/>

## 구글 맵 추가 <br/>

▶ google map api키를 발급 받아 연동 env파일로 저장후 typeScript에서 사용 가능하게 vite-env.ts에 설정 <br/>
▶ `yarn add @react-google-maps/api@2.19.3`설치 <br/>
▶ 구글 맵을 연동한 후 위도와 경도로 중심을 잡음 -> 현위치 마커 표시  <br/>
▶ fetch를 통해 api를 받는다 비동기 작업 Promise 사용<br/>

## Wizard 컴포넌트 <br/>

▶ 컴포넌트 내에서만 상태(useState), 컴포넌트를 넘나드는 상태(contextAPI), 전역상태(zustand) => 컴포넌트 내부에서 사용하므로 useState<br/>
▶ 버튼과 탭창으로 각각의 파트로 이동 <br/>

## 장소 리스트 <br/>

▶ 장소로 검색을 쉽게 하기 위해 인덱스 사용 -> 검색속도를 높임 (placeDB.ensureIndex({ fieldName: 'city' }))<br/>
▶ 도시로 부터 api 호출 -> Json 방식으로 ChatGpt에게 데이터 도출<br/>
▶ nedb에서 dataStore을 사용해 파일경로를 적고 autoload시켜 데이터를 받는다 Admin에서 데이터 등록<br/>
▶ city를 param값으로 받아 해당하는 url을 통해 데이터를 받는다 <br/>
▶ 서버와 클라이언트 모두 타입 지정, 카테고리 별 상태지정 useState<br/>
▶ service -> plan.ts에서 fetch로 데이터를 받는다 (URLSearchParams(query)를 사용하여 query 객체를 URL 쿼리 문자열로 변환해서 json형태로 받음) Promise를 사용해서 비동기적 데이터 안정성 향상<br/>
▶ 검색창 기능에서 Throttle기능을 사용함 동일한 콜백함수를 계속 불러오는것을 방지 <br/>

## 일정 관리 <br/>

▶ zustand로 상태관리 (action에 장소 추가 제거 시간설정기능) <br/>
▶ 장소 리스트 추가 삭제<br/>
▶ 시간 (분, 시간) 단위 변환 times.ts에 공통 유틸 생성<br/>

## 장소 마커 표시 & 숙소 추가 <br/>

▶ 숙소를 추가하면 해당 숙소가 순서대로 마커로 표시, 경로 연결 (PolylineF 사용)<br/>
▶ 기존 장소의 필터값에 숙소를 추가 시켜 category를 배열로 변경 -> 필터가 아무것도 선택되지 않으면 3개의 장소 필터가 나타남<br/>
▶ 숙소 추가&제거(store에서 관리)숙소의 개수 = 여행 일자의 -1<br/>


## 

▶ MapProvider를 통해 앱 전역에 Google Map API 적용<br/>
▶ 모든 장소의 거리 판별(구글 Maps API 사용 (DistanceMatrixService)) -> 대중교통 사용<br/>
▶ 방문된 장소를 제외해서 중복을 방지<br/>
▶ 사용자가 설정한 거리와 시간을 판단<br/>
▶ useLocation으로 URL의 정보를 받아 모달의 상태 변환


## Cypress 테스트

▶ `yarn add -D cypress@13.7.3` <br/>
▶ `yarn add -D @testing-library/cypress@10.0.2`개발환경과 컴포넌트를 일치시켜 일관된 테스트 환경 <br/>
▶ `yarn cypress open` 으로 cypress 열기 -> `yarn cy:open`으로 변경<br/>
▶ 클라이언트에서 진행되기 때문에 cypress를 client 안쪽으로 이동<br/>
▶ beforeEach와 각각의 테스트를 분리해서 독립성 보장<br/>
▶ 여행지 목록과 필터 테스트 <br/>
▶ 여행지 검색테스트, 도시 상세 모달에서 일정 만들기 테스트<br/>
▶ 일정과 계획에서 useQuery로 계획되던 것들을 queryOptions로 관리<br/>