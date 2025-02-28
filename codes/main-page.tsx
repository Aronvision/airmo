import React from 'react';

const MainPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/NavBar */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-primary font-bold text-xl">공항 모빌리티</span>
          </div>
          <div className="flex space-x-4">
            <a href="/login" className="px-4 py-2 text-gray-700 hover:text-primary transition-colors">로그인</a>
            <a href="/register" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors">회원가입</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex-grow bg-secondary">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
              편안한 공항 이동, <br />
              공항 모빌리티가 함께합니다
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              자율주행 휠체어 로봇으로 공항 내 이동이 더욱 편리해집니다.
              장애인, 노약자뿐만 아니라 모든 공항 이용객을 위한 스마트 모빌리티 서비스입니다.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="/login" 
                className="inline-block px-6 py-3 bg-primary text-white rounded-md text-center hover:bg-blue-600 transition-colors"
              >
                지금 예약하기
              </a>
              <a 
                href="/guide/robot-usage" 
                className="inline-block px-6 py-3 border border-gray-300 text-gray-700 rounded-md text-center hover:bg-gray-50 transition-colors"
              >
                이용 방법 알아보기
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            {/* Hero Image */}
            <div className="bg-gray-300 rounded-lg w-full h-64 md:h-96 overflow-hidden">
              <img 
                src="/api/placeholder/800/600" 
                alt="공항 모빌리티 서비스" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">주요 기능</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <svg 
                  className="w-8 h-8 text-primary" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">간편 예약</h3>
              <p className="text-gray-600">
                날짜와 시간, 출발지와 목적지를 선택하여 손쉽게 예약할 수 있습니다.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <svg 
                  className="w-8 h-8 text-primary" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">경로 안내</h3>
              <p className="text-gray-600">
                공항 내 최적의 경로를 안내하여 빠르고 쉽게 목적지에 도착할 수 있습니다.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <svg 
                  className="w-8 h-8 text-primary" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">자동 주행</h3>
              <p className="text-gray-600">
                자율주행 기능으로 탑승자는 편안하게 이동하고 안전 센서가 장애물을 감지합니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">지금 바로 시작하세요</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            공항 모빌리티 서비스로 더 편안하고 안전한 공항 경험을 누려보세요.
          </p>
          <a 
            href="/register" 
            className="inline-block px-8 py-4 bg-white text-primary font-semibold rounded-md hover:bg-gray-100 transition-colors"
          >
            회원가입하기
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="font-semibold text-lg">공항 모빌리티</span>
              <p className="text-gray-400 text-sm mt-1">© 2025 모든 권리 보유</p>
            </div>
            <div className="flex space-x-4">
              <a href="/guide/safety" className="text-gray-400 hover:text-white transition-colors">안전 수칙</a>
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">개인정보 처리방침</a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">이용약관</a>
              <a href="/contact" className="text-gray-400 hover:text-white transition-colors">고객센터</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
