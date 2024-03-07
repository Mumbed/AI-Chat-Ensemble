/**
 * 사용자가 로그인 하게 될 페이지.
 */

// 페이지 이동 처리를 의한 위존성.
import LoginManager from "../util/LoginManager";
import { Link, Navigate } from "react-router-dom";

// 로그인 페이지를 구성하는 컴포넌트 의존성.
import LoginDecoration from "../component/login/LoginDecoration";
import SplitBox from "../component/SplitBox";
import LoginForm from "../component/login/LoginForm";

export default function Login() {
  if (LoginManager.isLogined) return <Navigate to="/main" />
  return (
    <>
      <LoginDecoration></LoginDecoration>
      <SplitBox>
        <img src="img/dog.png"></img>
        <LoginForm></LoginForm>
      </SplitBox>
    </>
  )
}