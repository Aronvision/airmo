# 공항 모빌리티 웹 프로젝트 구조

## 프로젝트 개요

이 문서는 모바일 및 데스크톱 장치에서 사용자에게 원활한 경험을 제공하도록 설계된 공항 모빌리티 웹 애플리케이션의 구조와 연결 방식을 설명합니다. 이 애플리케이션은 공항 방문객이 공항 전역에서 모빌리티 로봇을 예약하고 사용할 수 있게 합니다.

## 파일 구조 및 URL

```
Copy
📦 airport-mobility
 ┣ 📂 public
 ┃ ┣ 📜 index.html
 ┃ ┣ 📜 favicon.ico
 ┃ ┗ 📂 assets
 ┃   ┗ 📂 images
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 layout
 ┃ ┃ ┃ ┣ 📜 Sidebar.jsx
 ┃ ┃ ┃ ┣ 📜 MobileHeader.jsx
 ┃ ┃ ┃ ┗ 📜 Footer.jsx
 ┃ ┃ ┗ 📂 common
 ┃ ┃   ┣ 📜 StatusBadge.jsx
 ┃ ┃   ┣ 📜 Modal.jsx
 ┃ ┃   ┗ 📜 Button.jsx
 ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📜 MainPage.jsx             → /
 ┃ ┃ ┣ 📜 LoginPage.jsx            → /login
 ┃ ┃ ┣ 📜 RegisterPage.jsx         → /register
 ┃ ┃ ┣ 📜 DashboardPage.jsx        → /dashboard
 ┃ ┃ ┣ 📜 ReservationPage.jsx      → /reservations/new
 ┃ ┃ ┣ 📜 ReservationsListPage.jsx → /reservations
 ┃ ┃ ┣ 📜 ReservationDetailPage.jsx → /reservations/:id
 ┃ ┃ ┣ 📜 MapPage.jsx              → /map
 ┃ ┃ ┣ 📜 RobotUsageGuidePage.jsx  → /guide/robot-usage
 ┃ ┃ ┣ 📜 SafetyGuidePage.jsx      → /guide/safety
 ┃ ┃ ┣ 📜 MyProfilePage.jsx        → /mypage/profile
 ┃ ┃ ┣ 📜 SettingsPage.jsx         → /mypage/settings
 ┃ ┃ ┗ 📜 UsageHistoryPage.jsx     → /mypage/history
 ┃ ┣ 📂 context
 ┃ ┃ ┗ 📜 AuthContext.jsx
 ┃ ┣ 📂 utils
 ┃ ┃ ┣ 📜 api.js
 ┃ ┃ ┗ 📜 formatters.js
 ┃ ┣ 📂 routes
 ┃ ┃ ┣ 📜 AppRouter.jsx
 ┃ ┃ ┗ 📜 PrivateRoute.jsx
 ┃ ┣ 📂 styles
 ┃ ┃ ┗ 📜 tailwind.css
 ┃ ┣ 📜 App.jsx
 ┃ ┗ 📜 index.jsx
 ┣ 📜 package.json
 ┣ 📜 tailwind.config.js
 ┗ 📜 .env

```

## URL 구조 및 페이지 매핑

```
URL컴포넌트접근 권한설명/MainPage공개서비스 소개 랜딩 페이지/loginLoginPage공개사용자 인증/registerRegisterPage공개신규 사용자 등록/dashboardDashboardPage비공개로그인 후 메인 대시보드/reservations/newReservationPage비공개새로운 모빌리티 로봇 예약 생성/reservationsReservationsListPage비공개사용자의 예약 목록/reservations/:idReservationDetailPage비공개특정 예약의 상세 보기/mapMapPage비공개내비게이션 안내가 포함된 공항 지도/guide/robot-usageRobotUsageGuidePage비공개모빌리티 로봇 사용 방법/guide/safetySafetyGuidePage비공개안전 가이드라인/mypage/profileMyProfilePage비공개사용자 프로필 관리/mypage/settingsSettingsPage비공개앱 설정 및 환경설정/mypage/historyUsageHistoryPage비공개로봇 사용 기록
```

## 연결 방법론

### 1. 라우팅 설정

React Router를 사용하여 중앙 라우팅 구성 생성:

```jsx
jsx
Copy
// src/routes/AppRouter.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

// 모든 페이지 컴포넌트 임포트
import MainPage from '../pages/MainPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
// ... 다른 임포트

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 공개 라우트 */}
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* 비공개 라우트 - 인증 필요 */}
        <Route path="/dashboard" element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        } />
        <Route path="/reservations/new" element={
          <PrivateRoute>
            <ReservationPage />
          </PrivateRoute>
        } />
        {/* ... 다른 비공개 라우트 */}

        {/* 리디렉션 */}
        <Route path="/mypage" element={<Navigate to="/mypage/profile" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

```

### 2. 인증 보호

인증된 라우트를 보호하기 위한 `PrivateRoute` 컴포넌트 생성:

```jsx
jsx
Copy
// src/routes/PrivateRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;

```

### 3. 인증 컨텍스트

애플리케이션 전체에서 사용자 인증을 관리하기 위한 `AuthContext` 구현:

```jsx
jsx
Copy
// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import api from '../utils/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 마운트 시 인증 상태 확인
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (token) {
          // 백엔드에서 토큰 확인
          const response = await api.get('/auth/verify');
          setUser(response.data.user);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('인증 확인 실패:', error);
        localStorage.removeItem('authToken');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    const { token, user } = response.data;

    localStorage.setItem('authToken', token);
    setUser(user);
    setIsAuthenticated(true);
    return user;
  };

  const logout = async () => {
    try {
      await api.post('/auth/logout');
    } catch (error) {
      console.error('로그아웃 오류:', error);
    } finally {
      localStorage.removeItem('authToken');
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

```

### 4. 공유 레이아웃 컴포넌트

일관된 UI를 위한 재사용 가능한 레이아웃 컴포넌트 생성:

```jsx
jsx
Copy
// src/components/layout/Sidebar.jsx
import { useLocation, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Sidebar = () => {
  const location = useLocation();
  const { user, logout } = useAuth();

  // 현재 경로가 메뉴 항목과 일치하는지 확인
  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <aside className="w-64 bg-white shadow-md hidden md:block">
      {/* 내비게이션 링크가 있는 사이드바 콘텐츠 */}
      {/* ... */}
    </aside>
  );
};

export default Sidebar;

```

## 구현 가이드라인

### 1. API 통합

중앙화된 API 유틸리티 사용:

```jsx
jsx
Copy
// src/utils/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// 인증 토큰 추가를 위한 요청 인터셉터
api.interceptors.request.use(config => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 오류 처리를 위한 응답 인터셉터
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      // 권한 없음(토큰 만료) 처리
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;

```

### 2. 컴포넌트 통합 예시

페이지에서 컴포넌트 통합 예시:

```jsx
jsx
Copy
// src/pages/DashboardPage.jsx
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/layout/Sidebar';
import MobileHeader from '../components/layout/MobileHeader';
import { useAuth } from '../context/AuthContext';
import api from '../utils/api';

const DashboardPage = () => {
  const { user } = useAuth();
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await api.get('/reservations');
        setReservations(response.data);
      } catch (error) {
        console.error('예약 가져오기 실패:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  return (
    <div className="min-h-screen flex bg-secondary">
      <Sidebar />
      <MobileHeader />
      <main className="flex-1 overflow-y-auto p-4 md:p-8 pt-16 md:pt-8">
        {/* 대시보드 콘텐츠 */}
      </main>
    </div>
  );
};

export default DashboardPage;

```

## 중요 고려사항

### 1. 환경 설정

환경 변수를 위한 `.env` 파일 생성:

```
Copy
REACT_APP_API_URL=http://localhost:3000/api

```

### 2. 모바일 최적화

- 다양한 화면 크기에서 모든 페이지 테스트
- 사이드바가 숨겨져 있을 때 모바일 헤더가 제대로 작동하는지 확인
- 모바일 사용자를 위한 터치 상호작용 최적화
- 일관된 반응형 디자인 패턴 구현

### 3. 인증 흐름

- 보호된 콘텐츠를 렌더링하기 전에 항상 인증 상태 확인
- 토큰 만료를 우아하게 처리
- 인증 실패에 대한 명확한 오류 메시지 제공
- 적절한 로그아웃 기능 구현

### 4. 성능 최적화

- 더 큰 컴포넌트에 React.lazy를 사용한 코드 분할 구현
- 자주 다시 렌더링할 필요가 없는 컴포넌트에 React.memo 사용
- 지연 로딩 기술을 사용한 이미지 로딩 최적화
- 오프라인 기능을 위한 서비스 워커 고려

### 5. 우분투에서 배포

```bash
bash
Copy
# Node.js 및 npm 설치
sudo apt update
sudo apt install nodejs npm

# 빌드 종속성 설치
sudo apt install build-essential

# 저장소 복제 및 종속성 설치
git clone https://github.com/your-repo/airport-mobility.git
cd airport-mobility
npm install

# 프로덕션용 빌드
npm run build

# Nginx 설정
sudo apt install nginx
sudo nano /etc/nginx/sites-available/airport-mobility

# Nginx 사이트 구성
# server {
#     listen 80;
#     server_name your-domain.com;
#     root /var/www/airport-mobility/build;
#     index index.html;
#
#     location / {
#         try_files $uri $uri/ /index.html;
#     }
# }

# 사이트 활성화 및 Nginx 재시작
sudo ln -s /etc/nginx/sites-available/airport-mobility /etc/nginx/sites-enabled/
sudo systemctl restart nginx

# 빌드 파일 복사
sudo mkdir -p /var/www/airport-mobility
sudo cp -r build/* /var/www/airport-mobility/

```

### 6. 백엔드 연결

- 모든 API 엔드포인트가 백엔드 구현과 일치하는지 확인
- API 호출에 대한 적절한 오류 처리 구현
- 자주 액세스하는 데이터에 대한 요청 캐싱 구현 고려
- 다양한 환경의 API URL을 관리하기 위한 환경 변수 사용

---

이 구조와 연결 방법론을 따르면 다양한 장치에서 원활한 사용자 경험을 제공하는 잘 구성되고 유지 관리가 가능한 React 애플리케이션을 갖게 될 것입니다.