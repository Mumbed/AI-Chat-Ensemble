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
  const submit = async e => {
    e.preventDefault();
    const loginStatus = await LoginManager.login(new FormData(e.target))
    console.log(loginStatus)
    loginStatus == true ? navigate("/main") : enqueueSnackbar(loginStatus, { 
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