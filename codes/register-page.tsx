import React, { useState } from 'react';

const RegisterPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    phoneNumber: '',
    ticketNumber: '',
    hasDisability: false,
    mobilityNeedsDescription: '',
    agreeToTerms: false,
    agreeToPrivacy: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleNextStep = () => {
    // 데이터 유효성 검증 후 다음 단계로 이동
    if (step === 1) {
      if (!formData.name || !formData.email || !formData.password || !formData.passwordConfirm || !formData.phoneNumber) {
        alert('모든 필수 정보를 입력해주세요.');
        return;
      }
      
      if (formData.password !== formData.passwordConfirm) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
      }
    } else if (step === 2) {
      if (!formData.ticketNumber) {
        alert('항공권 번호를 입력해주세요.');
        return;
      }
    } else if (step === 3) {
      if (!formData.agreeToTerms || !formData.agreeToPrivacy) {
        alert('이용약관 및 개인정보 처리방침에 동의해주세요.');
        return;
      }
    }

    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 서버로 데이터를 전송하는 부분 (실제 구현 시 여기에 API 호출)
    console.log('회원가입 데이터:', formData);
    
    // 회원가입 성공 후 로그인 페이지로 이동 (임시)
    alert('회원가입이 완료되었습니다! 로그인 페이지로 이동합니다.');
    window.location.href = '/login';
  };

  // 단계별 진행 바 표시
  const ProgressBar = () => (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-col">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            step >= 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'
          }`}>
            1
          </div>
          <span className="text-xs mt-1">기본 정보</span>
        </div>
        <div className={`flex-1 h-1 mx-2 ${step >= 2 ? 'bg-primary' : 'bg-gray-200'}`}></div>
        <div className="flex items-center flex-col">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            step >= 2 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'
          }`}>
            2
          </div>
          <span className="text-xs mt-1">항공권 정보</span>
        </div>
        <div className={`flex-1 h-1 mx-2 ${step >= 3 ? 'bg-primary' : 'bg-gray-200'}`}></div>
        <div className="flex items-center flex-col">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            step >= 3 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'
          }`}>
            3
          </div>
          <span className="text-xs mt-1">약관 동의</span>
        </div>
        <div className={`flex-1 h-1 mx-2 ${step >= 4 ? 'bg-primary' : 'bg-gray-200'}`}></div>
        <div className="flex items-center flex-col">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            step >= 4 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'
          }`}>
            4
          </div>
          <span className="text-xs mt-1">완료</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-secondary">
      {/* Header/NavBar */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <a href="/" className="text-primary font-bold text-xl">공항 모빌리티</a>
        </div>
      </nav>

      {/* Registration Form */}
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white shadow-md rounded-lg w-full max-w-2xl p-8">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-semibold text-gray-900">회원가입</h1>
            <p className="text-gray-600 mt-1">공항 모빌리티 서비스를 이용하기 위한 회원가입</p>
          </div>

          <ProgressBar />

          <form onSubmit={handleSubmit}>
            {/* Step 1: Basic Information */}
            {step === 1 && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">기본 정보 입력</h2>
                
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    이름
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                
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
                    required
                  />
                </div>
                
                <div className="mb-4">
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
                    required
                    minLength="8"
                  />
                  <p className="text-xs text-gray-500 mt-1">영문, 숫자, 특수문자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="passwordConfirm" className="block text-sm font-medium text-gray-700 mb-1">
                    비밀번호 확인
                  </label>
                  <input
                    type="password"
                    id="passwordConfirm"
                    name="passwordConfirm"
                    value={formData.passwordConfirm}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    휴대폰 번호
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="예: 010-1234-5678"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="hasDisability"
                      name="hasDisability"
                      checked={formData.hasDisability}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label htmlFor="hasDisability" className="ml-2 block text-sm text-gray-700">
                      장애 또는 특별한 도움이 필요합니다
                    </label>
                  </div>
                </div>
                
                {formData.hasDisability && (
                  <div className="mb-4">
                    <label htmlFor="mobilityNeedsDescription" className="block text-sm font-medium text-gray-700 mb-1">
                      필요한 도움 설명 (선택)
                    </label>
                    <textarea
                      id="mobilityNeedsDescription"
                      name="mobilityNeedsDescription"
                      value={formData.mobilityNeedsDescription}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="필요한 도움이나 고려사항이 있다면 자세히 알려주세요."
                    ></textarea>
                  </div>
                )}
              </div>
            )}

            {/* Step 2: Flight Information */}
            {step === 2 && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">항공권 정보 입력</h2>
                
                <div className="mb-4">
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
                    placeholder="예: KE1234567890"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">항공권에 있는 e-Ticket 번호를 입력해주세요. (숫자 13자리 또는 항공사별 규정에 따름)</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-md mb-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 text-primary mt-0.5">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-primary">왜 항공권 정보가 필요한가요?</h3>
                      <div className="mt-2 text-sm text-blue-800">
                        <p>항공권 번호를 통해 공항 내 위치 서비스와 로봇 이용 권한을 확인합니다. 해당 정보는 서비스 제공 목적으로만 사용되며, 안전하게 보호됩니다.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Terms & Agreements */}
            {step === 3 && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">이용약관 및 개인정보 처리방침</h2>
                
                <div className="mb-4">
                  <div className="border border-gray-300 rounded-md h-48 p-3 overflow-y-auto mb-2 text-sm text-gray-600">
                    <h3 className="font-medium text-gray-900 mb-2">서비스 이용약관</h3>
                    <p className="mb-2">제1조 (목적)</p>
                    <p className="mb-2">이 약관은 공항 모빌리티 서비스(이하 "서비스")를 제공하는 회사와 이를 이용하는 회원(이하 "회원") 간의 권리와 의무, 서비스 이용 조건 및 절차 등 기본적인 사항을 규정함을 목적으로 합니다.</p>
                    <p className="mb-2">제2조 (용어의 정의)</p>
                    <p className="mb-2">이 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
                    <p className="mb-2">1. "서비스"란 회사가 제공하는 공항 내 모빌리티 로봇 대여 및 운영 서비스를 말합니다.</p>
                    <p className="mb-2">2. "회원"이란 서비스에 가입하여 고유번호를 부여받은 자를 말합니다.</p>
                    <p className="mb-2">3. "로봇"이란 공항 내에서 회원이 이용할 수 있도록 제공되는 휠체어형 모빌리티 기기를 말합니다.</p>
                    <p>... (이하 생략)</p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="agreeToTerms"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-700">
                      이용약관에 동의합니다 (필수)
                    </label>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="border border-gray-300 rounded-md h-48 p-3 overflow-y-auto mb-2 text-sm text-gray-600">
                    <h3 className="font-medium text-gray-900 mb-2">개인정보 처리방침</h3>
                    <p className="mb-2">1. 수집하는 개인정보 항목</p>
                    <p className="mb-2">회사는 회원가입, 서비스 이용 등을 위해 다음과 같은 개인정보를 수집하고 있습니다.</p>
                    <p className="mb-2">- 필수항목: 이름, 이메일 주소, 비밀번호, 휴대폰 번호, 항공권 번호</p>
                    <p className="mb-2">- 선택항목: 장애 여부, 특별 요청사항</p>
                    <p className="mb-2">2. 개인정보의 수집 및 이용목적</p>
                    <p className="mb-2">- 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산</p>
                    <p className="mb-2">- 회원 관리: 회원제 서비스 이용에 따른 본인확인, 개인식별, 불량회원의 부정 이용 방지</p>
                    <p>... (이하 생략)</p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="agreeToPrivacy"
                      name="agreeToPrivacy"
                      checked={formData.agreeToPrivacy}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="agreeToPrivacy" className="ml-2 block text-sm text-gray-700">
                      개인정보 처리방침에 동의합니다 (필수)
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Completion */}
            {step === 4 && (
              <div className="text-center py-6">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h2 className="text-xl font-medium text-gray-900 mb-2">회원가입 완료!</h2>
                <p className="text-gray-600 mb-8">
                  공항 모빌리티 서비스의 회원이 되신 것을 환영합니다. 이제 로그인하여 서비스를 이용하실 수 있습니다.
                </p>
                <a 
                  href="/login" 
                  className="inline-block bg-primary text-white py-3 px-8 rounded-md hover:bg-blue-600 transition-colors"
                >
                  로그인하기
                </a>
              </div>
            )}

            {/* Navigation Buttons */}
            {step < 4 && (
              <div className="flex justify-between mt-8">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    이전
                  </button>
                ) : (
                  <div></div> // 첫 단계에서는 이전 버튼 자리만 비워둠
                )}
                
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="px-6 py-2 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors"
                  >
                    다음
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="px-6 py-2 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors"
                  >
                    가입 완료
                  </button>
                )}
              </div>
            )}
          </form>

          {/* Login Link */}
          {step !== 4 && (
            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">
                이미 계정이 있으신가요?{' '}
                <a href="/login" className="text-primary hover:underline font-medium">
                  로그인
                </a>
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-4 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          © 2025 공항 모빌리티 서비스. 모든 권리 보유.
        </div>
      </footer>
    </div>
  );
};

export default RegisterPage;
