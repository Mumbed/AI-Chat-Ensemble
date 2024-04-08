import React from 'react';
import '../Style/Header.css'; // CSS 파일 임포트
import logoImage from '../Image/logo.png';
const Header = () => {
  return (
    <div className="header-container">
      <div className="nav-content">
        <div className="main-nav">
          <img width="150" height="80"  src={logoImage} alt="ACE"></img>
          <div className="nav-item-container">
            <div className="nav-item">
              <div className="nav-text">질문하기</div>
            </div>
            <div className="nav-item">
              <div className="nav-text">AI종류보기</div>
            </div>
          </div>
        </div>
      </div>
      <div className="login-section">
        <div>
          <div className="login-text">로그인</div>
        </div>
        <div className="signup-button">
          <div className="signup-text">회원가입</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
