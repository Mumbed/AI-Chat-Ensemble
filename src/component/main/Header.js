// 메인 페이지 상단 바 컴포넌트.

import Logo from "../sub/header/Logo"
import PageRouter from "../sub/header/PageRouter"

export default function Header({currentPage}) {
  return (
    <header>
      <Logo></Logo>
      <PageRouter currentPage={currentPage}></PageRouter>
    </header>
  )
}