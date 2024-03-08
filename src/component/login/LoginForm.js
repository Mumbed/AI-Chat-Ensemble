/**
 * 로그인 폼 컴포넌트
 */

// 페이지 이동 처리를 위한 위존성.
import LoginManager from "../../util/LoginManager";
import { Link, useNavigate } from "react-router-dom";

// 하단 스낵바 출력을 위한 의존성.
import { useSnackbar } from "notistack";

// 부분 컴포넌트 의존성.
import LoginFormHeader from "./LoginFormHeader";
import LoginFormBody from "./LoginFormBody";
import LoginFooter from "./LoginFooter";

export default function LoginForm() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  let id = "";
  let password = "";
  const submit = e => {
    e.preventDefault();
    LoginManager.login({id, password}) ? navigate("/main") : enqueueSnackbar("이메일 또는 비밀번호가 잘못되었습니다.", { 
      variant: 'error',
    })
  }
  return (
    <form onSubmit={submit}>
      <fieldset> 
        <LoginFormHeader></LoginFormHeader>
        <LoginFormBody></LoginFormBody>
        <LoginFooter></LoginFooter>
      </fieldset>
    </form>
  )
}