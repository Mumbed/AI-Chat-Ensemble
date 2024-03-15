// 페이지 이동 처리를 의한 위존성.
import { LoginManager } from "../util/UserManager";
import { Navigate } from "react-router-dom";

// 부분 컴포넌트 의존성.
import PageDecoration from "../component/PageDecoration";
import SplitBox from "../component/box/SplitBox";
import RegisterForm from "../component/form/RegisterForm";

/**
 * @description 회원가입 페이지.
 * @type {() => React.ReactElement}
 */
export default function Register() {
  // 컴포넌트 반환
  if (LoginManager.isLogined) return <Navigate to="/main" />
  return (
    <>
      <PageDecoration></PageDecoration>
      <SplitBox>
        <RegisterForm></RegisterForm>
      </SplitBox>
    </>
  )
}