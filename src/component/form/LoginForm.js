// 페이지 이동 처리를 위한 위존성.
import { LoginManager } from "../../util/UserManager";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// 하단 스낵바 출력을 위한 의존성.
import { useSnackbar } from "notistack";

// 부분 컴포넌트 의존성.
import { ButtonX, InputX } from "../Container/XContainer";

/**
 * @type {() => React.ReactElement}
 */
function LoginFormHeader() {
  // 컴포넌트 반환
  return (
    <>
      <legend style ={{
        top: "40px",
        width: "100%",
        color: "slateblue",
        textAlign: "center",
        fontSize: "xxx-large",
        fontWeight: "600"
      }}>WELCOME BACK</legend>
      <p style={{
        display: "inline-block",
        width: "100%",
        color: "rgba(150, 150, 150, 0.5)",
        textAlign: "center",
        fontSize: "18px",
      }}>ACE에 오신걸 환영합니다.</p>
    </>
  )
}

/**
 * @type {() => React.ReactElement}
 */
function LoginFormBody() {
  // 컴포넌트 반환
  return (
    <>
      <InputX name="email" placeholder="Enter your email."></InputX>
      <InputX name="password" placeholder="Enter your password."></InputX>
      <Link style={{
        fontSize: "14px",
        flexDirection: "row-reverse",
        top: "-20px",
        color: "rgba(255, 255, 255, 0.6)"
      }} to="/forgot">Forgot Password?</Link>
      <ButtonX text="로그인" canSubmit={true}></ButtonX>
    </>
  )
}

/**
 * @type {() => React.ReactElement}
 */
function LoginFormFooter() {
  // 컴포넌트 반환
  return (
    <span style={{
      display: "block",
      width: "100%",
      color: "rgba(255, 255, 255, 0.6)",
      textAlign: "center",
      marginTop: "10px"
    }}>처음이신가요? <Link style={{
      display: "inline"
    }} to="/register">회원가입</Link>하기</span>
  )
}

/**
 * @description 로그인 폼 컴포넌트.
 * @type {() => React.ReactElement}
 */
export default function LoginForm() {
  // 컴포넌트 처리
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const submit = async e => {
    e.preventDefault();
    const status = await LoginManager.login(new FormData(e.target))
    status == true ? navigate("/main") : enqueueSnackbar(status, { 
      variant: 'error',
    })
  }

  // 컴포넌트 반환
  return (
    <form onSubmit={submit}>
      <fieldset> 
        <LoginFormHeader></LoginFormHeader>
        <LoginFormBody></LoginFormBody>
        <LoginFormFooter></LoginFormFooter>
      </fieldset>
    </form>
  )
}