import React, { useState, useEffect } from 'react';

const ReservationDetailPage = () => {
  // 실제 구현에서는 URL 파라미터에서 예약 ID를 가져와야 함
  // 예: const { reservationId } = useParams();
  const reservationId = 'RES-001'; // 임시 예약 ID
  
  // 예약 상세 정보 상태
  const [reservation, setReservation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // 취소 모달 상태
  const [showCancelModal, setShowCancelModal] = useState(false);
  
  // 예약 정보 가져오기 (실제로는 API 호출)
  useEffect(() => {
    // 실제 구현에서는 API에서 데이터를 가져와야 함
    // 임시 데이터
    setTimeout(() => {
      const reservationData = {
        id: 'RES-001',
        status: '예정',
        date: '2025-03-05',
        time: '14:30',
        departureTerminal: '제1터미널',
        departureLocation: '출국장 1층',
        destination: 'A 게이트',
        hasLuggage: true,
        specialRequests: '전동 휠체어 사용 중이라 이동 시 도움이 필요합니다.',
        createdAt: '2025-02-28T10:15:00',
        robot: {
          id: 'ROB-123',
          model: 'M3500',
          batteryLevel: '95%'
        },
        user: {
          name: '김민수',
          phone: '010-1234-5678',
          hasDisability: true
        }
      };
      
      setReservation(reservationData);
      setLoading(false);
    }, 1000);
  }, [reservationId]);
  
  // 예약 취소 처리
  const handleCancelReservation = () => {
    // 실제로는 API에 취소 요청을 보내야 함
    setReservation({
      ...reservation,
      status: '취소',
      cancelledAt: new Date().toISOString()
    });
    
    setShowCancelModal(false);
    
    // 성공 알림
    alert('예약이 취소되었습니다.');
  };
  
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
  
  // 시간 포맷 함수
  const formatTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return date.toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  // 상태에 따른 뱃지 스타일
  const getStatusBadge = (status) => {
    switch(status) {
      case '예정':
        return <span className="px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">예정</span>;
      case '확정':
        return <span className="px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full bg-green-100 text-green-800">확정</span>;
      case '완료':
        return <span className="px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">완료</span>;
      case '취소':
        return <span className="px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full bg-red-100 text-red-800">취소</span>;
      default:
        return <span className="px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">{status}</span>;
    }
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
          <p className="mt-3 text-gray-600">예약 정보를 불러오는 중...</p>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary">
        <div className="text-center">
          <div className="bg-red-100 text-red-700 p-4 rounded-lg">
            <p>예약 정보를 불러오는 데 문제가 발생했습니다.</p>
            <p className="mt-2">{error}</p>
          </div>
          <button
            onClick={() => window.location.href = '/reservations'}
            className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            예약 목록으로 돌아가기
          </button>
        </div>
      </div>
    );
  }
  
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
                className="flex items-center space-x-2 p-2 rounded-md bg-blue-50 text-primary font-medium"
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
        {/* Page Header with Back Button */}
        <div className="flex items-center mb-6">
          <a 
            href="/reservations" 
            className="mr-4 p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </a>
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">예약 상세</h1>
            <p className="text-gray-600 mt-1">
              예약 번호: {reservation.id}
            </p>
          </div>
        </div>

        {/* Reservation Status Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <div className="mb-2">{getStatusBadge(reservation.status)}</div>
              <h2 className="text-xl font-semibold text-gray-900">{formatDate(reservation.date)}</h2>
              <p className="text-gray-600">{reservation.time}</p>
            </div>
            {(reservation.status === '예정' || reservation.status === '확정') && (
              <div className="flex space-x-2">
                <button
                  onClick={() => setShowCancelModal(true)}
                  className="px-4 py-2 border border-red-300 text-red-600 rounded-md hover:bg-red-50 transition-colors"
                >
                  예약 취소
                </button>
                <a 
                  href={`/reservations/${reservation.id}/modify`} 
                  className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  예약 수정
                </a>
              </div>
            )}
          </div>

          {/* Path Information */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-start">
              <div className="w-full sm:w-1/2 mb-4 sm:mb-0 sm:pr-4">
                <h3 className="text-sm font-medium text-gray-500 mb-1">출발지</h3>
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-primary">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-base font-medium text-gray-900">{reservation.departureTerminal}</p>
                    <p className="text-sm text-gray-600">{reservation.departureLocation}</p>
                  </div>
                </div>
              </div>
              
              <div className="hidden sm:block w-12 text-center">
                <svg className="w-8 h-8 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              
              <div className="w-full sm:w-1/2 sm:pl-4">
                <h3 className="text-sm font-medium text-gray-500 mb-1">도착지</h3>
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-primary">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-base font-medium text-gray-900">{reservation.destination}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <a 
              href={`/map?from=${encodeURIComponent(reservation.departureLocation)}&to=${encodeURIComponent(reservation.destination)}`} 
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors flex items-center"
            >
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              지도에서 경로 보기
            </a>
          </div>
        </div>

        {/* Detailed Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Reservation Details */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">예약 상세 정보</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">예약 시간</h3>
                <p className="text-base text-gray-900">{formatDate(reservation.createdAt)} {formatTime(reservation.createdAt)}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">수하물 여부</h3>
                <p className="text-base text-gray-900">{reservation.hasLuggage ? '있음' : '없음'}</p>
              </div>
              
              {reservation.specialRequests && (
                <div>
                  <h3 className="text-sm font-medium text-gray-500">특별 요청사항</h3>
                  <p className="text-base text-gray-900">{reservation.specialRequests}</p>
                </div>
              )}
              
              {reservation.status === '취소' && reservation.cancelledAt && (
                <div>
                  <h3 className="text-sm font-medium text-gray-500">취소 시간</h3>
                  <p className="text-base text-gray-900">{formatDate(reservation.cancelledAt)} {formatTime(reservation.cancelledAt)}</p>
                </div>
              )}
            </div>
          </div>

          {/* Robot Information */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">로봇 정보</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">로봇 ID</h3>
                <p className="text-base text-gray-900">{reservation.robot.id}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">모델명</h3>
                <p className="text-base text-gray-900">{reservation.robot.model}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">배터리 상태</h3>
                <div className="flex items-center">
                  <div className="relative w-32 h-4 bg-gray-200 rounded-full mr-2">
                    <div 
                      className="absolute top-0 left-0 h-4 bg-green-500 rounded-full"
                      style={{ width: reservation.robot.batteryLevel }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600">{reservation.robot.batteryLevel}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <a 
                href="/guide/robot-usage" 
                className="text-primary hover:underline text-sm flex items-center"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>로봇 이용 방법 보기</span>
              </a>
            </div>
          </div>
        </div>

        {/* User Information and QR Code */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">이용자 정보</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">이름</h3>
                  <p className="text-base text-gray-900">{reservation.user.name}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500">연락처</h3>
                  <p className="text-base text-gray-900">{reservation.user.phone}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500">특별 지원</h3>
                  <p className="text-base text-gray-900">{reservation.user.hasDisability ? '필요함' : '필요하지 않음'}</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">예약 QR 코드</h2>
              {/* Placeholder for QR Code */}
              <div className="w-40 h-40 bg-gray-100 border border-gray-200 rounded-md mx-auto flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              </div>
              <p className="mt-3 text-sm text-gray-600">이 QR 코드를 로봇에 스캔하여 인증하세요.</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a 
            href="/reservations" 
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors flex-1 text-center"
          >
            예약 목록으로 돌아가기
          </a>
          
          <a 
            href="/reservations/new" 
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors flex-1 text-center"
          >
            새 예약하기
          </a>
        </div>
      </main>

      {/* Cancel Confirmation Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto overflow-hidden">
            <div className="px-6 py-4 bg-red-50 border-b border-red-100 flex justify-between items-center">
              <h3 className="text-lg font-medium text-red-700">예약 취소 확인</h3>
              <button 
                onClick={() => setShowCancelModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">예약을 취소하시겠습니까?</h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {reservation.id} 예약을 취소합니다. 이 작업은 되돌릴 수 없습니다.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-gray-50 p-4 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">예약 일시</span>
                  <span className="text-sm text-gray-700">{formatDate(reservation.date)} {reservation.time}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">경로</span>
                  <span className="text-sm text-gray-700">{reservation.departureLocation} → {reservation.destination}</span>
                </div>
              </div>
              
              <div className="mt-6 flex space-x-3">
                <button
                  onClick={() => setShowCancelModal(false)}
                  className="flex-1 px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  아니오
                </button>
                <button
                  onClick={handleCancelReservation}
                  className="flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  예, 취소합니다
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationDetailPage;
