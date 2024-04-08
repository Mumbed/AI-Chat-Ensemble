import React from 'react';
import '../Style/IntroFooter.css';
import Footerdog from '../Image/footer_dog.png';

const IntroFooter = () => {
    return (
        <div className="footer-container">
            <div className="footer-text-container">
                그럼 ACE와 함께 시작해볼까요?
            </div>
            <img className="footer-background-image" src={Footerdog} alt="Footer Background" />
            <div className="footer-button-container">
                <div className="footer-button">
                    시작하기
                </div>
            </div>
        </div>
    );
}

export default IntroFooter;
