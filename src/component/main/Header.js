/**
 * 메인 페이지 상단 바 컴포넌트.
 */

// location 훅을 사용하기 위한 의존성.
import { useLocation } from "react-router-dom"

// 각 Header의 구성 컴포넌트.
import Logo from "../sub/header/Logo"
import PageRouter from "../sub/header/PageRouter"

export default function Header() {
  const location = useLocation();
  return (
    <header>
      <Logo></Logo>
      {location.pathname != "/login" ? <PageRouter currentPage={location.pathname}></PageRouter> : <></>}
    </header>
  )
}
