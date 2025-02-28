import React, { useState } from 'react';

const LoginPage = () => {
  const [loginMethod, setLoginMethod] = useState('account'); // 'account' or 'ticket'
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    ticketNumber: '',
    rememberMe: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 실제 애플리케이션에서는 여기서 로그인 API를 호출합니다
    console.log('로그인 시도:', formData);
    
    // 임시로 성공 처리 (실제로는 API 응답에 따라 처리)
    window.location.href = '/dashboard';
  };

  return (
    <div className="min-h-screen flex flex-col bg-secondary">
      {/* Header/NavBar */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <a href="/" className="text-primary font-bold text-xl">공항 모빌리티</a>
        </div>
      </nav>

      {/* Login Form */}
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white shadow-md rounded-lg w-full max-w-md p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-900">로그인</h1>
            <p className="text-gray-600 mt-2">공항 모빌리티 서비스를 이용하기 위해 로그인해주세요</p>
          </div>

          {/* Login Method Tabs */}
          <div className="flex mb-6 border-b border-gray-200">
            <button
              className={`py-2 px-4 font-medium text-sm focus:outline-none ${
                loginMethod === 'account'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setLoginMethod('account')}
            >
              계정으로 로그인
            </button>
            <button
              className={`py-2 px-4 font-medium text-sm focus:outline-none ${
                loginMethod === 'ticket'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setLoginMethod('ticket')}
            >
              항공권 번호로 로그인
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            {loginMethod === 'account' ? (
              // 계정 로그인 폼
              <>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="이메일 주소를 입력하세요"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    비밀번호
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="비밀번호를 입력하세요"
                    required
                  />
                </div>
              </>
            ) : (
              // 항공권 번호 로그인 폼
              <div className="mb-6">
                <label htmlFor="ticketNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  항공권 번호
                </label>
                <input
                  type="text"
                  id="ticketNumber"
                  name="ticketNumber"
                  value={formData.ticketNumber}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="항공권 번호를 입력하세요 (예: KE1234567890)"
                  required
                />
              </div>
            )}

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                  로그인 상태 유지
                </label>
              </div>
              <div className="text-sm">
                <a href="/forgot-password" className="text-primary hover:underline">
                  비밀번호를 잊으셨나요?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              로그인
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              계정이 없으신가요?{' '}
              <a href="/register" className="text-primary hover:underline font-medium">
                회원가입
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Login Page Background Image (Decorative) */}
      <div className="fixed bottom-0 right-0 w-1/3 h-1/3 bg-no-repeat bg-right-bottom opacity-20 pointer-events-none hidden md:block" 
           style={{ 
             backgroundImage: "url('/api/placeholder/800/600')", 
             backgroundSize: "contain",
             zIndex: -1 
           }} />

      {/* Footer */}
      <footer className="bg-white py-4 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          © 2025 공항 모빌리티 서비스. 모든 권리 보유.
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
