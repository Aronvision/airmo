import React, { useState } from 'react';

const UsageHistoryPage = () => {
  // 필터 상태
  const [period, setPeriod] = useState('all');
  const [usageType, setUsageType] = useState('all');
  
  // 샘플 이용 내역 데이터
  const [usageHistory, setUsageHistory] = useState([
    {
      id: 'USG-001',
      date: '2025-03-01',
      time: '14:30 - 15:05',
      origin: '제1터미널 출국장',
      destination: 'A 게이트',
      duration: '35분',
      distance: '1.2km',
      status: '완료',
      reservationId: 'RES-001'
    },
    {
      id: 'USG-002',
      date: '2025-02-25',
      time: '09:15 - 09:45',
      origin: '제2터미널 입국장',
      destination: '공항 철도역',
      duration: '30분',
      distance: '1.0km',
      status: '완료',
      reservationId: 'RES-002'
    },
    {
      id: 'USG-003',
      date: '2025-02-15',
      time: '16:45 - 17:10',
      origin: 'B 게이트',
      destination: '공항 철도역',
      duration: '25분',
      distance: '0.8km',
      status: '완료',
      reservationId: 'RES-003'
    },
    {
      id: 'USG-004',
      date: '2025-02-05',
      time: '11:00 - 11:30',
      origin: '체크인 카운터',
      destination: 'D 게이트',
      duration: '30분',
      distance: '1.1km',
      status: '취소',
      reservationId: 'RES-004',
      cancelReason: '일정 변경'
    }
  ]);
  
  // 날짜 포맷 함수
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    });
  };
  
  // 필터링된 이용 내역
  const getFilteredHistory = () => {
    let filtered = [...usageHistory];
    
    // 기간별 필터링
    if (period === 'month') {
      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
      filtered = filtered.filter(item => new Date(item.date) >= oneMonthAgo);
    } else if (period === '3months') {
      const threeMonthsAgo = new Date();
      threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
      filtered = filtered.filter(item => new Date(item.date) >= threeMonthsAgo);
    }
    
    // 이용 상태별 필터링
    if (usageType !== 'all') {
      filtered = filtered.filter(item => item.status === usageType);
    }
    
    return filtered;
  };
  
  const filteredHistory = getFilteredHistory();
  
  // 상태에 따른 뱃지 스타일
  const getStatusBadge = (status) => {
    switch(status) {
      case '완료':
        return <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">완료</span>;
      case '취소':
        return <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">취소</span>;
      default:
        return <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">{status}</span>;
    }
  };
  
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
                className="flex items-center space-x-2 p-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors"
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
                className="flex items-center space-x-2 p-2 rounded-md bg-blue-50 text-primary font-medium"
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

      {/* Mobile Header */}
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
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">이용 내역</h1>
          <p className="text-gray-600 mt-1">
            지난 이용 기록을 확인하고 관리하세요.
          </p>
        </div>

        {/* MyPage Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="flex border-b border-gray-200 overflow-x-auto">
            <a 
              href="/mypage/profile" 
              className="py-3 px-6 font-medium text-sm text-gray-500 hover:text-gray-700"
            >
              내 프로필
            </a>
            <a 
              href="/mypage/history" 
              className="py-3 px-6 font-medium text-sm border-b-2 border-primary text-primary"
            >
              이용 내역
            </a>
            <a 
              href="/mypage/settings" 
              className="py-3 px-6 font-medium text-sm text-gray-500 hover:text-gray-700"
            >
              설정
            </a>
            <a 
              href="/mypage/preferences" 
              className="py-3 px-6 font-medium text-sm text-gray-500 hover:text-gray-700"
            >
              이용 환경
            </a>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div>
                <label htmlFor="period" className="block text-sm font-medium text-gray-700 mb-1">
                  기간
                </label>
                <select
                  id="period"
                  name="period"
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                  className="w-full sm:w-40 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="all">전체 기간</option>
                  <option value="month">최근 1개월</option>
                  <option value="3months">최근 3개월</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="usageType" className="block text-sm font-medium text-gray-700 mb-1">
                  이용 상태
                </label>
                <select
                  id="usageType"
                  name="usageType"
                  value={usageType}
                  onChange={(e) => setUsageType(e.target.value)}
                  className="w-full sm:w-40 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="all">전체</option>
                  <option value="완료">완료</option>
                  <option value="취소">취소</option>
                </select>
              </div>
            </div>
            
            <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>내보내기</span>
            </button>
          </div>
        </div>

        {/* Usage History List */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          {filteredHistory.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      날짜 / 시간
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      출발지
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      도착지
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      이용 시간
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      상태
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      상세
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredHistory.map((usage) => (
                    <tr key={usage.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{formatDate(usage.date)}</div>
                        <div className="text-sm text-gray-500">{usage.time}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{usage.origin}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{usage.destination}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{usage.duration}</div>
                        <div className="text-sm text-gray-500">{usage.distance}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          {getStatusBadge(usage.status)}
                        </div>
                        {usage.status === '취소' && usage.cancelReason && (
                          <div className="text-xs text-gray-500 mt-1">{usage.cancelReason}</div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a 
                          href={`/reservations/${usage.reservationId}`} 
                          className="text-primary hover:text-blue-800"
                        >
                          상세보기
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-8 text-center">
              <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-600 mb-4">선택한 기간에 해당하는 이용 내역이 없습니다.</p>
              <a 
                href="/reservations/new" 
                className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span>새 예약하기</span>
              </a>
            </div>
          )}
        </div>

        {/* Usage Statistics */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">이용 통계</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-500 mb-1">총 이용 횟수</h3>
              <p className="text-2xl font-semibold text-gray-900">{usageHistory.filter(u => u.status === '완료').length}회</p>
              <p className="text-sm text-gray-600 mt-1">최근 3개월: {usageHistory.filter(u => u.status === '완료' && new Date(u.date) >= new Date(new Date().setMonth(new Date().getMonth() - 3))).length}회</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-500 mb-1">총 이동 거리</h3>
              <p className="text-2xl font-semibold text-gray-900">4.1km</p>
              <p className="text-sm text-gray-600 mt-1">최근 3개월: 3.0km</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-500 mb-1">총 이용 시간</h3>
              <p className="text-2xl font-semibold text-gray-900">2시간</p>
              <p className="text-sm text-gray-600 mt-1">최근 3개월: 1시간 30분</p>
            </div>
          </div>
        </div>

        {/* Common Routes */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">자주 이용한 경로</h2>
          
          <div className="space-y-4">
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full text-primary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <div className="ml-4 flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-base font-medium text-gray-900">제1터미널 출국장 → A 게이트</h3>
                  <span className="text-sm text-gray-500">2회</span>
                </div>
                <p className="text-sm text-gray-600">평균 소요 시간: 35분</p>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full text-primary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <div className="ml-4 flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-base font-medium text-gray-900">입국장 → 공항 철도역</h3>
                  <span className="text-sm text-gray-500">2회</span>
                </div>
                <p className="text-sm text-gray-600">평균 소요 시간: 27분</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <a 
              href="/reservations/new" 
              className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              <span>새 예약하기</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UsageHistoryPage;
