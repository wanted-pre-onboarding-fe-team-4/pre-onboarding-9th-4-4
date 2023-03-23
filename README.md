# 원티드 인턴십 프론트엔드 4팀 - 4주차 과제
## 📖 과제 설명
**동료학습**을 통해서 팀에서 생각한 **[주문리스트 테이블]** 의 `Best Pratice` 만들기
- `Best Practice`란 모범사례라는 말로서, 특정 문제를 효과적으로 해결하기 위한 가장 성공적인 해결책 또는 방법론을 의미합니다.

## 🔗 배포링크
[🔗 배포 링크 이동](https://pre-onboarding-9th-4-4-five.vercel.app/)

## 🧑‍💻 팀원 소개
<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/SongNoin"><img src="https://avatars.githubusercontent.com/u/88178866?v=4" width="100px; alt=""/><br /><sub><b>송경환(팀장)</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/sehyeon4687"><img src="https://avatars.githubusercontent.com/u/104138055?v=4" width="100px;" alt=""/><br /><sub><b>박세현 </b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/ws8313"><img src="https://avatars.githubusercontent.com/u/87023889?v=4" width="100px;" alt=""/><br /><sub><b>김우성 </b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/chanwoo00106"><img src="https://avatars.githubusercontent.com/u/57276315?v=4" width="100px;" alt=""/><br /><sub><b>변찬우 </b></sub></a><br /></td>
           <tr/>
      <td align="center"><a href="https://github.com/hyemin33"><img src="https://avatars.githubusercontent.com/u/124856203?v=4" width="100px;" alt=""/><br /><sub><b>조혜민 </b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/2taesung"><img src="https://avatars.githubusercontent.com/u/66891085?v=4" width="100px;" alt=""/><br /><sub><b>이태성 </b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/seongbin9786"><img src="https://avatars.githubusercontent.com/u/28754907?v=4" width="100px;" alt=""/><br /><sub><b>김성빈 </b></sub></a><br /></td>
    </tr>
  </tbody>
</table>

## 💻 실행방법 
   ```bash
   # 프로젝트 클론
   git clone "https://github.com/wanted-pre-onboarding-fe-team-4/pre-onboarding-9th-4-4.git"
  
  # 프로젝트 폴더 진입
   cd pre-onboarding-9th-4-4
   
  # 모듈 설치 및 실행
   yarn && yarn dev
  ```
  
## 기능 구현





#### ✅ Assignment 1 
- 주어진 데이터를 이용하여 주문 목록 페이지를 구현해주세요
    - 주문 목록 페이지에는 주문에 대한 모든 정보를 표 형태로 확인할 수 있어야 합니다.
    - 주문 목록은 페이지네이션이 구현되어야 합니다(한 페이지에 50건의 주문이 보여야 합니다)
    - 데이터 중에서 오늘의 거래건만 보여지도록 해주세요
      - 여기서 오늘은 “2023-03-08”일을 의미합니다.

#### ✅ Assignment 2

- 정렬 기능을 구현해주세요
    - 기본 정렬은 ID 기준 오름차순으로 구현해주세요
    - 표에서 `주문번호`, `거래일 & 거래시간` 버튼을 누르면 각각 내림차순 정렬이 되도록 해주세요

#### ✅ Assignment 3

- 주문 처리 상태에 따라 filtering 기능을 구현해주세요

#### ✅ Assignment 4

- 고객이름을 검색할 수 있도록 해주세요

#### ✅ Assignment 5

- 서버에 들어온 주문을 5초마다 최신화 해주세요
  - 서버 API는 구현되어 있지 않지만, 구현되어 있다는 가정 하에 요구사항을 충족해주세요

#### ✅ Assignment 6

- 컴포넌트에 대한 테스트 코드를 구현해주세요


## 📦 폴더구조
```
📦 src 
├── 📄 App.tsx
├── 📄 main.tsx
├── 📂 apis
│   └── 📄 api.ts
├── 📂 components
│   └── 📂 table
│       ├── 📄 index.tsx
│       ├── 📂 units
│       │   ├── 📄 Columns.ts
│       │   └── 📄 ColumnsOptions.ts
│       └── 📄 useTableSearch.tsx
├── 📂 layout
│   └── 📄 MainLayout.tsx
└── 📂 types
    └── 📄 ITableData.ts

```
## 🤓 Best Practice
각자의 구현방법을 설명하고 토론했을 때 팀 안에서 이 방법이 가장 효율적이라고 판단되는 것을 정하고 그것을 팀의 `Best Practice` 로 채택해서 프로젝트에 녹였습니다.

### 1. 테이블 라이브러리 선정

이번 과제에서는 테이블 라이브러리 선정이 가장 중요하다 생각해서 개인구현으로 자유롭게 라이브러리를 선정해서 토론을 통해 비교해보았습니다. <br/>
후보는 크게 antd 와 react-table 라이브러리 두가지가 선정되었습니다.

antd 가 다른 라이브러리도 포함되어있다보니 번들크기가 많이 컸지만 개발의 난이도, 디폴트 UI의 편리함, 공식문서의 친절함 덕에 **antd** 라이브러리를 선정하였습니다.


|  | 커스터마이징 자유도 | 요구사항 구현 | 공식문서 | 번들크기 |
| --- | --- | --- | --- | --- |
| antd | 자유도는 좋으나 스타일을 인라인으로 써야해서 지저분해진다.<br/> 그래서 다른 스타일 라이브러리와 같이 사용해야한다. | 모두 구현 가능 | 공식문서 잘 되어 있었다. | 1259kB |
| react-table | 자유도는 좋으나 디폴트 UI가 없어서 정해진 디자인이 없다면 번거로웠다. | 모두 구현 가능 | 공식문서가 불친절해서 차라리 예시코드가 보기 편했다 | 56.73KB |

### 2. UI/UX
본 과제에서 사용자에게 가장 적합한 UI 를 고민해 보았을 때 아래와 같이 선정하였습니다.


**대시보드 관리자 전용 레이아웃**
- 해당 과제가 관리자 대시보드의 형식이다 생각하여 다른 정보페이지도 추가하게 사이드 메뉴가 있는 레이아웃을 적용하였습니다.

**호버시 해당 행 강조**
- 테이블 특성 상 원하는 자료의 행을 빠르게 찾아야하기 때문에 호버 시 해당 행에 강조를 줘 가독성을 높였습니다.

**페이지네이션 위치**
- 페이지 네이션 위치를 왼쪽 상단으로 배치해 필터와 정렬 옵션 간의 이동거리를 최소화해 사용자 편리성을 높였습니다.

**검색 시 해당 단어 하이라이트**
- 검색 시 같은 단어에 하이라이트를 주어 검색 결과를 더욱 직관적이게 하였습니다.

### 3. React-Query로 5초 갱신 구현

- React-Query를 채택하여 데이터 5초마다 갱신을 간편하게 구현하였습니다

```tsx
...
const { data } = useQuery('getTableData', getTableData, {
  refetchInterval: 5000,
  suspense: true,
});
...
```

### 4. 테이블 컴포넌트 분리

- antd 라이브러리 특성 상 코드가 길어지는 경우가 많아서 적절하게 분리하였습니다.
```
📂 table
├── 📄 index.tsx // 테이블 최상위 컴포넌트
├── 📂 units
│   ├── 📄 Columns.ts // 헤더 객체
│   └── 📄 ColumnsOptions.ts // 헤더 옵션, 로직
└── 📄 useTableSearch.tsx // 검색 hook
```

## 👾 코드 컨벤션
### commit message

| Type | Description |
| --- | --- |
| test | 누락된 테스트 추가 |
| feat | 새로운 기능 추가 |
| fix | 버그 수정 |
| chore | 빌드 프로세스나 보조 도구 변경 |
| docs | 문서 변경 |
| refactor | 버그 수정도, 새로운 기능 추가도 아닌 코드 변경 |
| style | 마크업, 공백, 포맷, 세미콜론 누락 등 스타일 변경 |
| ci | CI 관련 변경 |
| perf | 성능 개선 |

### branch

| 브랜치 이름 | 설명 |
| --- | --- |
| master | 제품으로 출시 가능한 브랜치 |
| feature/개발할 내용 | 기능을 개발하는 브랜치 |
| fix/수정할 내용  | 출시 버전에서 발생한 버그를 수정하는 브랜치 |
