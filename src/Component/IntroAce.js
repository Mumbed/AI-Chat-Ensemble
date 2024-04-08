import React from 'react';
import '../Style/IntroAce.css';
import Intro_ace_1 from '../Image/Intro_ace_1.png';
import Intro_ace_2 from '../Image/Intro_ace_2.png';
import Intro_ace_3 from '../Image/Intro_ace_3.png';
import Intro_ace_4 from '../Image/Intro_ace_4.png';

const IntroAce = () => {
  return (
    <div className="introAceContainer">
      <div className="introAceTitleContainer">
        <div className="introAceTitle">ACE와 함께 아이디어를 얻으세요</div>
      </div>
      <div className="introAceContent">
        <div className="introAceSection">
          <div className="introAceImageContainer">
            <img width="400" height="300" className="introAceImage" src={Intro_ace_1} alt="ACE의 탄생"/>
            <div className="introAceTextContainer">
              <div className="introAceSectionTitle">ACE의 탄생</div>
              <div className="introAceSectionText">세상에는 다양한 ai가 존재하고 계속해서 출시되고 있습니다.<br/>각 ai마다 강점을 내새우며 발전하고 있습니다.</div>
            </div>
          </div>
        </div>
        <div className="introAceSection">
          <div className="introAceImageContainer">
            <div className="introAceTextContainer">
              <div className="introAceSectionTitle">ACE 서비스는?</div>
              <div className="introAceSectionText">다양한 ai에게 질문을 하여<br/> 여러 ai의 답변을 한번에 제공받을 수 있습니다.<br/>ai의 강점에 맞는 답변을 선택해보세요.</div>
            </div>
            <img width="400" height="300" className="introAceImage" src={Intro_ace_2} alt="ACE 서비스"/>
          </div>
        </div>
      </div>
      <div className="introAceContent">
        <div className="introAceSection">
          <div className="introAceImageContainer">
            <div className="introAceTextContainer">
              <div className="introAceSectionTitle">다른 사용자의 통계 자료 제공</div>
              <div className="introAceSectionText">주제를 선택하시면 다른 사용자의 AI 선택 통계를 제공해드립니다.<br/>다른 사용자들의 선택과 함께 아이디어의 폭을 넓혀보세요.</div>
            </div>
            <img width="400" height="300" className="introAceImage" src={Intro_ace_3} alt="통계 자료"/>
          </div>
        </div>
        <div className="introAceSection">
          <div className="introAceImageContainer">
            <div className="introAceTextContainer">
              <div className="introAceSectionTitle">손쉬운 ai 프롬프트 엔지니어링</div>
              <div className="introAceSectionText">ACE는 주제만 선택하시면 좀 더 정확성 높은 답변을 제공해드립니다.</div>
            </div>
            <img width="400" height="300" className="introAceImage" src={Intro_ace_4} alt="AI 프롬프트"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroAce;
