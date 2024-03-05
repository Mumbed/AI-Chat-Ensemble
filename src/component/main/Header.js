// 메인 페이지 상단 바 컴포넌트.

import { useLocation } from "react-router-dom"
import Logo from "../sub/header/Logo"
import PageRouter from "../sub/header/PageRouter"

export default function Header() {
  const location = useLocation();
  return (
    <header>
      <Logo></Logo>
      <PageRouter currentPage={location.pathname}></PageRouter>
    </header>
  )
}