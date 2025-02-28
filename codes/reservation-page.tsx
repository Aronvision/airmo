import React, { useState } from 'react';

const ReservationPage = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    departureTerminal: '',
    departureGate: '',
    destination: '',
    hasLuggage: false,
    specialRequests: '',
    agreedToTerms: false
  });

  const terminals = [
    { id: 'T1', name: '제1터미널' },
    { id: 'T2', name: '제2터미널' }
  ];

  const departureLocations = {
    'T1': [
      '출국장 1층', '출국장 2층', '출국장 3층',
      '입국장 1층', '입국장 2층',
      'A 게이트', 'B 게이트', 'C 게이트', 'D 게이트'
    ],
    'T2': [
      '출국장 1층', '출국장 2층',
      '입국장 1층',
      'E 게이트', 'F 게이트', 'G 게이트'
    ]
  };

  const destinations = {
    'T1': [
      'A 게이트', 'B 게이트', 'C 게이트', 'D 게이트',
      '수하물 찾는 곳', '세관 검사장', '출입국 관리소',
      '공항 철도역', '버스 정류장', '택시 승강장'
    ],
    'T2': [
      'E 게이트', 'F 게이트', 'G 게이트',
      '수하물 찾는 곳', '세관 검사장', '출입국 관리소',
      '공항 철도역', '버스 정류장', '택시 승강장'
    ]
  };

  const timeSlots = [];
  for (let hour = 6; hour <= 22; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const formattedHour = hour.toString().padStart(2, '0');
      const formattedMinute = minute.toString().padStart(2, '0');
      timeSlots.push(`${formattedHour}:${formattedMinute}`);
    }
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // 터미널 변경 시 출발지, 목적지 리셋
    if (name === 'departureTerminal') {
      setFormData({
        ...formData,
        departureTerminal: value,
        departureGate: '',
        destination: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.agreedToTerms) {
      alert('안전 수칙 및 이용약관에 동의해주세요.');
      return;
    }
    
    // 실제 애플리케이션에서는 여기서 예약 API를 호출합니다
    console.log('예약 데이터:', formData);
    
    // 예약 성공 후 예약 확인 페이지로 이동 (임시)
    alert('예약이 완료되었습니다!');
    window.location.href = '/reservations';
  };

  // 오늘 날짜를 YYYY-MM-DD 형식으로 반환
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // 현재 날짜로부터 30일 후 날짜를 YYYY-MM-DD 형식으로 반환
  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    const year = maxDate.getFullYear();
    const month = String(maxDate.getMonth() + 1).padStart(2, '0');
    const day = String(maxDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  
  // 요약 정보 계산
  const getSummary = () => {
    if (!formData.date || !formData.time || !formData.departureTerminal) {
      return null;
    }
    
    const formattedDate = new Date(formData.date).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    });
    
    return {
      formattedDate,
      time: formData.time,
      terminal: terminals.find(t => t.id === formData.departureTerminal)?.name || '',
      departure: formData.departureGate,
      destination: formData.destination,
      luggage: formData.hasLuggage ? '있음' : '없음',
      specialRequests: formData.specialRequests
    };
  };
  
  const summary = getSummary();

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
                className="flex items-center space-x-2 p-2 rounded-md bg-blue-50 text-primary font-medium"
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
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">예약하기</h1>
          <p className="text-gray-600 mt-1">
            휠체어 로봇 예약을 위해 아래 정보를 입력해주세요.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form Column */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">예약 정보</h2>
                  
                  {/* Date & Time Selection */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                        날짜
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        min={getTodayDate()}
                        max={getMaxDate()}
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                        시간
                      </label>
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      >
                        <option value="">시간 선택</option>
                        {timeSlots.map(time => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Terminal Selection */}
                  <div className="mb-4">
                    <label htmlFor="departureTerminal" className="block text-sm font-medium text-gray-700 mb-1">
                      터미널
                    </label>
                    <select
                      id="departureTerminal"
                      name="departureTerminal"
                      value={formData.departureTerminal}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    >
                      <option value="">터미널 선택</option>
                      {terminals.map(terminal => (
                        <option key={terminal.id} value={terminal.id}>{terminal.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Departure & Destination */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="departureGate" className="block text-sm font-medium text-gray-700 mb-1">
                        출발 위치
                      </label>
                      <select
                        id="departureGate"
                        name="departureGate"
                        value={formData.departureGate}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        disabled={!formData.departureTerminal}
                        required
                      >
                        <option value="">출발 위치 선택</option>
                        {formData.departureTerminal && departureLocations[formData.departureTerminal].map(location => (
                          <option key={location} value={location}>{location}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
                        도착 위치
                      </label>
                      <select
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        disabled={!formData.departureTerminal}
                        required
                      >
                        <option value="">도착 위치 선택</option>
                        {formData.departureTerminal && destinations[formData.departureTerminal].map(destination => (
                          <option key={destination} value={destination}>{destination}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Additional Options */}
                  <div className="mb-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="hasLuggage"
                        name="hasLuggage"
                        checked={formData.hasLuggage}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <label htmlFor="hasLuggage" className="ml-2 block text-sm text-gray-700">
                        수하물이 있습니다 (로봇 뒷부분 바스켓 이용)
                      </label>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div className="mb-4">
                    <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
                      요청 사항 (선택)
                    </label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="특별한 요청 사항이 있으시면 입력해주세요."
                    ></textarea>
                  </div>
                </div>

                {/* Safety Agreement */}
                <div className="mb-6 p-4 bg-secondary rounded-md">
                  <h3 className="font-medium text-gray-900 mb-2">안전 수칙 및 이용약관</h3>
                  <div className="text-sm text-gray-600 mb-4">
                    <p className="mb-2">1. 휠체어 로봇 탑승 시 안전벨트를 항상 착용해주세요.</p>
                    <p className="mb-2">2. 최대 하중 120kg을 초과하지 마세요.</p>
                    <p className="mb-2">3. 예약 시간 10분 전까지 지정된 장소에서 대기해주세요.</p>
                    <p className="mb-2">4. 이용 중 비상 상황 발생 시 비상 정지 버튼을 눌러주세요.</p>
                    <p>5. 개인 정보는 예약 및 서비스 이용 목적으로만 사용됩니다.</p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="agreedToTerms"
                      name="agreedToTerms"
                      checked={formData.agreedToTerms}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="agreedToTerms" className="ml-2 block text-sm text-gray-700">
                      안전 수칙 및 이용약관에 동의합니다.
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  예약하기
                </button>
              </form>
            </div>
          </div>

          {/* Summary Column */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">예약 요약</h2>
              
              {summary ? (
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">날짜</p>
                    <p className="font-medium">{summary.formattedDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">시간</p>
                    <p className="font-medium">{summary.time}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">터미널</p>
                    <p className="font-medium">{summary.terminal}</p>
                  </div>
                  {summary.departure && (
                    <div>
                      <p className="text-sm text-gray-500">출발 위치</p>
                      <p className="font-medium">{summary.departure}</p>
                    </div>
                  )}
                  {summary.destination && (
                    <div>
                      <p className="text-sm text-gray-500">도착 위치</p>
                      <p className="font-medium">{summary.destination}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-sm text-gray-500">수하물</p>
                    <p className="font-medium">{summary.luggage}</p>
                  </div>
                  {summary.specialRequests && (
                    <div>
                      <p className="text-sm text-gray-500">요청 사항</p>
                      <p className="font-medium">{summary.specialRequests}</p>
                    </div>
                  )}
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between">
                      <p className="font-medium">예약 완료 후 알림</p>
                      <p className="text-primary">이용시간 10분 전</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">
                    예약 정보를 입력하시면 요약이 표시됩니다.
                  </p>
                </div>
              )}
            </div>
            
            {/* Help Card */}
            <div className="bg-blue-50 rounded-lg p-4 mt-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-primary">도움이 필요하신가요?</h3>
                  <p className="mt-1 text-sm text-blue-800">
                    공항 내 로봇 이용에 관한 문의사항은 고객센터(1588-1234)로 연락해주세요.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReservationPage;
