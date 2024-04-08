import React from 'react';
import Header from './Component/Header'; // 헤더 컴포넌트 임포트
import Intro from './Component/Intro'; // Intro 컴포넌트 임포트
import IntroAce from './Component/IntroAce';
import IntroEx from './Component/IntroEx';
import './App.css'; // App 컴포넌트의 스타일을 위한 CSS 파일

function App() {
  return (
    <div className="appContainer">
      <Header /> {/* 헤더 컴포넌트 렌더링 */}
      <Intro /> {/* Intro 컴포넌트 렌더링 */}
      <IntroAce /> {/* Intro_ace 컴포넌트 렌더링 */}
      <IntroEx />

      {/* 페이지의 나머지 부분이 여기에 올 수 있습니다. */}
    </div>
  );
}

export default App;
