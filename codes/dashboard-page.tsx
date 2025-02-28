import React from 'react';

const DashboardPage = () => {
  // 사용자 정보 목업 데이터
  const user = {
    name: "김민수",
    email: "minsu.kim@example.com",
    upcomingReservations: 1,
    totalReservations: 5
  };

  // 예약 정보 목업 데이터
  const reservations = [
    {
      id: 'res-001',
      date: '2025-03-03',
      time: '14:30',
      from: '제1터미널 출국장',
      to: '3번 게이트',
      status: '확정'
    },
    {
      id: 'res-002',
      date: '2025-03-10',
      time: '09:15',
      from: '제2터미널 입국장',
      to: '수하물 찾는 곳',
      status: '대기중'
    }
  ];

  return (
    <div className="min-h-screen flex bg-secondary">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-4 border-b border-gray-200">
          <span className="text-primary font-bold text-xl">공항 모빌리티</span>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <a 
                href="/dashboard" 
                className="flex items-center space-x-2 p-2 rounded-md bg-blue-50 text-primary font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>대시보드</span>
              </a>
            </li>
            <li>
              <a 
                href="/reservations/new" 
                className="flex items-center space-x-2 p-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>예약하기</span>
              </a>
            </li>
            <li>
              <a 
                href="/reservations" 
                className="flex items-center space-x-2 p-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span>내 예약 정보</span>
              </a>
            </li>
            <li>
              <a 
                href="/map" 
                className="flex items-center space-x-2 p-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <span>지도/경로 안내</span>
              </a>
            </li>
            <li>
              <a 
                href="/guide/robot-usage" 
                className="flex items-center space-x-2 p-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>로봇 이용 방법</span>
              </a>
            </li>
            <li>
              <a 
                href="/guide/safety" 
                className="flex items-center space-x-2 p-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>안전 수칙</span>
              </a>
            </li>
            <li>
              <a 
                href="/mypage" 
                className="flex items-center space-x-2 p-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>마이페이지</span>
              </a>
            </li>
          </ul>
          
          <div className="mt-8 pt-4 border-t border-gray-200">
            <a 
              href="/logout" 
              className="flex items-center space-x-2 p-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span>로그아웃</span>
            </a>
          </div>
        </nav>
      </aside>

      {/* Mobile Header (visible on small screens) */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white shadow-sm z-10">
        <div className="px-4 py-3 flex justify-between items-center">
          <span className="text-primary font-bold text-lg">공항 모빌리티</span>
          <button className="text-gray-500 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8 pt-16 md:pt-8">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">대시보드</h1>
            <p className="text-gray-600 mt-1">안녕하세요, {user.name}님! 오늘도 편안한 공항 이용 되세요.</p>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <button className="p-2 text-gray-600 hover:text-primary rounded-full hover:bg-blue-50">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-semibold">
                {user.name[0]}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Book Banner */}
        <div className="bg-primary rounded-lg p-6 mb-8 text-white flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-semibold">지금 예약하기</h2>
            <p className="text-blue-100 mt-1">공항 모빌리티 서비스로 편안한 이동을 경험하세요</p>
          </div>
          <a 
            href="/reservations/new" 
            className="px-6 py-2 bg-white text-primary font-medium rounded-md hover:bg-blue-50 transition-colors"
          >
            빠른 예약
          </a>
        </div>

        {/* Dashboard Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Stats Card 1 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">예정된 예약</p>
                <h3 className="text-2xl font-semibold text-gray-900 mt-1">{user.upcomingReservations}건</h3>
              </div>
              <div className="p-3 bg-blue-50 rounded-full text-primary">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <a 
                href="/reservations" 
                className="text-sm text-primary font-medium flex items-center"
              >
                <span>자세히 보기</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Stats Card 2 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">총 이용 횟수</p>
                <h3 className="text-2xl font-semibold text-gray-900 mt-1">{user.totalReservations}회</h3>
              </div>
              <div className="p-3 bg-blue-50 rounded-full text-primary">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <a 
                href="/mypage/history" 
                className="text-sm text-primary font-medium flex items-center"
              >
                <span>이용 내역 보기</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Map Card */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-900">공항 지도</h3>
              <a 
                href="/map" 
                className="text-sm text-primary font-medium"
              >
                확대
              </a>
            </div>
            <div className="bg-gray-200 rounded-md w-full h-32 overflow-hidden">
              <img 
                src="/api/placeholder/400/200" 
                alt="공항 지도" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Recent Reservations */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">최근 예약</h2>
            <a 
              href="/reservations" 
              className="text-sm text-primary font-medium"
            >
              모두 보기
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">예약 번호</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">날짜 / 시간</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">출발지</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">도착지</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상태</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">관리</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {reservations.map((reservation) => (
                  <tr key={reservation.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{reservation.id}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">
                      {new Date(reservation.date).toLocaleDateString('ko-KR')} {reservation.time}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">{reservation.from}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">{reservation.to}</td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        reservation.status === '확정' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {reservation.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href={`/reservations/${reservation.id}`} className="text-primary hover:text-blue-600">상세보기</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Announcements */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">공지사항</h2>
          <div className="border-l-4 border-accent bg-yellow-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">시스템 점검 안내</h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>2025년 3월 5일 오전 2시부터 4시까지 정기 시스템 점검이 진행됩니다. 해당 시간에는 서비스 이용이 제한될 수 있습니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
