// 부분 컴포넌트 의존성.
import { ResponseBox } from "./BoxContainer"

/**
 * @description Chat GPT 예제.
 * @type {() => React.ReactElement}
 */
function ChatGPTExample() {
  return (
    <ResponseBox aiName="Chat_GPT">
      연필은 그래파이트가 나무나 플라스틱 케이스로 싸여진 형태로 되어 있습니다. 연필은 쓰는 과정에서 쓰기 편하고, 지우기가 쉽고, 비교적 저렴하며 오랫동안 사용할 수 있도록 설계되어 있습니다.<br />
      연필은 주로 그래파이트라는 물질을 사용하여 글을 씁니다. 그래파이트는 납이나 흑연 등의 연료를 가공하여 만든 물질로, 가양한 단계의 경도를 가지고 있습니다. 연필의 그래파이트가 더 부드럽고 어두우면 연필이 더 어둡고 부드럽게 쓰여집니다. 반면에 그래파이트가 더 경직되고 연한 경우에는 연필이 더 경직되고 연한 선으로 쓰여집니다.<br />
      연필은 주로 문서 작성, 스케치, 그림 그리기 등 다양한 용도로 사용됩니다. 또한 연필은 잘 지워지기 때문에 실수를 수정하는 데에도 유용합니다.
    </ResponseBox>
  )
}

/**
 * @description Gemini 예제.
 * @type {() => React.ReactElement}
 */
function GeminiExample() {
  return (
    <ResponseBox aiName="Gemini">
      연필은 다양한 등급으로 제공됩니다. 각각은 서로 다른 농도의 흑연을 가지고 있습니다. HB연필은 가장 일반적인 유형이며 다양한 직업에 적합합니다. B연필은 더 부드럽고 어두운 선을 만들어 그림에 적합합니다. H연필은 더 단단하고 밝은 선을 만들어 쓰기에 적합합니다.<br />
      연필은 다양한 방법으로 사용할 수 있는 다목적 도구입니다. 글쓰기, 그리기, 스케치, 음영 등에 사용할 수 있습니다. 또한 다양한 재료에 사용할 수 있습니다. 종이, 캔버스, 나무, 심지어 직물까지.<br />
      연필은 사용하기 쉽고 저렴하며 휴대하기 쉽기 때문에 모든 연령과 기술 수준의 아티스트에게 인기 있는 선택입니다. 초보자부터 전문가까지 모두에게 휼륭한 도구입니다.<br />
      연필에 대한 몇 가지 재미있는 사실은 다음과 같습니다.<br />
       • 최초의 연필은 16세기 중반에 영국에서 만들어졌습니다.<br />
       • 최초의 연필은 실제로 납으로 만들어졌습니다. 그래서 그 이름이 붙었습니다.<br />
       • 세계에서 가장 큰 연필은 2008년 영국에서 만들어졌습니다. 길이가 25피트, 무게가 1500파운드였습니다.<br />
       • 세계에서 가장 작은 연필은 2016년 일본에서 만들어졌습니다. 길이는 0.1인치(2.5nm)였습니다.
    </ResponseBox>
  )
}

/**
 * @description Copliot 예제.
 * @type {() => React.ReactElement}
 */
function CopliotExample() {
  return (
    <ResponseBox aiName="Copliot">
      설계를 하거나 목재를 자르는 등 산업 현장에서도 유용하게 사용되죠. 오늘은 이 연필 속 숨겨진 이야기를 만나봅시다!<br />
      1. 왜 연필은 노란색이 많을까?<br />
       • 연필 중에 가장 많은 색깔을 꼽으라고 한다면 당연히 노란색 연필일 겁니다.<br />
       • 그런데 언제부터 노란색 연필을 사용하게 된 걸까요?<br />
       • 19세기에 가장 품질 좋은 흑연은 중국에서 생산된 흑연이었습니다.<br />
       • 미국의 연필 제조사들은 자사 연필에 고품질의 중국산 흑연을 사용했다는 것을 알리고 싶었습니다.<br />
       • 당시 노란색은 중국 왕족을 상징하는 색깔이였고, 연필에 밝은 노란색을 칠해 고급스러운 느낌과 더불어 소비자들에게 연필을 보고 중국을 연상하도록 했습니다.<br />
       • 이것이 현재까지 이어졌고, 미국에서 판매되는 연필의 약 **75%**가 노란색 연필인 이유라고 합니다.<br />
      2. 연필이 세계적인 발명품과 예술품을 만들어냈다?<br />
       • 연필은 역사적 기록부터 예술적 영감을 표현하는 도구로서 탁월한 역할을 합니다.<br />
       • 혹자는 연필을 인류 진화에서 불과 바퀴에 비견될 정도의 혁신이라고 부르기도 합니다.<br />
       • 발명품과 예술품을 만드는 데도 기여했습니다. 
    </ResponseBox>
  )
}

export { ChatGPTExample, GeminiExample, CopliotExample }