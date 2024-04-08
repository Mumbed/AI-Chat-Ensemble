import React from 'react';
import '../Style/IntroEx.css';

const Question = () => {
  return (
    <div className="question-container">
      <div className="question-text">연필에 대해서 알려줘.</div>
    </div>
  );
}

const IntroEx = () => {
  return (
    <div className="container">
      <div className="heading-container">
        <div className="heading">무엇이든 질문해주세요.</div>
        <div className="sub-heading">GPT, gemini등 다양한 대화형 AI에게 물어볼게요.</div>
      </div>
      {/* 이 곳에 삽입*/}
      <Question />
      <div className="card-container">
        {/* Chat GPT Card */}
        <div className="card">
          <div className="card-header">
            <img className="avatar" width="48" height="48" src="Ellipse 59295_675.png" alt="Chat GPT Avatar" />
            <div className="username">Chat GPT</div>
            <div className="handle">@GPT 3.5</div>
          </div>
          <div className="card-title">연필은 일반적으로 나무 또는 그래파이트로 만들어진 필기 도구입니다.</div>
          <div className="card-content">
            필은 그래파이트가 나무나 플라스틱 케이스로 싸여진 형태로 되어 있습니다. 연필은 쓰는 과정에서 쓰기 편하고, 지우기가 쉽고, 비교적 저렴하며 오랫동안 사용할 수 있도록 설계되어 있습니다.
            <br />
            연필은 주로 문서 작성, 스케치, 그림 그리기 등 다양한 용도로 사용됩니다. 또한 연필은 잘 지워지기 때문에 실수를 수정하는 데에도 유용합니다.
          </div>
        </div>
        {/* Gemini Card */}
        <div className="card">
          <div className="card-header">
            <img className="avatar" width="48" height="48" src="Ellipse 59295_684.png" alt="Gemini Avatar" />
            <div className="username">Gemini</div>
            <div className="handle">@울트라 1.0</div>
          </div>
          <div className="card-title">연필은 종이와 같은 거친 표면에 글씨를 쓰거나 그림을 그리는 데 사용할 수 있는 필기 도구입니다.</div>
          <div className="card-content">
            연필은 다양한 등급으로 제공됩니다. 각각은 서로 다른 농도의 흑연을 가지고 있습니다. HB 연필은 가장 일반적인 유형이며 다양한 작업에 적합합니다. B 연필은 더 부드럽고 어두운 선을 만들어 그림에 적합합니다. H 연필은 더 단단하고 밝은 선을 만들어 쓰기에 적합합니다.
            <br />
            연필은 다양한 방법으로 사용할 수 있는 다목적 도구입니다. 글쓰기, 그리기, 스케치, 음영 등에 사용할 수 있습니다. 또한 다양한 재료에 사용할 수 있습니다. 종이, 캔버스, 나무, 심지어 직물까지.
            <br />
            연필은 사용하기 쉽고 저렴하며 휴대하기 쉽기 때문에 모든 연령과 기술 수준의 아티스트에게 인기 있는 선택입니다. 초보자부터 전문가까지 모두에게 훌륭한 도구입니다.
          </div>
        </div>
        {/* Copilot Card */}
        <div className="card">
          <div className="card-header">
            <img className="avatar" width="48" height="48" src="Ellipse 59295_693.png" alt="Copilot Avatar" />
            <div className="username">Copilot</div>
            <div className="handle">@</div>
          </div>
          <div className="card-title">연필은 우리가 처음 글자를 배우기 시작할 때부터 사용했던 필기구입니다.</div>
          <div className="card-content">
            설계를 하거나 목재를 자르는 등 산업 현장에서도 유용하게 사용되죠. 오늘은 이 연필 속 숨겨진 이야기를 만나봅시다!
            <br />
            왜 연필은 노란색이 많을까?
            <br />
            연필 중에 가장 많은 색깔을 꼽으라고 한다면 당연히 노란색 연필일 겁니다.
            <br />
            그런데 언제부터 노란색 연필을 사용하게 된 걸까요?
            <br />
            19세기에 가장 품질 좋은 흑연은 중국에서 생산된 흑연이었습니다.
            <br />
            미국의 연필 제조사들은 자사 연필에 고품질의 중국산 흑연을 사용했다는 것을 알리고 싶었습니다.
            <br />
            당시 노란색은 중국 왕족을 상징하는 색깔이었고, 연필에 밝은 노란색을 칠해 고급스러운 느낌과 더불어 소비자들에게 연필을 보고 중국을 연상하도록 했습니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroEx;
