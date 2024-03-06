/**
 * 로그인 폼 컴포넌트
 */

// 페이지 이동 처리를 위한 위존성.
import LoginManager from "../../util/LoginManager";
import { Link, useNavigate } from "react-router-dom";

// 하단 스낵바 출력을 위한 의존성.
import { useSnackbar } from "notistack";

// LoginForm의 조각 컴포넌트
import LoginTitle from "./LoginTitle";
import LoginInput from "./LoginInput";

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
        <LoginTitle></LoginTitle>
        <LoginInput id="email" label="Username" placeholder="Enter your email." onchange={e => id = e.target.value}></LoginInput>
        <LoginInput id="password" label="Password" placeholder="Enter your password." onchange={e => password = e.target.value}></LoginInput>
        <Link style={{
          fontSize: "14px",
          flexDirection: "row-reverse",
          top: "-20px",
          color: "rgba(255, 255, 255, 0.6)"
        }} to="/forgot">Forgot Password?</Link>
        <input style={{
          width: "100%",
          cursor: "pointer",
          background: "rgb(60, 144, 255)",
          border: "none",
          borderRadius: "10px",
          marginTop: "20px",
          padding: "10px"
        }} type="submit"></input>
        <span style={{
          display: "block",
          width: "100%",
          color: "rgba(255, 255, 255, 0.6)",
          textAlign: "center",
          marginTop: "10px"
        }}>처음이신가요? <Link style={{
          display: "inline"
        }} to="/register">회원가입</Link>하기</span>
      </fieldset>
    </form>
  )
}