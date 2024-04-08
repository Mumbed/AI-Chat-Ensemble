import React from 'react';
import Header from './Component/Header'; // 헤더 컴포넌트 임포트
import Intro from './Component/Intro'; // Intro 컴포넌트 임포트
import IntroAce from './Component/IntroAce';
import IntroEx from './Component/IntroEx';
import IntroHow from './Component/IntroHow';
import IntroHelp from './Component/IntroHelp';
import IntroFooter from './Component/IntroFooter';
import './App.css'; // App 컴포넌트의 스타일을 위한 CSS 파일

function App() {
  return (
    <div className="appContainer">
      <Header /> {/* 헤더 컴포넌트 렌더링 */}
      <Intro /> {/* Intro 컴포넌트 렌더링 */}
      <IntroAce /> {/* Intro_ace 컴포넌트 렌더링 */}
      <IntroEx />
      <IntroHow />
      <IntroHelp />
      <IntroFooter />

    </div>
  );
}

export default App;
