// 파라미터 인식 처리를 위한 의존성.
import { useParams } from "react-router-dom"

// 페이지 이동 처리를 의한 위존성.
import { AuthManagement, QuestionManagement } from "../../Management";

// 부분 컴포넌트 의존성.
import { ProtecterX } from "../../component/Container/XContainer"
import { useEffect, useState } from "react";
import QuestionForm from "../../component/form/QuestionForm";

export default function DetailedScene() {
  // 컴포넌트 처리
  const { topic } = useParams();
  const [recommend, setRecommend] = useState([]);
  useEffect(() => {
    (async function() {
      const data = await QuestionManagement.submitTopic(topic);
      setRecommend(data);
      return;
    })()
  }, [])

  // 컴포넌트 반환
  return (
    <ProtecterX query={() => AuthManagement.isLogined | QuestionManagement.isCorrectTopic(topic)} rejectedRedirect="/login">
      <h1>질문을 할 때, 다음의 단어를 추가하면 더 좋은 답변을 얻을 수 있을지도?</h1>
      <ul>
        {recommend.map(data => <li key={data}>{data}</li>)}
      </ul>
      <QuestionForm></QuestionForm>
    </ProtecterX>
  )
}