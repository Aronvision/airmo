import React, { useState } from 'react';

const MyProfilePage = () => {
  // 사용자 정보 상태 (실제로는 API에서 가져와야 함)
  const [userInfo, setUserInfo] = useState({
    name: '김민수',
    email: 'minsu.kim@example.com',
    phone: '010-1234-5678',
    hasDisability: true,
    disabilityInfo: '휠체어 사용자, 이동 시 도움 필요',
    profileImage: null, // 프로필 이미지 URL
  });

  // 수정 모드 상태
  const [editMode, setEditMode] = useState(false);
  
  // 수정 중인 정보
  const [editInfo, setEditInfo] = useState({ ...userInfo });
  
  // 비밀번호 변경 모달 상태
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  
  // 비밀번호 변경 폼 상태
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  
  // 프로필 정보 수정 처리
  const handleEditSubmit = (e) => {
    e.preventDefault();
    
    // 유효성 검증 (실제 구현 시 더 자세하게)
    if (!editInfo.name || !editInfo.email || !editInfo.phone) {
      alert('필수 정보를 모두 입력해주세요.');
      return;
    }
    
    // 서버에 업데이트 요청 (실제 API 호출 코드로 대체 필요)
    console.log('프로필 정보 업데이트:', editInfo);
    
    // 성공했다고 가정하고 상태 업데이트
    setUserInfo({ ...editInfo });
    setEditMode(false);
    
    // 성공 알림 (실제 구현 시 좀 더 자연스러운 UI로)
    alert('프로필 정보가 성공적으로 업데이트되었습니다.');
  };
  
  // 입력 필드 변경 처리
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditInfo({
      ...editInfo,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  // 비밀번호 입력 필드 변경 처리
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordForm({
      ...passwordForm,
      [name]: value
    });
  };
  
  // 비밀번호 변경 처리
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    
    // 유효성 검증
    if (!passwordForm.currentPassword || !passwordForm.newPassword || !passwordForm.confirmPassword) {
      alert('모든 필드를 입력해주세요.');
      return;
    }
    
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      alert('새 비밀번호와 확인 비밀번호가 일치하지 않습니다.');
      return;
    }
    
    // 서버에 비밀번호 변경 요청 (실제 API 호출 코드로 대체 필요)
    console.log('비밀번호 변경 요청:', passwordForm);
    
    // 성공했다고 가정하고 모달 닫기
    setShowPasswordModal(false);
    
    // 입력 필드 초기화
    setPasswordForm({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
    
    // 성공 알림
    alert('비밀번호가 성공적으로 변경되었습니다.');
  };
  
  // 편집 취소 처리
  const handleCancelEdit = () => {
    setEditInfo({ ...userInfo });
    setEditMode(false);
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
          <h1 className="text-2xl font-semibold text-gray-900">마이페이지</h1>
          <p className="text-gray-600 mt-1">
            개인 정보 확인 및 수정
          </p>
        </div>

        {/* MyPage Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="flex border-b border-gray-200 overflow-x-auto">
            <a 
              href="/mypage/profile" 
              className="py-3 px-6 font-medium text-sm border-b-2 border-primary text-primary"
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
              className="py-3 px-6 font-medium text-sm text-gray-500 hover:text-gray-700"
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

        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">내 정보</h2>
              {!editMode ? (
                <button
                  onClick={() => setEditMode(true)}
                  className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  정보 수정
                </button>
              ) : (
                <div className="flex space-x-2">
                  <button
                    onClick={handleCancelEdit}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    취소
                  </button>
                  <button
                    onClick={handleEditSubmit}
                    className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors"
                  >
                    저장
                  </button>
                </div>
              )}
            </div>

            <div className="flex flex-col md:flex-row">
              {/* Profile Image Section */}
              <div className="md:w-1/3 mb-6 md:mb-0 flex flex-col items-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden mb-4">
                  {userInfo.profileImage ? (
                    <img 
                      src={userInfo.profileImage} 
                      alt="프로필 이미지" 
                      className="w-full h-full object-cover" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-blue-100 text-primary">
                      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  )}
                </div>
                {editMode && (
                  <button
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    이미지 변경
                  </button>
                )}
              </div>

              {/* Profile Info Section */}
              <div className="md:w-2/3 md:pl-8">
                {!editMode ? (
                  // View Mode
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">이름</h3>
                      <p className="text-lg text-gray-900">{userInfo.name}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">이메일</h3>
                      <p className="text-lg text-gray-900">{userInfo.email}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">휴대폰 번호</h3>
                      <p className="text-lg text-gray-900">{userInfo.phone}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">교통약자 여부</h3>
                      <p className="text-lg text-gray-900">{userInfo.hasDisability ? '예' : '아니오'}</p>
                    </div>
                    {userInfo.hasDisability && userInfo.disabilityInfo && (
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">추가 정보</h3>
                        <p className="text-lg text-gray-900">{userInfo.disabilityInfo}</p>
                      </div>
                    )}
                    
                    <div className="pt-4 border-t border-gray-200">
                      <button
                        onClick={() => setShowPasswordModal(true)}
                        className="text-primary hover:underline font-medium"
                      >
                        비밀번호 변경
                      </button>
                    </div>
                  </div>
                ) : (
                  // Edit Mode
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        이름
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={editInfo.name}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        이메일
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={editInfo.email}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        휴대폰 번호
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={editInfo.phone}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="hasDisability"
                        name="hasDisability"
                        checked={editInfo.hasDisability}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <label htmlFor="hasDisability" className="ml-2 block text-sm text-gray-700">
                        교통약자입니다 (장애, 노약자, 임산부 등)
                      </label>
                    </div>
                    {editInfo.hasDisability && (
                      <div>
                        <label htmlFor="disabilityInfo" className="block text-sm font-medium text-gray-700 mb-1">
                          추가 정보 (선택)
                        </label>
                        <textarea
                          id="disabilityInfo"
                          name="disabilityInfo"
                          value={editInfo.disabilityInfo || ''}
                          onChange={handleInputChange}
                          rows="3"
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="필요한 도움이나 고려사항이 있다면 자세히 알려주세요."
                        ></textarea>
                      </div>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">최근 활동</h2>
            <a 
              href="/mypage/history" 
              className="text-sm text-primary font-medium hover:underline"
            >
              모두 보기
            </a>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full text-primary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">새 예약 완료</p>
                <p className="text-xs text-gray-500">2025년 3월 5일 14:30, 제1터미널 → A 게이트</p>
                <p className="text-xs text-gray-500 mt-1">5분 전</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-green-100 p-2 rounded-full text-green-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">로봇 이용 완료</p>
                <p className="text-xs text-gray-500">제2터미널 입국장 → 공항 철도역</p>
                <p className="text-xs text-gray-500 mt-1">2025년 2월 28일 11:45</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-yellow-100 p-2 rounded-full text-yellow-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">프로필 정보 수정</p>
                <p className="text-xs text-gray-500">연락처 정보 업데이트</p>
                <p className="text-xs text-gray-500 mt-1">2025년 2월 25일 18:30</p>
              </div>
            </div>
          </div>
        </div>

        {/* Account Actions */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">계정 관리</h2>
          
          <div className="space-y-4">
            <div>
              <button
                onClick={() => setShowPasswordModal(true)}
                className="text-gray-700 hover:text-primary transition-colors flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
                <span>비밀번호 변경</span>
              </button>
            </div>
            
            <div>
              <a 
                href="/mypage/notifications" 
                className="text-gray-700 hover:text-primary transition-colors flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span>알림 설정</span>
              </a>
            </div>
            
            <div>
              <a 
                href="/mypage/accessibility" 
                className="text-gray-700 hover:text-primary transition-colors flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span>접근성 설정</span>
              </a>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <a 
                href="/account/delete" 
                className="text-red-600 hover:text-red-800 transition-colors flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <span>계정 삭제</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Password Change Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">비밀번호 변경</h3>
              <button 
                onClick={() => setShowPasswordModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handlePasswordSubmit} className="p-6">
              <div className="mb-4">
                <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  현재 비밀번호
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  name="currentPassword"
                  value={passwordForm.currentPassword}
                  onChange={handlePasswordChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  새 비밀번호
                </label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={passwordForm.newPassword}
                  onChange={handlePasswordChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                  minLength="8"
                />
                <p className="text-xs text-gray-500 mt-1">영문, 숫자, 특수문자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
              </div>
              
              <div className="mb-6">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  새 비밀번호 확인
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={passwordForm.confirmPassword}
                  onChange={handlePasswordChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowPasswordModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  변경하기
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProfilePage;
