import React from 'react';
import '../Style/IntroHelp.css';
//import '../Style/FormatSvg.css';
import FormatSvg from './FormatSvg.svg'; // SVG 파일 경로

const IntroHelp = () => {
    return (
        <div className="intro-help-container">
            <div className="intro-help-content">
                <div className="overlay"></div>
                <img className="intro-help-image" src={FormatSvg} alt="Screenshot" />
                <div className="intro-help-text">다른 사람들은 어떤 AI를 선택했는지 알려드릴게요.</div>
                <div className="intro-help-heading">생각을 도와드릴게요.</div>
                <div className="blue-bar"></div>
            </div>
        </div>
    );
}

export default IntroHelp;
