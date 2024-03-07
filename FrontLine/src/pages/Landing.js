/**
 * 사용자가 잘못된 페이지를 요청했거나, 사이트를 처음 들어왔을 시 자동으로 랜딩하는 페이지.
 */

// 사이트 상태 관리와 관련된 의존성.
import LoginManager from "../util/LoginManager";

// 페이지 내비게이션을 위한 의존성.
import { Navigate } from "react-router-dom";

export default function Landing() {
  return LoginManager.isLogined ? <Navigate to="/main" /> : <Navigate to="/login" />
}