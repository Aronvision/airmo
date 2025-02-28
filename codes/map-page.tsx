import React, { useState } from 'react';

const MapPage = () => {
  const [activeTerminal, setActiveTerminal] = useState('T1');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showRouteInfo, setShowRouteInfo] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  
  // 공항 시설물 목록 (검색용)
  const airportFacilities = {
    'T1': [
      { id: 'a1', name: 'A 게이트', type: 'gate', floor: '2F', description: '국제선 출국' },
      { id: 'b1', name: 'B 게이트', type: 'gate', floor: '2F', description: '국제선 출국' },
      { id: 'c1', name: 'C 게이트', type: 'gate', floor: '2F', description: '국제선 출국' },
      { id: 'd1', name: 'D 게이트', type: 'gate', floor: '2F', description: '국제선 출국' },
      { id: 't1rest1', name: '제1터미널 식당가', type: 'restaurant', floor: '4F', description: '다양한 음식점' },
      { id: 't1store1', name: '면세점 A구역', type: 'store', floor: '3F', description: '화장품, 명품' },
      { id: 't1store2', name: '면세점 B구역', type: 'store', floor: '3F', description: '주류, 담배' },
      { id: 't1check', name: '체크인 카운터', type: 'check-in', floor: '1F', description: '항공사 체크인' },
      { id: 't1immi', name: '출입국 심사대', type: 'immigration', floor: '1F', description: '출국 심사' },
      { id: 't1baggage', name: '수하물 찾는 곳', type: 'baggage', floor: '1F', description: '도착 후 수하물' }
    ],
    'T2': [
      { id: 'e1', name: 'E 게이트', type: 'gate', floor: '2F', description: '국제선 출국' },
      { id: 'f1', name: 'F 게이트', type: 'gate', floor: '2F', description: '국제선 출국' },
      { id: 'g1', name: 'G 게이트', type: 'gate', floor: '2F', description: '국제선 출국' },
      { id: 't2rest1', name: '제2터미널 식당가', type: 'restaurant', floor: '4F', description: '다양한 음식점' },
      { id: 't2store1', name: '면세점 C구역', type: 'store', floor: '3F', description: '화장품, 명품' },
      { id: 't2check', name: '체크인 카운터', type: 'check-in', floor: '1F', description: '항공사 체크인' },
      { id: 't2immi', name: '출입국 심사대', type: 'immigration', floor: '1F', description: '출국 심사' },
      { id: 't2baggage', name: '수하물 찾는 곳', type: 'baggage', floor: '1F', description: '도착 후 수하물' }
    ]
  };
  
  // 시설물 유형별 아이콘
  const getIconForType = (type) => {
    switch(type) {
      case 'gate':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
          </svg>
        );
      case 'restaurant':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
          </svg>
        );
      case 'store':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
          </svg>
        );
      case 'check-in':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
          </svg>
        );
      case 'immigration':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path>
          </svg>
        );
      case 'baggage':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
        );
    }
  };
  
  // 검색 결과 필터링
  const getFilteredFacilities = () => {
    if (!searchQuery.trim()) return [];
    
    return airportFacilities[activeTerminal].filter(facility => 
      facility.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      facility.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      facility.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  
  const handleLocationSelect = (facility) => {
    setSelectedLocation(facility);
    setShowRouteInfo(true);
    // 실제 앱에서는 여기서 지도에 해당 위치 표시
  };
  
  const handleStartNavigation = () => {
    setIsNavigating(true);
    // 실제 앱에서는 여기서 실시간 네비게이션 시작
  };
  
  const handleStopNavigation = () => {
    setIsNavigating(false);
    setShowRouteInfo(false);
    setSelectedLocation(null);
  };
  
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
                className="flex items-center space-x-2 p-2 rounded-md bg-blue-50 text-primary font-medium"
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
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">지도/경로 안내</h1>
          <p className="text-gray-600 mt-1">
            공항 내 위치를 검색하고 경로를 확인하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Column */}
          <div className="lg:col-span-1">
            {/* Search Box */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="게이트, 시설물 검색..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={searchQuery}
                  onChange={handleSearch}
                />
                <div className="absolute left-3 top-2.5 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>

              {/* Search Results */}
              {searchQuery && (
                <div className="mt-4 max-h-64 overflow-y-auto">
                  <p className="text-xs text-gray-500 mb-2">검색 결과</p>
                  {getFilteredFacilities().length > 0 ? (
                    <ul className="divide-y divide-gray-100">
                      {getFilteredFacilities().map(facility => (
                        <li key={facility.id} className="py-2">
                          <button
                            className="w-full flex items-start p-2 hover:bg-blue-50 rounded-md transition-colors text-left"
                            onClick={() => handleLocationSelect(facility)}
                          >
                            <div className="flex-shrink-0 text-primary">
                              {getIconForType(facility.type)}
                            </div>
                            <div className="ml-3">
                              <p className="text-sm font-medium text-gray-900">{facility.name}</p>
                              <p className="text-xs text-gray-500">{facility.floor} • {facility.description}</p>
                            </div>
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-500 py-2">검색 결과가 없습니다.</p>
                  )}
                </div>
              )}
            </div>

            {/* Terminal Selector */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
              <h3 className="text-sm font-medium text-gray-900 mb-3">터미널 선택</h3>
              <div className="flex space-x-2">
                <button
                  className={`flex-1 py-2 rounded-md transition-colors ${
                    activeTerminal === 'T1'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveTerminal('T1')}
                >
                  제1터미널
                </button>
                <button
                  className={`flex-1 py-2 rounded-md transition-colors ${
                    activeTerminal === 'T2'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveTerminal('T2')}
                >
                  제2터미널
                </button>
              </div>
            </div>

            {/* Category Filter */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
              <h3 className="text-sm font-medium text-gray-900 mb-3">시설물 분류</h3>
              <div className="space-y-2">
                <button className="w-full flex items-center p-2 bg-blue-50 text-primary rounded-md">
                  <span className="w-5 h-5 mr-2 flex-shrink-0">{getIconForType('gate')}</span>
                  <span className="text-sm">게이트</span>
                </button>
                <button className="w-full flex items-center p-2 hover:bg-blue-50 hover:text-primary rounded-md transition-colors">
                  <span className="w-5 h-5 mr-2 flex-shrink-0">{getIconForType('restaurant')}</span>
                  <span className="text-sm">식당/카페</span>
                </button>
                <button className="w-full flex items-center p-2 hover:bg-blue-50 hover:text-primary rounded-md transition-colors">
                  <span className="w-5 h-5 mr-2 flex-shrink-0">{getIconForType('store')}</span>
                  <span className="text-sm">면세점/상점</span>
                </button>
                <button className="w-full flex items-center p-2 hover:bg-blue-50 hover:text-primary rounded-md transition-colors">
                  <span className="w-5 h-5 mr-2 flex-shrink-0">{getIconForType('check-in')}</span>
                  <span className="text-sm">체크인/티켓팅</span>
                </button>
                <button className="w-full flex items-center p-2 hover:bg-blue-50 hover:text-primary rounded-md transition-colors">
                  <span className="w-5 h-5 mr-2 flex-shrink-0">{getIconForType('baggage')}</span>
                  <span className="text-sm">수하물</span>
                </button>
              </div>
            </div>

            {/* Floor Selector */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="text-sm font-medium text-gray-900 mb-3">층수 선택</h3>
              <div className="grid grid-cols-3 gap-2">
                {['B2', 'B1', '1F', '2F', '3F', '4F'].map(floor => (
                  <button
                    key={floor}
                    className={`py-2 rounded-md transition-colors ${
                      floor === '2F'
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {floor}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-3">
            {/* Map Container */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden h-96 md:h-[32rem] relative">
              {/* Map Placeholder */}
              <div className="w-full h-full bg-gray-200 relative">
                <img 
                  src="/api/placeholder/1200/800" 
                  alt="공항 지도" 
                  className="w-full h-full object-cover"
                />
                {/* This would be replaced by an actual interactive map component */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white bg-opacity-70 p-4 rounded-lg text-center">
                    <p className="text-gray-800">공항 {activeTerminal === 'T1' ? '제1' : '제2'}터미널 지도</p>
                    <p className="text-sm text-gray-600">실제 애플리케이션에서는 상호작용 가능한 지도가 표시됩니다.</p>
                  </div>
                </div>
                
                {/* Show navigation overlay when actively navigating */}
                {isNavigating && (
                  <div className="absolute inset-0 bg-primary bg-opacity-5 flex flex-col items-center justify-center">
                    <div className="absolute top-4 left-4 right-4 bg-white p-4 rounded-lg shadow-lg">
                      <div className="flex justify-between items-center mb-2">
                        <div className="font-medium text-gray-900">
                          {selectedLocation?.name}로 이동 중
                        </div>
                        <button 
                          onClick={handleStopNavigation}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary mr-3">
                          {getIconForType(selectedLocation?.type)}
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">{selectedLocation?.floor} • {selectedLocation?.description}</p>
                          <p className="text-xs text-primary mt-1">약 3분 소요 (150m 남음)</p>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full w-2/3"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Map Controls */}
              <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
                <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-100">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
                <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-100">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                  </svg>
                </button>
                <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-100">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Route Info Card */}
            {showRouteInfo && selectedLocation && !isNavigating && (
              <div className="mt-4 bg-white rounded-lg shadow-sm p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{selectedLocation.name}</h3>
                    <p className="text-gray-600">{selectedLocation.floor} • {selectedLocation.description}</p>
                  </div>
                  <button 
                    onClick={() => setShowRouteInfo(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="mt-4 flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full text-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-600">예상 이동 시간</p>
                    <p className="font-medium">약 5분 (250m)</p>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">이동 경로</h4>
                  <ol className="space-y-4">
                    <li className="flex">
                      <div className="flex-shrink-0 w-10 h-10 flex flex-col items-center">
                        <div className="w-6 h-6 rounded-full bg-blue-100 text-primary flex items-center justify-center text-xs font-medium">1</div>
                        <div className="flex-grow border-l border-gray-300 mx-auto w-0"></div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">현재 위치에서 에스컬레이터로 이동</p>
                        <p className="text-xs text-gray-500">약 50m, 1분 소요</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 w-10 h-10 flex flex-col items-center">
                        <div className="w-6 h-6 rounded-full bg-blue-100 text-primary flex items-center justify-center text-xs font-medium">2</div>
                        <div className="flex-grow border-l border-gray-300 mx-auto w-0"></div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">2층으로 올라가기</p>
                        <p className="text-xs text-gray-500">약 1분 소요</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 w-10 h-10 flex flex-col items-center">
                        <div className="w-6 h-6 rounded-full bg-blue-100 text-primary flex items-center justify-center text-xs font-medium">3</div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">오른쪽으로 진행하여 {selectedLocation.name}에 도착</p>
                        <p className="text-xs text-gray-500">약 200m, 3분 소요</p>
                      </div>
                    </li>
                  </ol>
                </div>
                
                <div className="mt-6">
                  <button
                    onClick={handleStartNavigation}
                    className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                  >
                    안내 시작하기
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MapPage;
