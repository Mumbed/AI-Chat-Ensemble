// 페이지 이동 처리를 의한 위존성.
import { LoginManager } from "../util/UserManager";
import { Navigate } from "react-router-dom";

// 부분 컴포넌트 의존성.
import LoginForm from "../component/form/LoginForm";
import { SplitFieldX } from "../component/Container/XContainer";

/**
 * @description 로그인 페이지.
 * @type {() => React.ReactElement}
 */
export default function Login() {
  // 컴포넌트 반환
  if (LoginManager.isLogined) return <Navigate to="/main" />
  return (
    <SplitFieldX length="2">
      <LoginForm></LoginForm>
      <img src="img/dog.png"></img>
    </SplitFieldX>
  )
}