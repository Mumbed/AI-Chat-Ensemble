/**
 * 사이트 헤더 컴포넌트.
 */

// 페이지 이동 처리를 의한 위존성.
import { Link, useLocation } from "react-router-dom"

// 부분 컴포넌트 의존성.
import HeaderLinker from "./HeaderLinker"

export default function Header() {
  const location = useLocation();
  return (
    <header>
      <Link style={{
        fontWeight: "bold"
      }} to="/">ACE</Link>
      {location.pathname != "/login" ? <HeaderLinker currentPage={location.pathname}></HeaderLinker> : <></>}
    </header>
  )
}
