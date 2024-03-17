import { useParams } from "react-router-dom"

export default function DetailedScene() {
  // 컴포넌트 처리
  const { theme } = useParams();

  // 컴포넌트 반환
  return (
    <h1>선택한 테마는 {theme}.</h1>
  )
}