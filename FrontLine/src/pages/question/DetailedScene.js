// 파라미터 인식 처리를 위한 의존성.
import { useParams } from "react-router-dom"

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