/**
 * 현재 사용자가 로그인 중인지 아닌지를 판단하는 페이지.
 */

// 사이트 상태 관리와 관련된 의존성.
import { useEffect, useState } from "react";
import LoginManager from "../util/LoginManager";
import LoginButton from "../component/sub/login/LoginButton";

// 리다이렉트 내비게이션을 위한 의존성.
import { Navigate } from "react-router-dom";

export default function Landing() {
  const [logined, changeLoginState] = useState(LoginManager.isLogined);
  
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser && LoginManager.login(currentUser) == 0) changeLoginState(true);
  }, [])

  return logined ? <Navigate to="/main" /> : <Navigate to="/login" />
}