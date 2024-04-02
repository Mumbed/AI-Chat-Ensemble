import { useLocation, useNavigate } from "react-router-dom";
import { QuestionManagement } from "../../util/Management";

/**
 * @type {() => React.ReactElement}
 */
export default function QuestionForm() {
  // 컴포넌트 처리
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const submit = async e => {
    e.preventDefault();
    await QuestionManagement.submitQuestion(new FormData(e.target))
    navigate(pathname.split("/").slice(0, 3).join('/') + '/main')
  }

  // 컴포넌트 반환
  return (
    <form onSubmit={submit}>
      <textarea name="question"></textarea>
      <input type="submit"></input>
    </form>
  )
}