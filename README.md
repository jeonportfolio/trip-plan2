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
▶api는 따로 서버를 만들고 proxy 적용, client와 서버 분리` yarn add -D concurrently@8.2.2` 동시실행<br/>
▶상대경로를 tsconfig.js를 생성하여 절대경로로 변환 경로 간편화<br/>
▶`yarn add react-router-dom@6.25.1` 리액트 라우터 사용<br/>
▶ Suspense와 lazy를 사용해서 초기로딩 (필요한 자원만 렌더링 네트워크 소스 최적화)사용자 경험 증가<br/>
▶`yarn add -D tailwindcss@3.4.3 postcss@8.4.39 autoprefixer@10.4.19` `yarn tailwindcss init -p` tailwindcss 관련 모듈 설치<br/>
▶ card -> cardList 구조<br/>

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