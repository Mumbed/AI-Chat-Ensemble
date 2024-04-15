// 필요한 모듈 및 컴포넌트 import
import { AuthManagement } from "../../util/Management";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";
import { ButtonX, InputX } from "../Container/XContainer";

// 로그인 폼의 헤더 컴포넌트
function LoginFormHeader() {
  return (
    <>
      <legend style={{
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

// 로그인 폼의 바디 컴포넌트
function LoginFormBody() {
  return (
    <>
      <InputX name="email" placeholder="Enter your email" type="email"></InputX>
      <InputX name="password" placeholder="Enter your password" type="password"></InputX>
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

// 로그인 폼의 푸터 컴포넌트
function LoginFormFooter() {
  return (
    <span style={{
      display: "block",
      width: "100%",
      textAlign: "center",
      marginTop: "10px"
    }}>처음이신가요? <Link to="/register">회원가입</Link>하기</span>
  )
}

// 로그인 폼 메인 컴포넌트
export default function LoginForm() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    const loginSuccess = await AuthManagement.login(email, password);
    if (loginSuccess) {
      navigate("/question");
    } else {
      enqueueSnackbar("이메일이나 비밀번호가 일치하지 않습니다.", { variant: 'error' });
    }
  }

  return (
    <form onSubmit={submit}>
      <fieldset>
        <LoginFormHeader />
        <LoginFormBody />
        <LoginFormFooter />
      </fieldset>
    </form>
  )
}
