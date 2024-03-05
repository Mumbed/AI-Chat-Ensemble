/**
 * 가장 초기에 보여지게 될 사이트 메인 페이지.
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

  if (logined) {
    return (
      <div></div>
    )
  } else {
    return <LoginButton id="hello@gmail.com" password="a12345" action={changeLoginState}></LoginButton>
  }
}