// IntroHow.js

import React from 'react';
import '../Style/IntroHow.css';
import GPT_logo from '../Image/ChatGPT_logo.png';
import Copilot_logo from '../Image/Copilot.png';

const IntroHow = () => {
  return (
    <div className="intro-how-container">
      <div className="intro-text-container">
        <div className="intro-text">
          <div className="title">답변을 물어주세요.</div>
          <div className="subtitle">마음에 드는 답변이 있다면 클릭해주세요.</div>
        </div>
      </div>
      <div className="cards-container">
        <div className="card unique-card"> {/* 이 부분만 유일한 css속성으로*/}
          <div className="card-content">
            <div className="avatar">
              <img src={Copilot_logo} width="48" height="48" alt="Avatar" />
              <div className="avatar-info">
                <div className="name">Copilot</div>
                <div className="username">@</div>
              </div>
            </div>
            <div className="text">
              <div className="text-title">연필은 우리가 처음 글자를 배우기 시작할 때부터 사용했던 필기구입니다.</div>
              <div className="text-body">
                설계를 하거나 목재를 자르는 등 산업 현장에서도 유용하게 사용되죠. 오늘은 이 연필 속 숨겨진 이야기를 만나봅시다!
                <br />
                
              </div>
            </div>
          </div>
        </div>
        <div className="card unique-card">
          <div className="card-content">
            <div className="avatar">
              <img src={GPT_logo} width="48" height="48" alt="Avatar" />
              <div className="avatar-info">
                <div className="name">ChatGPT</div>
                <div className="username">@GPT 3.5</div>
              </div>
            </div>
            <div className="text">
              <div className="text-title">연필은 우리가 처음 글자를 배우기 시작할 때부터 사용했던 필기구입니다.</div>
              <div className="text-body">
                설계를 하거나 목재를 자르는 등 산업 현장에서도 유용하게 사용되죠. 오늘은 이 연필 속 숨겨진 이야기를 만나봅시다!
                <br />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroHow;
