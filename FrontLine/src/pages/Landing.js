/**
 * 사용자가 잘못된 페이지를 요청했거나, 사이트를 처음 들어왔을 시 자동으로 랜딩하는 페이지.
 */

// 페이지 이동 처리를 의한 위존성.
import { LoginManager } from "../util/UserManager";
import { Navigate } from "react-router-dom";

/**
 * @type {() => React.ReactElement}
 */
export default function Landing() {
  return LoginManager.isLogined ? <Navigate to="/main" /> : <Navigate to="/login" />
}