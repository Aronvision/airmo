# 공항 모빌리티 UI/UX 디자인 가이드

본 문서는 토스(TOSS)의 디자인 시스템을 참고하여, 간결하고 깔끔한 UI/UX를 구현하기 위한 **공항 모빌리티 웹 서비스** 디자인 가이드입니다. **Tailwind CSS**를 가정하고 있으며, 반응형 디자인과 접근성에 유의하여 작성하였습니다.

---

## 목차

1. [디자인 시스템 개요 (Design System Overview)](https://www.notion.so/Design-1a8acb229e678007bdfeeebe72861d5d?pvs=21)
2. [Color Palette for TailwindCSS](https://www.notion.so/Design-1a8acb229e678007bdfeeebe72861d5d?pvs=21)
    - Primary, Secondary, Accent, Neutral, etc.
3. [페이지 구현 상세 (Page Implementations)](https://www.notion.so/Design-1a8acb229e678007bdfeeebe72861d5d?pvs=21)
    - Core Purpose
    - Key Components
    - Layout Structure
4. [레이아웃 컴포넌트 (Layout Components)](https://www.notion.so/Design-1a8acb229e678007bdfeeebe72861d5d?pvs=21)
    - Applicable Routes
    - Core Components
    - Responsive Behavior
5. [상호작용 패턴 (Interaction Patterns)](https://www.notion.so/Design-1a8acb229e678007bdfeeebe72861d5d?pvs=21)
6. [반응형 Breakpoints](https://www.notion.so/Design-1a8acb229e678007bdfeeebe72861d5d?pvs=21)
7. [Grid System 고려사항](https://www.notion.so/Design-1a8acb229e678007bdfeeebe72861d5d?pvs=21)

---

## 디자인 시스템 개요 (Design System Overview)

### 1) 전체 디자인 스타일 및 분위기

- **토스(TOSS) 스타일** 참고
    - **간결함**: 불필요한 장식 최소화, 여백(White Space) 활용
    - **명확함**: 가독성 높은 폰트와 명료한 색상 대비
    - **일관성**: 주요 버튼, 레이아웃, 컴포넌트가 일괄된 규칙으로 구성

### 2) 목적과 분위기

- **친근함**: 공항 이용객, 특히 처음 이용하는 사용자도 쉽고 편하게 접근 가능
- **안전성**: 휠체어 로봇 이용 시 안정감과 신뢰를 줄 수 있는 톤
- **전문성**: 공항·로봇·IT 융합서비스임을 고려한 세련된 UI

### 3) 폰트 & 타이포그래피

- **주요 폰트**: Noto Sans KR, Spoqa Han Sans Neo 등 웹 환경에서 가독성이 높은 폰트
- **크기 및 두께**
    - 제목(Heading): `font-semibold` 또는 `font-bold`
    - 본문(Body): `font-normal`, 14~16px (모바일에서는 14px, 데스크톱에서는 16px)
- **행간(Line Height)**: 최소 1.5배로 가독성 확보

### 4) 아이콘 스타일

- **단순 아이콘**: Stroke 기반의 심플 아이콘
- **일관성**: 모든 아이콘의 굵기, 모서리(라운드) 정도를 통일

---

## Color Palette for TailwindCSS

토스 디자인처럼 **블루**를 주요 포인트로 사용하되, 공항이라는 특성을 살려 **밝고 깨끗한** 느낌을 강조했습니다.

| 이름 | Tailwind 변수 예시 | HEX 코드 | 용도 및 설명 |
| --- | --- | --- | --- |
| **Primary** | `bg-primary`, `text-primary` | `#0055FF` | 브랜드 컬러. 버튼, 링크, 액센트 요소에 사용. 시인성 높은 파란색 |
| **Secondary** | `bg-secondary`, `text-secondary` | `#EBF0F5` | 배경색, 카드 섹션 백그라운드 등에 사용. 밝은 회색-청색 톤으로 시각 피로감을 줄여줌 |
| **Accent** | `bg-accent`, `text-accent` | `#FFB400` | 중요 알림, 경고, 포인트 배지 등에 사용 (노란색 계열). 적절히 강조가 필요할 때 사용 |
| **Neutral** | `bg-neutral`, `text-neutral` | `#FFFFFF` | 기본 배경(화이트) 또는 서브 텍스트 배경. 전체 레이아웃의 베이스 컬러 |
| **Text Main** | `text-gray-900` | `#1F2937` | 본문 텍스트. Tailwind 기본 Gray Scale 중 가장 시인성 높은 다크그레이 |
| **Text Sub** | `text-gray-500` | `#6B7280` | 서브 텍스트 및 부연설명, 라벨 등에 활용. |

> 선택 이유
> 
> - **Primary(블루)**: 토스의 브랜드 아이덴티티처럼 신뢰감을 주며, 공항 테마와도 잘 어울리는 깔끔한 파랑
> - **Secondary(밝은 그레이/블루톤)**: 깨끗하고 부드러운 느낌을 주어 배경 색으로 사용하기 용이
> - **Accent(노랑)**: 주의를 끄는 안내나 알림 배지 등에 시각적 포인트로 사용

---

## 페이지 구현 상세 (Page Implementations)

아래는 주요 페이지별 UI/UX 가이드입니다. **모든 페이지**는 모바일(320px 이상) ~ 데스크톱(1440px 이상) 환경에서 반응형으로 동작해야 합니다.

### 1) **Root ("/")**

- **핵심 목적**:
    - 사용자가 사이트 접속 시 맨 처음 보는 페이지
    - 서비스 소개, 주요 기능 진입점 안내
- **주요 컴포넌트**:
    - 히어로 섹션(Hero Section): 간략한 서비스 소개, 로고, CTA(Call to Action) 버튼
    - 이미지(예: https://picsum.photos/seed/root-hero/1280/720)
    - 로그인/회원가입 버튼 → 각 기능 페이지로 이동
- **레이아웃 구조**:
    - 상단(NavBar): 로고, 우측에 “로그인”, “회원가입” 버튼
    - 메인(Hero): 서비스 슬로건(“편안한 공항 이동, 공항 모빌리티가 함께합니다”)
    - 하단(Footer): 짧은 서비스 안내, 저작권

### 2) **로그인 ("/login")**

- **핵심 목적**:
    - 사용자가 공항 모빌리티 이용 전 **계정 인증**
- **주요 컴포넌트**:
    - 아이디/비밀번호 입력 폼 (Tailwind `form-control`)
    - ‘로그인’ 버튼(Primary 색상)
    - 추가 링크: “회원가입”, “비밀번호 찾기”
- **레이아웃 구조**:
    - 중앙 정렬(Card): 배경은 Secondary(#EBF0F5)로 간단히 감싸기
    - 모바일에서는 세로 스크롤 적정 여백 유지, 데스크톱은 최대 폭 400~500px로 제한
- **이미지**: https://picsum.photos/seed/login-bg/800/600

### 3) **회원가입 ("/register")**

- **핵심 목적**:
    - 신규 사용자 정보 입력 및 **본인 인증(항공권 번호 등)**
- **주요 컴포넌트**:
    - 입력 필드: 이름, 이메일, 비밀번호, 항공권 번호
    - ‘회원가입’ 버튼(Primary 색상)
    - 이용 약관 체크박스
- **레이아웃 구조**:
    - 로그인 페이지와 유사한 카드 레이아웃
    - 상단엔 “회원가입” 문구 표시, 사용자는 단계별 진행(1. 기본정보 → 2. 항공권 번호 → 3. 완료)
- **이미지**: https://picsum.photos/seed/register-hero/800/600

### 4) **메인 대시보드 ("/dashboard")**

- **핵심 목적**:
    - 사용자 로그인 후 첫 화면, **주요 기능**(예약하기, 내 예약 정보, 지도 안내 등) 링크 제공
- **주요 컴포넌트**:
    - 상단 헤더(로고, 사용자 이름, 알림 아이콘 등)
    - 빠른 예약 배너(“지금 예약하기”)
    - 요약 카드(예: “예약 현황 2건”, “오늘 로봇 이용 예정 1건”)
- **레이아웃 구조**:
    - **사이드바(Sidebar)** 또는 상단 탭 메뉴로 주요 섹션 링크
    - 메인 그리드(2-3컬럼)로 요약 카드 또는 캘린더 위젯 배치
- **이미지**: https://picsum.photos/seed/dashboard-bg/1200/800

### 5) **예약하기 ("/reservations/new")**

- **핵심 목적**:
    - 사용자에게 **탑승 날짜/시간/터미널/목적지** 등을 입력받고, 예약 확정
- **주요 컴포넌트**:
    - 입력 폼(날짜 선택 캘린더, 시간 선택, 터미널 드롭다운, 요청사항 텍스트 등)
    - “예약하기” 버튼(Primary)
    - 예약 안내 문구/팝업: “예약이 완료되면, 로봇 이용 시간 10분 전 알림을 드립니다.”
- **레이아웃 구조**:
    - 폼 입력 영역은 1~2컬럼 구조 (모바일: 1컬럼, 데스크톱: 2컬럼)
    - 오른쪽(또는 하단)에 요약 패널(예약 정보 미리보기)
- **이미지**: https://picsum.photos/seed/reservation-new/1000/600

### 6) **내 예약 정보 ("/reservations")**

- **핵심 목적**:
    - 사용자 과거/현재 예약 목록 확인, 예약 변경/취소
- **주요 컴포넌트**:
    - 예약 목록 리스트(카드 또는 표 형태)
    - “상세 보기” 버튼 → 예약 상세 모달 혹은 상세 페이지
    - 상태 태그(“확정”, “취소됨”, “진행 중”)
- **레이아웃 구조**:
    - 상단에 필터(날짜별, 상태별)
    - 목록은 반복 UI 형태로 카드 리스트 or 테이블
- **이미지**: https://picsum.photos/seed/reservation-list/1200/400

### 7) **지도/경로 안내 ("/map")**

- **핵심 목적**:
    - 공항 내부 지도 시각화, 로봇 이동 경로 안내
- **주요 컴포넌트**:
    - 검색창(게이트/시설명 입력)
    - 지도(확대/축소, 터미널 구역 표시)
    - 현재 로봇 위치(마커), 목적지 표시, 안내 텍스트
- **레이아웃 구조**:
    - 지도는 가로 폭 최대한 넓게(모바일은 전체 화면, 데스크톱은 중앙/우측 메인 영역)
    - 좌/우측 사이드바(검색 결과 리스트, 즐겨찾기 등)
- **이미지**: https://picsum.photos/seed/airport-map/1200/600

---

## 레이아웃 컴포넌트 (Layout Components)

### 1) Applicable Routes

- **Header/Footer Layout**: `"/"`, `"/login"`, `"/register"`, 그 외 모든 페이지 공통
- **Sidebar Layout**: 주로 `"/dashboard"`, `"/reservations/*"`, `"/map"`, 마이페이지 등 내부 페이지
- **Full Width Layout**: 특정 프로모션 페이지나, 지도 등 화면을 꽉 채워야 하는 경우

### 2) Core Components

- **Header**
    - 로고, 우측 로그인/로그아웃 버튼, 사용자 아바타(로그인 시)
- **Sidebar**
    - 메뉴 항목: 대시보드, 예약하기, 예약 정보, 지도, 마이페이지
    - 아이콘 + 텍스트 구조
- **Footer**
    - 저작권 안내, 간단 연락처, SNS 링크 (옵션)

### 3) Responsive Behavior

- **모바일(mobile: 320px ~ 767px)**
    - Header 고정 상단 바, Sidebar는 햄버거 메뉴로 숨김
    - 기본 1컬럼, 이미지/카드 최소화, 중요 콘텐츠 우선 배치
- **태블릿(tablet: 768px ~ 1023px)**
    - Sidebar가 보이지만 축소된 아이콘 형태
    - 카드/컨테이너 2컬럼까지 가능
- **데스크톱(desktop: 1024px ~ 1439px)**
    - Sidebar 고정, 메인 최대 2~3컬럼 레이아웃
- **와이드(wide: ≥1440px)**
    - 넓은 그리드(4컬럼 이상) 가능, Hero 섹션 확장, 더 풍부한 UI 구성

---

## 상호작용 패턴 (Interaction Patterns)

1. **버튼**
    - **Primary Button**: 파란색 배경(`bg-primary text-white`), 라운드 모서리, 그림자 최소
    - **Secondary Button**: 회색 테두리(`border-gray-300 text-gray-700`)
2. **폼 요소**
    - 라벨+인풋 구조. 포커스 시 **파란색 테두리**(`outline-primary`)
    - 에러 시 빨간 테두리(`border-red-500`), 에러 메시지 붉은 텍스트
3. **모달/다이얼로그**
    - 예약 상세, 도움말, 안전 수칙 등.
    - 백그라운드 어둡게(`bg-black bg-opacity-50`) + 화이트 카드
4. **Hover/Active 상태**
    - Hover 시 버튼/카드 영역에 살짝 음영 추가 (`hover:shadow-md`)
5. **애니메이션**
    - TOSS처럼 **최소한의 전환** 애니메이션 (0.2~0.3초)
    - 큰 동작이 아닌 미묘한 페이드인/슬라이드인 효과로 사용성 향상

---

## 반응형 Breakpoints

Tailwind에서는 기본적으로 아래와 같은 브레이크포인트를 사용하나, 요청하신 범위를 기준으로 제시합니다.

```scss
scss
복사편집
$breakpoints: (
  'mobile': 320px,
  'tablet': 768px,
  'desktop': 1024px,
  'wide': 1440px
);

```

- **mobile**: 최소 320px ~ 767px
- **tablet**: 768px ~ 1023px
- **desktop**: 1024px ~ 1439px
- **wide**: 1440px 이상

**각 브레이크포인트**에서 레이아웃이 어떻게 변경되는지, 그리드 컬럼 수가 어떻게 변하는지를 사전에 정의하고, Tailwind의 `@screen` 또는 유틸리티 클래스를 통해 조건부 스타일을 적용합니다.

---

## Grid System 고려사항

- **12컬럼 그리드**
    - 모바일: 1~2컬럼
    - 데스크톱 이상: 최대 12컬럼 분할 가능 (예: 사이드바 3컬럼 + 메인 9컬럼)
- **간격(Gap)**
    - `gap-4` 또는 `gap-6` 정도로 카드 사이 적정 여백 유지
- **섹션 구분**
    - 상단 영웅/헤더, 중단 콘텐츠, 하단 등 레이아웃 구분 시 Tailwind `container mx-auto px-4` 등을 활용

---

## 결론 및 종합 권고

- **일관성**: 토스와 유사한 **심플 & 깔끔** 디자인 유지
- **색상 활용**: 파란색(Primary) 중심, Secondary와 Neutral로 배경/폰트 배리에이션
- **접근성**: 폰트 크기/대비도(Contrast Ratio) 확보, 시각 장애 사용자 위한 폼 라벨/설명 추가
- **반응형**: 최소 320px ~ 1440px 이상의 화면에서 유연하게 동작할 수 있도록 그리드 설계
- **이미지 사용**: 메인 배너, 지도 안내 섹션 등 적절한 스톡 이미지(picsum.photos)로 시각적 흥미 제공

위 가이드를 기반으로 구현 시, **공항 모빌리티** 서비스가 사용자에게 **직관적이고 깔끔한** 경험을 제공할 수 있을 것입니다.

