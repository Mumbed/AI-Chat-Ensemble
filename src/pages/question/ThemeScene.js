import { Link } from "react-router-dom";
import { NoticeBox } from "../../component/Container/BoxContainer";

/**
 * @description 주제 선택 창
 */
export default function ThemeScene() {
  return (
    <>
      <NoticeBox img="/img/question.png" title="주제 정하고 질문하기">
        주제를 정하고 질문하면<br />더 다양한 답변을 얻을 수 있어요.
      </NoticeBox>
      <Link to="coding">코딩</Link>
      <Link to="cook">요리</Link>
      <Link to="game">게임</Link>
      <Link to="study">공부</Link>
    </>
  )
}