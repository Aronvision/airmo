import React, { useState } from 'react';

const RobotUsageGuidePage = () => {
  const [activeTab, setActiveTab] = useState('basic');
  
  // 사이드바 및 모바일 메뉴는 다른 페이지와 동일하므로 생략
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
                className="flex items-center space-x-2 p-2 rounded-md bg-blue-50 text-primary font-medium"
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
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">로봇 이용 방법</h1>
          <p className="text-gray-600 mt-1">
            휠체어 로봇의 사용법과 주요 기능을 확인하세요.
          </p>
        </div>

        {/* Content Tabs */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="flex border-b border-gray-200 overflow-x-auto">
            <button
              className={`py-3 px-6 font-medium text-sm focus:outline-none ${
                activeTab === 'basic'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('basic')}
            >
              기본 사용법
            </button>
            <button
              className={`py-3 px-6 font-medium text-sm focus:outline-none ${
                activeTab === 'controls'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('controls')}
            >
              조작 방법
            </button>
            <button
              className={`py-3 px-6 font-medium text-sm focus:outline-none ${
                activeTab === 'functions'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('functions')}
            >
              주요 기능
            </button>
            <button
              className={`py-3 px-6 font-medium text-sm focus:outline-none ${
                activeTab === 'faq'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('faq')}
            >
              자주 묻는 질문
            </button>
          </div>

          <div className="p-6">
            {/* Basic Usage Tab */}
            {activeTab === 'basic' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">기본 사용법 가이드</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <div className="bg-gray-200 rounded-lg w-full h-64 mb-4 overflow-hidden">
                      <img 
                        src="/api/placeholder/600/400" 
                        alt="휠체어 로봇 기본 모습" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">휠체어 로봇 개요</h3>
                    <p className="text-gray-600">
                      공항 모빌리티 로봇은 공항 내에서 장애인, 노약자 및 일반 승객들의 이동을 돕기 위해 설계된 자율주행 휠체어 형태의 모빌리티 서비스입니다. 사용자는 웹 앱을 통해 예약하고, QR 코드나 예약 번호로 인증한 후 탑승하게 됩니다.
                    </p>
                  </div>
                  
                  <div>
                    <div className="bg-gray-200 rounded-lg w-full h-64 mb-4 overflow-hidden">
                      <img 
                        src="/api/placeholder/600/400" 
                        alt="휠체어 로봇 예약 및 인증" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">예약 및 인증</h3>
                    <p className="text-gray-600">
                      웹 앱에서 원하는 날짜, 시간, 출발지와 목적지를 선택하여 예약합니다. 예약 완료 후, 지정된 장소와 시간에 로봇이 대기하며, 예약 번호나 QR 코드를 로봇의 스크린에 인증하면 바로 사용할 수 있습니다.
                    </p>
                  </div>
                </div>
                
                <h3 className="text-lg font-medium text-gray-900 mb-4">사용 단계</h3>
                
                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-lg font-semibold">
                        1
                      </div>
                      <div className="w-px h-full bg-gray-300 mx-auto mt-2"></div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-medium text-gray-900">예약하기</h4>
                      <p className="text-gray-600 mt-1">
                        웹사이트나 앱에서 [예약하기] 메뉴를 선택한 후, 필요한 날짜/시간/장소를 입력하고 예약을 완료합니다.
                      </p>
                    </div>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-lg font-semibold">
                        2
                      </div>
                      <div className="w-px h-full bg-gray-300 mx-auto mt-2"></div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-medium text-gray-900">로봇 인증</h4>
                      <p className="text-gray-600 mt-1">
                        예약 시간에 지정된 장소에서 로봇을 만나 예약 번호나 QR 코드를 스캔하여 인증합니다.
                      </p>
                    </div>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-lg font-semibold">
                        3
                      </div>
                      <div className="w-px h-full bg-gray-300 mx-auto mt-2"></div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-medium text-gray-900">탑승하기</h4>
                      <p className="text-gray-600 mt-1">
                        로봇에 안전하게 탑승하고, 안전벨트를 착용합니다. 수하물이 있는 경우 뒷 바스켓에 안전하게 보관합니다.
                      </p>
                    </div>
                  </div>
                  
                  {/* Step 4 */}
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-lg font-semibold">
                        4
                      </div>
                      <div className="w-px h-full bg-gray-300 mx-auto mt-2"></div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-medium text-gray-900">목적지 선택</h4>
                      <p className="text-gray-600 mt-1">
                        로봇 스크린에서 목적지를 확인하거나 변경할 수 있습니다. 목적지를 확정하면 자동 주행이 시작됩니다.
                      </p>
                    </div>
                  </div>
                  
                  {/* Step 5 */}
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-lg font-semibold">
                        5
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-medium text-gray-900">하차 및 종료</h4>
                      <p className="text-gray-600 mt-1">
                        목적지에 도착하면 로봇이 자동으로 정지합니다. "종료" 버튼을 누르고, 안전하게 하차한 후 수하물을 챙깁니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Controls Tab */}
            {activeTab === 'controls' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">로봇 조작 방법</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <div className="bg-gray-200 rounded-lg w-full h-64 mb-4 overflow-hidden">
                      <img 
                        src="/api/placeholder/600/400" 
                        alt="로봇 제어 패널" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">제어 패널</h3>
                    <p className="text-gray-600">
                      로봇 팔걸이에 있는 컨트롤 패널에는 방향키, 속도 조절 버튼, 비상 정지 버튼이 있습니다. 자동 모드에서는 직접 조작이 불필요하지만, 수동 모드로 전환하여 직접 이동할 수 있습니다.
                    </p>
                  </div>
                  
                  <div>
                    <div className="bg-gray-200 rounded-lg w-full h-64 mb-4 overflow-hidden">
                      <img 
                        src="/api/placeholder/600/400" 
                        alt="로봇 터치스크린" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">터치 스크린</h3>
                    <p className="text-gray-600">
                      로봇에 장착된 터치스크린에서 목적지 변경, 경로 확인, 속도 조절, 비상 연락처 등 다양한 기능을 이용할 수 있습니다. 화면은 사용자의 언어 설정에 맞게 자동으로 변경됩니다.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">주요 조작 버튼</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-red-100 p-2 rounded-full text-red-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-base font-medium text-gray-900">비상 정지 버튼</h4>
                        <p className="text-sm text-gray-600">
                          빨간색 버튼으로, 긴급 상황에서 즉시 로봇을 정지시킬 수 있습니다.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full text-primary">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-base font-medium text-gray-900">방향 컨트롤</h4>
                        <p className="text-sm text-gray-600">
                          조이스틱 또는 방향키로 수동 모드에서 로봇의 이동 방향을 조절합니다.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full text-primary">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-base font-medium text-gray-900">속도 조절</h4>
                        <p className="text-sm text-gray-600">
                          + 및 - 버튼으로 로봇의 이동 속도를 증가하거나 감소시킬 수 있습니다.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full text-primary">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-base font-medium text-gray-900">모드 전환</h4>
                        <p className="text-sm text-gray-600">
                          자동/수동 모드 전환 버튼으로 운행 방식을 변경할 수 있습니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">제어 모드</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-base font-medium text-gray-900">자동 모드 (기본)</h4>
                      <p className="text-gray-600">
                        목적지를 선택하면 로봇이 자동으로 최적의 경로를 계산하여 이동합니다. 장애물을 감지하고 회피하며, 안전하게 목적지까지 안내합니다.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-base font-medium text-gray-900">수동 모드</h4>
                      <p className="text-gray-600">
                        제어 패널의 방향키나 조이스틱을 사용하여 직접 로봇을 조작할 수 있습니다. 특정 상황에서 세밀한 이동이 필요한 경우 유용합니다.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-base font-medium text-gray-900">혼합 모드</h4>
                      <p className="text-gray-600">
                        자동 주행 중에도 필요한 경우 일시적으로 수동 조작이 가능합니다. 제어를 마치면 다시 자동 모드로 돌아갑니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Functions Tab */}
            {activeTab === 'functions' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">주요 기능 안내</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <div className="bg-primary text-white p-4">
                      <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <h3 className="text-lg font-medium">자율 주행</h3>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-600">
                        최신 센서와 AI 기술로 공항 내부를 자율 주행하며, 안전하게 목적지까지 이동합니다. 장애물 감지 및 회피 기능이 내장되어 있습니다.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <div className="bg-primary text-white p-4">
                      <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <h3 className="text-lg font-medium">예약 시스템</h3>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-600">
                        웹앱에서 출발 시간과 위치를 지정하여 로봇을 미리 예약할 수 있습니다. 예약 확인, 변경, 취소도 간편하게 가능합니다.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <div className="bg-primary text-white p-4">
                      <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      <h3 className="text-lg font-medium">경로 안내</h3>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-600">
                        실시간 지도와 함께 현재 위치, 이동 경로, 예상 도착 시간을 화면에 표시합니다. 필요 시 경로를 변경할 수 있습니다.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">편의 기능</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full text-primary">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-base font-medium text-gray-900">다국어 지원</h4>
                        <p className="text-sm text-gray-600">
                          한국어, 영어, 중국어, 일본어 등 다양한 언어를 지원하여 글로벌 이용객들이 편리하게 이용할 수 있습니다.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full text-primary">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-base font-medium text-gray-900">음성 안내</h4>
                        <p className="text-sm text-gray-600">
                          주행 중 방향 및 정보를 음성으로 안내하며, 시각 장애인을 위한 특별 음성 안내 모드도 제공합니다.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full text-primary">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-base font-medium text-gray-900">짐 보관 공간</h4>
                        <p className="text-sm text-gray-600">
                          로봇 뒷부분의 바스켓은 최대 20kg까지 수하물을 보관할 수 있으며, 도난 방지 알림 기능도 갖추고 있습니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">안전 기능</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-red-100 p-2 rounded-full text-red-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-base font-medium text-gray-900">장애물 감지</h4>
                        <p className="text-sm text-gray-600">
                          다중 센서로 주변 장애물을 감지하고 자동으로 경로를 조정하여 충돌을 방지합니다.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-red-100 p-2 rounded-full text-red-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-base font-medium text-gray-900">비상 정지</h4>
                        <p className="text-sm text-gray-600">
                          비상 상황 발생 시 한 번의 버튼 조작으로 로봇을 즉시 정지시킬 수 있습니다.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-red-100 p-2 rounded-full text-red-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-base font-medium text-gray-900">비상 연락</h4>
                        <p className="text-sm text-gray-600">
                          문제 발생 시 화면의 비상 연락 버튼을 통해 운영자와 즉시 연결됩니다.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-red-100 p-2 rounded-full text-red-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-base font-medium text-gray-900">안전벨트 알림</h4>
                        <p className="text-sm text-gray-600">
                          안전벨트 미착용 시 주행이 제한되며, 알림음과 함께 착용을 안내합니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* FAQ Tab */}
            {activeTab === 'faq' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">자주 묻는 질문</h2>
                
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      className="w-full flex justify-between items-center p-4 focus:outline-none"
                      onClick={() => {}}
                    >
                      <span className="font-medium text-gray-900">휠체어 로봇을 이용하려면 꼭 예약해야 하나요?</span>
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="px-4 pb-4">
                      <p className="text-gray-600">
                        네, 원활한 서비스 이용을 위해 사전 예약을 권장합니다. 예약 없이도 현장에서 이용 가능한 로봇이 있다면 사용할 수 있지만, 혼잡 시간대에는 예약자 우선으로 운영됩니다.
                      </p>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      className="w-full flex justify-between items-center p-4 focus:outline-none"
                      onClick={() => {}}
                    >
                      <span className="font-medium text-gray-900">배터리는 얼마나 지속되나요?</span>
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="px-4 pb-4">
                      <p className="text-gray-600">
                        로봇의 배터리는 완충 시 약 8시간 동안 사용 가능합니다. 운영 시스템에서 배터리 상태를 실시간으로 모니터링하여, 배터리가 부족할 경우 자동으로 충전 스테이션으로 이동합니다.
                      </p>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      className="w-full flex justify-between items-center p-4 focus:outline-none"
                      onClick={() => {}}
                    >
                      <span className="font-medium text-gray-900">로봇 이용 중 문제가 발생하면 어떻게 해야 하나요?</span>
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="px-4 pb-4">
                      <p className="text-gray-600">
                        로봇 스크린의 '도움 요청' 버튼을 누르면 운영자와 직접 연결됩니다. 긴급 상황에서는 빨간색 비상 정지 버튼을 누른 후, 화면의 '비상 연락' 버튼을 통해 즉시 지원을 요청하세요.
                      </p>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      className="w-full flex justify-between items-center p-4 focus:outline-none"
                      onClick={() => {}}
                    >
                      <span className="font-medium text-gray-900">이용 요금은 어떻게 되나요?</span>
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="px-4 pb-4">
                      <p className="text-gray-600">
                        공항 내 기본 이동 서비스는 무료로 제공됩니다. 단, 장시간 이용이나 특별 요청 서비스에는 추가 요금이 발생할 수 있습니다. 자세한 요금 정보는 예약 페이지에서 확인하실 수 있습니다.
                      </p>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      className="w-full flex justify-between items-center p-4 focus:outline-none"
                      onClick={() => {}}
                    >
                      <span className="font-medium text-gray-900">수하물은 얼마나 실을 수 있나요?</span>
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="px-4 pb-4">
                      <p className="text-gray-600">
                        로봇 뒷부분의 바스켓은 최대 20kg까지의 수하물을 수납할 수 있습니다. 크기는 일반 기내용 캐리어 정도의 크기를 수용할 수 있으며, 더 큰 짐은 별도의 수하물 서비스를 이용하시기 바랍니다.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-lg font-medium text-primary mb-2">추가 문의사항이 있으신가요?</h3>
                  <p className="text-gray-700 mb-4">
                    이용 중 추가 질문이나 도움이 필요하시면 다음 연락처로 문의해주세요.
                  </p>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-700">고객센터: 1588-1234 (24시간 운영)</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Video Tutorial */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">동영상 튜토리얼</h2>
          <div className="w-full aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-4">
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600">동영상 튜토리얼이 여기에 표시됩니다.</p>
                <p className="text-sm text-gray-500">(실제 앱에서는 동영상 플레이어가 로드됩니다)</p>
              </div>
            </div>
          </div>
          <p className="text-gray-600">
            이 튜토리얼 영상은 휠체어 로봇의 기본 사용법부터 고급 기능까지 단계별로 안내합니다. 영상을 통해 예약 방법, 탑승, 조작, 하차 등 전체 이용 과정을 확인하실 수 있습니다.
          </p>
        </div>

        {/* Need Help? */}
        <div className="bg-primary text-white rounded-lg shadow-sm p-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-semibold mb-2">궁금한 점이 있으신가요?</h2>
              <p className="text-blue-100">
                공항 모빌리티 서비스에 대한 추가 문의사항은 고객센터로 연락해주세요.
              </p>
            </div>
            <a 
              href="/contact" 
              className="inline-block px-6 py-3 bg-white text-primary font-medium rounded-md hover:bg-blue-50 transition-colors"
            >
              고객센터 문의하기
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RobotUsageGuidePage;
