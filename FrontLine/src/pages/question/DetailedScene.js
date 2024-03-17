// 파라미터 인식 처리를 위한 의존성.
import { useParams } from "react-router-dom"

// 페이지 이동 처리를 의한 위존성.
import { LoginManager } from "../../util/UserManager";

// 부분 컴포넌트 의존성.
import { ProtecterX } from "../../component/Container/XContainer"

export default function DetailedScene() {
  // 컴포넌트 처리
  const { theme } = useParams();

  // 컴포넌트 반환
  return (
    <ProtecterX query={() => LoginManager.isLogined} rejectedRedirect="/login">
      <h1>선택한 테마는 {theme}.</h1>
    </ProtecterX>
  )
}