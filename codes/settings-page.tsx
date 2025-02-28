import React, { useState } from 'react';

const SettingsPage = () => {
  // 설정 상태 (실제로는 API에서 가져와야 함)
  const [settings, setSettings] = useState({
    // 알림 설정
    notifications: {
      email: true,
      sms: true,
      push: true,
      reservationReminder: true,
      serviceUpdates: false,
      promotions: false
    },
    
    // 언어 및 지역 설정
    language: 'ko',
    region: 'KR',
    
    // 접근성 설정
    accessibility: {
      highContrast: false,
      largeText: false,
      screenReader: false,
      reducedMotion: false
    },
    
    // 개인정보 설정
    privacy: {
      shareUsageData: true,
      locationHistory: true,
      personalizedRecommendations: true
    }
  });
  
  // 설정 변경 처리
  const handleSettingChange = (category, setting, value) => {
    setSettings({
      ...settings,
      [category]: {
        ...settings[category],
        [setting]: value
      }
    });
    
    // 실제로는 여기서 API 호출하여 설정 업데이트
    console.log(`설정 변경: ${category}.${setting} = ${value}`);
  };
  
  // 단일 설정 변경 처리 (중첩되지 않은 설정용)
  const handleSingleSettingChange = (setting, value) => {
    setSettings({
      ...settings,
      [setting]: value
    });
    
    // 실제로는 여기서 API 호출하여 설정 업데이트
    console.log(`설정 변경: ${setting} = ${value}`);
  };
  
  // 설정 저장 처리
  const handleSaveSettings = () => {
    // 실제로는 여기서 API 호출하여 모든 설정 한번에 업데이트
    console.log('모든 설정 저장:', settings);
    
    // 성공 알림
    alert('설정이 저장되었습니다.');
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
          <h1 className="text-2xl font-semibold text-gray-900">설정</h1>
          <p className="text-gray-600 mt-1">
            알림, 언어, 접근성 등 서비스 이용 환경을 설정하세요.
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
              className="py-3 px-6 font-medium text-sm text-gray-500 hover:text-gray-700"
            >
              이용 내역
            </a>
            <a 
              href="/mypage/settings" 
              className="py-3 px-6 font-medium text-sm border-b-2 border-primary text-primary"
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

        {/* 설정 섹션 */}
        <div className="space-y-6">
          {/* 알림 설정 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">알림 설정</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">이메일 알림</h3>
                    <p className="text-sm text-gray-600">이메일로 중요 정보를 받습니다.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={settings.notifications.email}
                      onChange={(e) => handleSettingChange('notifications', 'email', e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">SMS 알림</h3>
                    <p className="text-sm text-gray-600">휴대폰으로 문자 메시지를 받습니다.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={settings.notifications.sms}
                      onChange={(e) => handleSettingChange('notifications', 'sms', e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">푸시 알림</h3>
                    <p className="text-sm text-gray-600">모바일 기기에 푸시 알림을 받습니다.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={settings.notifications.push}
                      onChange={(e) => handleSettingChange('notifications', 'push', e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                
                <hr className="my-4" />
                
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">예약 알림</h3>
                    <p className="text-sm text-gray-600">예약 10분 전 알림을 받습니다.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={settings.notifications.reservationReminder}
                      onChange={(e) => handleSettingChange('notifications', 'reservationReminder', e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">서비스 업데이트</h3>
                    <p className="text-sm text-gray-600">새로운 기능 및 서비스 업데이트 소식을 받습니다.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={settings.notifications.serviceUpdates}
                      onChange={(e) => handleSettingChange('notifications', 'serviceUpdates', e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">프로모션 및 이벤트</h3>
                    <p className="text-sm text-gray-600">할인 행사 및 프로모션 정보를 받습니다.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={settings.notifications.promotions}
                      onChange={(e) => handleSettingChange('notifications', 'promotions', e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          {/* 언어 및 지역 설정 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">언어 및 지역 설정</h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
                    언어
                  </label>
                  <select
                    id="language"
                    name="language"
                    value={settings.language}
                    onChange={(e) => handleSingleSettingChange('language', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="ko">한국어</option>
                    <option value="en">English</option>
                    <option value="ja">日本語</option>
                    <option value="zh">中文</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">
                    지역
                  </label>
                  <select
                    id="region"
                    name="region"
                    value={settings.region}
                    onChange={(e) => handleSingleSettingChange('region', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="KR">대한민국</option>
                    <option value="US">United States</option>
                    <option value="JP">Japan</option>
                    <option value="CN">China</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          {/* 접근성 설정 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">접근성 설정</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">고대비 화면</h3>
                    <p className="text-sm text-gray-600">화면 대비를 높여 시각적 가독성을 향상시킵니다.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={settings.accessibility.highContrast}
                      onChange={(e) => handleSettingChange('accessibility', 'highContrast', e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">큰 글자</h3>
                    <p className="text-sm text-gray-600">더 큰 글자 크기를 사용하여 읽기 쉽게 합니다.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={settings.accessibility.largeText}
                      onChange={(e) => handleSettingChange('accessibility', 'largeText', e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">스크린 리더 지원</h3>
                    <p className="text-sm text-gray-600">스크린 리더와 호환되는 화면 구성을 사용합니다.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={settings.accessibility.screenReader}
                      onChange={(e) => handleSettingChange('accessibility', 'screenReader', e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">움직임 감소</h3>
                    <p className="text-sm text-gray-600">애니메이션과 움직임 효과를 최소화합니다.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={settings.accessibility.reducedMotion}
                      onChange={(e) => handleSettingChange('accessibility', 'reducedMotion', e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          {/* 개인정보 설정 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">개인정보 설정</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">사용 데이터 공유</h3>
                    <p className="text-sm text-gray-600">서비스 개선을 위한 사용 통계 데이터를 수집합니다.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={settings.privacy.shareUsageData}
                      onChange={(e) => handleSettingChange('privacy', 'shareUsageData', e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">위치 기록 저장</h3>
                    <p className="text-sm text-gray-600">이동 경로와 위치 정보를 저장합니다.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={settings.privacy.locationHistory}
                      onChange={(e) => handleSettingChange('privacy', 'locationHistory', e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">맞춤형 추천</h3>
                    <p className="text-sm text-gray-600">사용 패턴을 기반으로 한 맞춤형 콘텐츠를 제공합니다.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={settings.privacy.personalizedRecommendations}
                      onChange={(e) => handleSettingChange('privacy', 'personalizedRecommendations', e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                
                <div className="pt-4 text-sm text-gray-600">
                  <p>이 설정은 언제든지 변경할 수 있으며, 개인정보 처리와 관련된 자세한 내용은 <a href="/privacy" className="text-primary hover:underline">개인정보 처리방침</a>에서 확인할 수 있습니다.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* 설정 저장 버튼 */}
          <div className="flex justify-end">
            <button
              onClick={handleSaveSettings}
              className="px-6 py-2 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              설정 저장
            </button>
          </div>
        </div>
        
        {/* 계정 관리 섹션 */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">계정 관리</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-md">
              <div>
                <h3 className="text-base font-medium text-gray-900">데이터 내보내기</h3>
                <p className="text-sm text-gray-600">내 개인정보 및 이용 내역을 다운로드합니다.</p>
              </div>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                내보내기
              </button>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-md">
              <div>
                <h3 className="text-base font-medium text-gray-900">계정 연결</h3>
                <p className="text-sm text-gray-600">소셜 로그인 계정을 연결합니다.</p>
              </div>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                계정 연결
              </button>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-red-50 rounded-md">
              <div>
                <h3 className="text-base font-medium text-red-700">계정 삭제</h3>
                <p className="text-sm text-red-600">계정과 관련된 모든 정보를 영구적으로 삭제합니다.</p>
              </div>
              <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                계정 삭제
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;
