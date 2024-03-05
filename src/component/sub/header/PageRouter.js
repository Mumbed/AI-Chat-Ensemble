import PageManager from "../../../util/PageManager"
import { Link } from "react-router-dom";

export default function PageRouter({currentPage}) {
    return (
        <div>
            {PageManager.list.map((pageinfo) => <Link key={pageinfo.href} className={pageinfo.title == currentPage ? "current" : null} to={pageinfo.href}>{pageinfo.title}</Link>)}
        </div>
    )
}