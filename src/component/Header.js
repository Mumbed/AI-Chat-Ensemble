// 페이지 이동 처리를 의한 위존성.
import PageManager from "../util/PageManager"
import { Link, useLocation } from "react-router-dom"

/**
 * @description 헤더 컴포넌트.
 * @type {() => React.ReactElement}
 */
export default function Header() {
  // 컴포넌트 처리
  const location = useLocation();

  // 컴포넌트 반환
  return (
    <header>
      <Link style={{
        fontWeight: "bold"
      }} to="/">ACE</Link>
      <div>
        {PageManager.list.map((pageinfo) => <Link key={pageinfo.href} style={pageinfo.href == location.pathname ? {color: "cyan"} : null} to={pageinfo.href}>{pageinfo.title}</Link>)}
      </div>
    </header>
  )
}
