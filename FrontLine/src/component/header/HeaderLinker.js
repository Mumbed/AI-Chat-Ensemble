/**
 * 사이트 헤더에 들어갈 페이지 이동을 하는 컴포넌트.
 */

// 페이지 이동 처리를 의한 위존성.
import PageManager from "../../util/PageManager"
import { Link } from "react-router-dom";

export default function HeaderLinker({currentPage}) {
    return (
        <div>
            {PageManager.list.map((pageinfo) => <Link key={pageinfo.href} style={pageinfo.href == currentPage ? {color: "cyan"} : null} to={pageinfo.href}>{pageinfo.title}</Link>)}
        </div>
    )
}