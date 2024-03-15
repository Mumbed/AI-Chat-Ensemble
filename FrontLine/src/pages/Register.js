/**
 * 사용자가 회원가입 하게 될 페이지.
 */

// 페이지 이동 처리를 의한 위존성.
import { LoginManager } from "../util/UserManager";
import { Navigate } from "react-router-dom";

// 로그인 페이지를 구성하는 컴포넌트 의존성.
import DecoratePage from "../component/DecoratePage";
import InputBox from "../component/box/InputBox"
import SplitBox from "../component/box/SplitBox";
import RegisterForm from "../component/form/RegisterForm";

/**
 * @type {() => React.ReactElement}
 */
export default function Register() {
  // 컴포넌트 반환
  if (LoginManager.isLogined) return <Navigate to="/main" />
  return (
    <>
      <DecoratePage></DecoratePage>
      <SplitBox>
        <RegisterForm></RegisterForm>
      </SplitBox>
    </>
  )
}