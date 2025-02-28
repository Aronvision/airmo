import React, { useState } from 'react';

const ReservationsListPage = () => {
  // 예약 상태 필터
  const [statusFilter, setStatusFilter] = useState('all');
  // 모달 상태 (상세 보기)
  const [showDetailModal, setShowDetailModal] = useState(false);
  // 선택된 예약 정보
  const [selectedReservation, setSelectedReservation] = useState(null);
  // 모달 상태 (취소 확인)
  const [showCancelModal, setShowCancelModal] = useState(false);

  // 예약 목록 (샘플 데이터) - 실제로는 API에서 가져옴
  const [reservations, setReservations] = useState([
    {
      id: 'RES-001',
      date: '2025-03-05',
      time: '14:30',
      departureTerminal: '제1터미널',
      departureLocation: '출국장 1층',
      destination: 'A 게이트',
      status: '예정',
      hasLuggage: true,
      specialRequests: '전동 휠체어 사용 중이라 이동 시 도움이 필요합니다.',
      reservedAt: '2025-02-28 10:15'
    },
    {
      id: 'RES-002',
      date: '2025-03-10',
      time: '09:15',
      departureTerminal: '제2터미널',
      departureLocation: '입국장 1층',
      destination: '수하물 찾는 곳',
      status: '확정',
      hasLuggage: false,
      specialRequests: '',
      reservedAt: '2025-02-27 17:22'
    },
    {
      id: 'RES-003',
      date: '2025-02-20',
      time: '16:45',
      departureTerminal: '제1터미널',
      departureLocation: 'B 게이트',
      destination: '공항 철도역',
      status: '완료',
      hasLuggage: true,
      specialRequests: '',
      reservedAt: '2025-02-15 09:30'
    },
    {
      id: 'RES-004',
      date: '2025-02-15',
      time: '11:00',
      departureTerminal: '제1터미널',
      departureLocation: '체크인 카운터',
      destination: 'D 게이트',
      status: '취소',
      hasLuggage: false,
      specialRequests: '',
      reservedAt: '2025-02-10 14:20',
      cancelledAt: '2025-02-12 18:45'
    }
  ]);

  // 예약 상태에 따른 배지 색상 및 텍스트
  const getStatusBadge = (status) => {
    switch(status) {
      case '예정':
        return <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">예정</span>;
      case '확정':
        return <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">확정</span>;
      case '완료':
        return <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">완료</span>;
      case '취소':
        return <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">취소</span>;
      default:
        return <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">{status}</span>;
    }
  };

  // 상세 정보 모달 열기
  const openDetailModal = (reservation) => {
    setSelectedReservation(reservation);
    setShowDetailModal(true);
  };

  // 취소 모달 열기
  const openCancelModal = (reservation) => {
    setSelectedReservation(reservation);
    setShowCancelModal(true);
  };

  // 예약 취소 처리
  const handleCancelReservation = () => {
    // 실제로는 API를 호출하여 서버에 취소 요청
    setReservations(reservations.map(res => 
      res.id === selectedReservation.id 
        ? {...res, status: '취소', cancelledAt: new Date().toLocaleString()} 
        : res
    ));
    setShowCancelModal(false);
    // 취소 알림 메시지 (실제 구현 시 추가)
    alert(`예약 ${selectedReservation.id}이(가) 취소되었습니다.`);
  };

  // 필터링된 예약 목록
  const filteredReservations = statusFilter === 'all' 
    ? reservations 
    : reservations.filter(res => res.status === statusFilter);

  return (
    <div className="min-h-screen flex bg-secondary">
      {/* Sidebar Navigation (same as Dashboard) */}
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
            {/* Other menu items (same as dashboard) */}
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
            <h1 className="text-2xl font-semibold text-gray-900">내 예약 정보</h1>
            <p className="text-gray-600 mt-1">
              휠체어 로봇 예약 내역을 확인하고 관리하세요.
            </p>
          </div>
          <a 
            href="/reservations/new" 
            className="hidden md:inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span>새 예약</span>
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex space-x-2 overflow-x-auto">
            <button
              className={`px-4 py-2 rounded-md whitespace-nowrap ${
                statusFilter === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setStatusFilter('all')}
            >
              전체 예약
            </button>
            <button
              className={`px-4 py-2 rounded-md whitespace-nowrap ${
                statusFilter === '예정'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setStatusFilter('예정')}
            >
              예정된 예약
            </button>
            <button
              className={`px-4 py-2 rounded-md whitespace-nowrap ${
                statusFilter === '확정'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setStatusFilter('확정')}
            >
              확정된 예약
            </button>
            <button
              className={`px-4 py-2 rounded-md whitespace-nowrap ${
                statusFilter === '완료'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setStatusFilter('완료')}
            >
              완료된 예약
            </button>
            <button
              className={`px-4 py-2 rounded-md whitespace-nowrap ${
                statusFilter === '취소'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setStatusFilter('취소')}
            >
              취소된 예약
            </button>
          </div>
        </div>

        {/* Mobile New Reservation Button */}
        <div className="mb-4 md:hidden">
          <a 
            href="/reservations/new" 
            className="flex items-center justify-center w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span>새 예약</span>
          </a>
        </div>

        {/* Reservations List */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {filteredReservations.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      예약 번호
                    </th>
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
                      상태
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      관리
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredReservations.map((reservation) => (
                    <tr key={reservation.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{reservation.id}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{new Date(reservation.date).toLocaleDateString('ko-KR')}</div>
                        <div className="text-sm text-gray-500">{reservation.time}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{reservation.departureTerminal}</div>
                        <div className="text-sm text-gray-500">{reservation.departureLocation}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{reservation.destination}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(reservation.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => openDetailModal(reservation)}
                          className="text-primary hover:text-blue-800 mr-3"
                        >
                          상세보기
                        </button>
                        {(reservation.status === '예정' || reservation.status === '확정') && (
                          <button
                            onClick={() => openCancelModal(reservation)}
                            className="text-red-600 hover:text-red-800"
                          >
                            취소
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-8 text-center">
              <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
              </svg>
              <p className="text-gray-600 mb-4">해당 상태의 예약 정보가 없습니다.</p>
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
      </main>

      {/* Detail Modal */}
      {showDetailModal && selectedReservation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">예약 상세 정보</h3>
              <button 
                onClick={() => setShowDetailModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="mb-5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">예약 번호</span>
                  <span className="text-sm font-medium">{selectedReservation.id}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">예약 상태</span>
                  <span>{getStatusBadge(selectedReservation.status)}</span>
                </div>
              </div>
              
              <div className="pt-4 mb-5 border-t border-gray-200">
                <h4 className="text-sm font-medium text-gray-900 mb-3">일시 및 위치</h4>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">날짜</span>
                  <span className="text-sm">{new Date(selectedReservation.date).toLocaleDateString('ko-KR')}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">시간</span>
                  <span className="text-sm">{selectedReservation.time}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">터미널</span>
                  <span className="text-sm">{selectedReservation.departureTerminal}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">출발 위치</span>
                  <span className="text-sm">{selectedReservation.departureLocation}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">도착 위치</span>
                  <span className="text-sm">{selectedReservation.destination}</span>
                </div>
              </div>
              
              <div className="pt-4 mb-5 border-t border-gray-200">
                <h4 className="text-sm font-medium text-gray-900 mb-3">추가 정보</h4>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">수하물</span>
                  <span className="text-sm">{selectedReservation.hasLuggage ? '있음' : '없음'}</span>
                </div>
                {selectedReservation.specialRequests && (
                  <div className="mb-2">
                    <span className="text-sm text-gray-500 block mb-1">요청 사항</span>
                    <p className="text-sm p-2 bg-gray-50 rounded">{selectedReservation.specialRequests}</p>
                  </div>
                )}
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <h4 className="text-sm font-medium text-gray-900 mb-3">예약 내역</h4>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">예약 일시</span>
                  <span className="text-sm">{selectedReservation.reservedAt}</span>
                </div>
                {selectedReservation.status === '취소' && selectedReservation.cancelledAt && (
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">취소 일시</span>
                    <span className="text-sm">{selectedReservation.cancelledAt}</span>
                  </div>
                )}
              </div>
              
              {(selectedReservation.status === '예정' || selectedReservation.status === '확정') && (
                <div className="mt-6 flex space-x-2">
                  <button
                    onClick={() => {
                      setShowDetailModal(false);
                      openCancelModal(selectedReservation);
                    }}
                    className="flex-1 px-4 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition-colors"
                  >
                    예약 취소
                  </button>
                  <button
                    onClick={() => {
                      setShowDetailModal(false);
                      window.location.href = `/map?from=${selectedReservation.departureLocation}&to=${selectedReservation.destination}`;
                    }}
                    className="flex-1 px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors"
                  >
                    경로 확인
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Cancel Confirmation Modal */}
      {showCancelModal && selectedReservation && (
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
                      {selectedReservation.id} 예약을 취소합니다. 이 작업은 되돌릴 수 없습니다.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-gray-50 p-4 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">예약 일시</span>
                  <span className="text-sm">{new Date(selectedReservation.date).toLocaleDateString('ko-KR')} {selectedReservation.time}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">위치</span>
                  <span className="text-sm">{selectedReservation.departureLocation} → {selectedReservation.destination}</span>
                </div>
              </div>
              
              <div className="mt-6 flex space-x-2">
                <button
                  onClick={() => setShowCancelModal(false)}
                  className="flex-1 px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  취소
                </button>
                <button
                  onClick={handleCancelReservation}
                  className="flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  예약 취소 확인
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationsListPage;
