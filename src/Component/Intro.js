import React from 'react';
import '../Style/Intro.css'; // CSS 파일 임포트
import introDogImage from '../Image/Intro_dog.png';

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro-title">ACE를 소개합니다.</div>
      <div className="intro-description">ACE는 명령을 받은 강아지처럼 다양한곳에서 답변을 물어옵니다.</div>
      <img className="intro-image" src={introDogImage} alt="Main Dog"></img>
      <div className="intro-buttons">
        <div className="intro-button-start">시작하기</div>
        <div className="intro-button-howto">사용 방법</div>
      </div>
    </div>
  );
}

export default Intro;
