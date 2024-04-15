// 페이지 이동 처리를 위한 의존성.
import { Link, useLocation } from "react-router-dom";

// 부분 컴포넌트 의존성.
import { NoticeBox } from "../../component/Container/BoxContainer";
import { ProtecterX } from "../../component/Container/XContainer";
import { AuthManagement, QuestionManagement } from "../../util/Management";
import { useEffect } from "react";
import QuestionForm from "../../component/form/QuestionForm";
import { useNavigate } from 'react-router-dom';

/**
 * @description 주제 선택 창
 */
export default function ThemeScene() {
  const { pathname } = useLocation();
  useEffect(() => {
    QuestionManagement.getChatData();
  }, [])
  
  return (
    <ProtecterX query={() => AuthManagement.isLogined} rejectedRedirect="/login">
      <NoticeBox img="/img/question.png" title="주제 정하고 질문하기">
        주제를 정하고 질문하면<br />더 다양한 답변을 얻을 수 있어요.
      </NoticeBox>
      <Link to={pathname.replaceAll("first", "coding")}>코딩</Link>
      <Link to={pathname.replaceAll("first", "cook")}>요리</Link>
      <Link to={pathname.replaceAll("first", "game")}>게임</Link>
      <Link to={pathname.replaceAll("first", "study")}>공부</Link>
      <QuestionForm></QuestionForm>
    </ProtecterX>
  )
}