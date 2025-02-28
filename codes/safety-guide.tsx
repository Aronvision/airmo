import React, { useState } from 'react';

const SafetyGuidePage = () => {
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);
  
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
                className="flex items-center space-x-2 p-2 rounded-md bg-blue-50 text-primary font-medium"
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
          <h1 className="text-2xl font-semibold text-gray-900">안전 수칙</h1>
          <p className="text-gray-600 mt-1">
            휠체어 로봇을 안전하게 이용하기 위한 주요 수칙과 긴급 상황 대응법을 확인하세요.
          </p>
        </div>

        {/* Emergency Button */}
        <div className="mb-8">
          <button
            onClick={() => setShowEmergencyModal(true)}
            className="w-full flex items-center justify-center p-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span className="text-lg font-medium">긴급 상황 대응 가이드</span>
          </button>
        </div>

        {/* Main Safety Guidelines */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="border-b border-gray-200">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">기본 안전 수칙</h2>
              
              <div className="space-y-6">
                {/* Guideline 1 */}
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-primary">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">안전벨트 착용</h3>
                    <p className="text-gray-600 mt-1">
                      로봇 이용 시 항상 안전벨트를 착용해 주세요. 안전벨트를 착용하지 않으면 로봇이 출발하지 않습니다.
                    </p>
                  </div>
                </div>
                
                {/* Guideline 2 */}
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-primary">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">무게 제한 준수</h3>
                    <p className="text-gray-600 mt-1">
                      로봇의 최대 탑승 무게는 120kg이며, 뒷 바스켓의 최대 적재 무게는 20kg입니다. 무게 제한을 초과하면 안전 기능이 작동하여 운행이 제한될 수 있습니다.
                    </p>
                  </div>
                </div>
                
                {/* Guideline 3 */}
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-primary">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">손잡이 사용</h3>
                    <p className="text-gray-600 mt-1">
                      이동 중에는 팔걸이나 손잡이를 잡고 계세요. 급정거 시 안전을 위해 제공된 손잡이를 활용해 주세요.
                    </p>
                  </div>
                </div>
                
                {/* Guideline 4 */}
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-primary">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">이동 중 행동 제한</h3>
                    <p className="text-gray-600 mt-1">
                      이동 중에는 로봇에서 일어서거나, 몸을 심하게 기울이는 행동을 피해주세요. 균형을 유지하고 안전하게 앉아 있어야 합니다.
                    </p>
                  </div>
                </div>
                
                {/* Guideline 5 */}
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-primary">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">주행 속도 제한</h3>
                    <p className="text-gray-600 mt-1">
                      공항 내 혼잡 구역에서는 자동으로 속도가 제한됩니다. 수동 모드 사용 시에도, 안전을 위해 적정 속도를 유지해 주세요.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">로봇 이용 제한 사항</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-900">음주 상태에서의 이용</span> - 안전 문제로 인해 음주 상태에서는 로봇 이용이 제한됩니다.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-900">위험물 운반</span> - 공항 보안 규정에 따라 위험물, 화학 물질 등은 로봇에 싣지 마세요.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-900">허가되지 않은 경로</span> - 로봇은 허가된 공항 내부 경로만 이용 가능하며, 제한 구역이나 비상구로 이동할 수 없습니다.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-900">복수 인원 탑승</span> - 로봇은 1인 탑승용으로 설계되었으며, 동시에 2인 이상 탑승은 금지되어 있습니다.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-900">로봇 개조 및 장치 훼손</span> - 로봇의 센서, 제어 장치 등을 임의로 조작하거나 훼손하는 행위는 금지되어 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Features */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">안전 기능 소개</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full text-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">장애물 감지 센서</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      다중 레이저 및 초음파 센서로 장애물을 실시간 감지하여 충돌을 방지합니다.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full text-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">비상 정지 버튼</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      긴급 상황 발생 시 빨간색 비상 정지 버튼을 누르면 즉시 정지합니다.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full text-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">실시간 위치 추적</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      로봇의 위치를 실시간으로 모니터링하여 문제 발생 시 신속한 대응이 가능합니다.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full text-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">자동 속도 제어</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      보행자 밀집 구역에서는 자동으로 속도가 제한되며, 경사로에서는 안전한 속도로 자동 조절됩니다.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full text-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">비상 통신 시스템</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      문제 발생 시 로봇의 비상 연락 버튼을 통해 즉시 운영자와 연결됩니다.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full text-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">배터리 안전 시스템</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      배터리 잔량이 20% 이하로 떨어지면 자동으로 알림을 제공하고, 충전소로 복귀하는 안전 장치가 작동합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Children and Special Needs Users */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">어린이 및 특별 도움이 필요한 이용객</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900">어린이 이용 시 주의사항</h3>
              <p className="text-gray-600 mt-1">
                12세 미만 어린이는 보호자 동반 하에 로봇을 이용할 수 있습니다. 어린이가 로봇을 조작하지 않도록 주의해 주세요.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900">교통약자 우선 이용</h3>
              <p className="text-gray-600 mt-1">
                휠체어 사용자, 노약자, 임산부 등 교통약자는 로봇 이용 시 우선권이 부여됩니다. 혼잡 시간에는 예약 시 교통약자 항목을 체크해 주세요.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900">보조 지원 서비스</h3>
              <p className="text-gray-600 mt-1">
                시각 장애인을 위한 음성 안내, 청각 장애인을 위한 시각적 신호 등 다양한 접근성 기능을 제공합니다. 로봇 터치스크린의 '접근성' 메뉴에서 설정할 수 있습니다.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-primary text-white rounded-lg shadow-sm p-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-semibold mb-2">도움이 필요하신가요?</h2>
              <p className="text-blue-100">
                안전 관련 문의나 긴급 상황 시 연중무휴 24시간 고객센터로 연락해 주세요.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>고객센터: 1588-1234</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <span>이메일: safety@airportmobility.com</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Emergency Modal */}
      {showEmergencyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-auto overflow-hidden">
            <div className="px-6 py-4 bg-red-600 text-white flex justify-between items-center">
              <h3 className="text-lg font-medium">긴급 상황 대응 가이드</h3>
              <button 
                onClick={() => setShowEmergencyModal(false)}
                className="text-white hover:text-gray-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-red-100 p-2 rounded-full text-red-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-900">로봇 오작동 시</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      1. 빨간색 비상 정지 버튼을 누르세요.<br />
                      2. 터치스크린의 '비상 연락' 버튼을 통해 운영자와 연결하세요.<br />
                      3. 안전한 경우, 로봇에서 하차한 후 다른 탑승객들에게 상황을 알리세요.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-red-100 p-2 rounded-full text-red-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-900">충돌 또는 사고 발생 시</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      1. 즉시 비상 정지 버튼을 누르고 로봇을 정지시키세요.<br />
                      2. 부상이 있는 경우 공항 의무실(내선 9-119) 또는 운영자에게 알리세요.<br />
                      3. 다른 사람이나 물건에 손상을 입힌 경우, 운영자에게 상황을 상세히 설명하세요.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-red-100 p-2 rounded-full text-red-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-900">화재 또는 연기 발생 시</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      1. 즉시 로봇을 정지시키고 하차하세요.<br />
                      2. 가장 가까운 비상 출구를 통해 안전한 곳으로 대피하세요.<br />
                      3. 공항 직원이나 보안 요원에게 상황을 알리세요.<br />
                      4. 로봇에서 연기가 나는 경우, 절대 물을 뿌리지 마세요.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-red-100 p-2 rounded-full text-red-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-900">긴급 연락처</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      - 공항 모빌리티 고객센터: 1588-1234 (24시간)<br />
                      - 공항 의무실: 내선 9-119<br />
                      - 공항 보안실: 내선 9-112<br />
                      - 일반 응급상황: 119 (화재, 구급)
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <button
                  onClick={() => setShowEmergencyModal(false)}
                  className="w-full bg-red-600 text-white py-3 px-4 rounded-md hover:bg-red-700 transition-colors"
                >
                  확인
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SafetyGuidePage;
