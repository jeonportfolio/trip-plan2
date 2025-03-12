# 

## 세팅 

▶`npm create vite@5.2.3 travel-plan -- --template react-ts`<br/>
▶client로 public, src, index.html 이동<br/>
▶ 서버 설정 `yarn add express@4.19.2`, `yarn add -D @types/express@4.17.21 vite-node@2.0.4`<br/>
▶DB 설정 `yarn add nedb@1.8.0`, `yarn add -D @types/nedb@1.8.16`<br/>
▶ id 설정 `yarn add nanoid@5.0.7`<br/>


## 설계 

▶nedb를 사용해 도시 정보 가져오기 (get, post) 방식 사용<br/>
▶fetch를 통해 api 통신 (JSON)<br/>
▶api는 따로 서버를 만들고 proxy 적용, client와 서버 분리` yarn add -D concurrently@8.2.2` 동시실행<br/>
▶상대경로를 tsconfig.js를 생성하여 절대경로로 변환 경로 간편화<br/>
▶`yarn add react-router-dom@6.25.1` 리액트 라우터 사용<br/>
▶ Suspense와 lazy를 사용해서 초기로딩 (필요한 자원만 렌더링 네트워크 소스 최적화)사용자 경험 증가<br/>
▶`yarn add -D tailwindcss@3.4.3 postcss@8.4.39 autoprefixer@10.4.19` `yarn tailwindcss init -p` tailwindcss 관련 모듈 설치<br/>
▶ card -> cardList 구조<br/>

## 상단 탭 & 검색창 구성 

▶ 필터 기능을 통해 필요한 부분만 렌더링 하도록 설정 <br/>
▶`yarn add classnames@2.5.1` css 동적 사용(active로 활성 비활성)<br/>
▶ `yarn add -D vite-plugin-svgr@4.2.0` svg를 컴포넌트<br/>
▶ onCompositionEnd를 사용해서 단어완성과 useState로 상태를 판단<br/>

## 레이아웃 구성 

▶`PropsWithChildren`를 통해 children을 배치<br/>
▶wide와 narrow로 넒고 좁은 레이아웃을 컴포넌트화 하여 적용<br/>
