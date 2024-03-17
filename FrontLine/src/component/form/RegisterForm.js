// 페이지 이동 처리를 위한 위존성.
import { RegistManager } from "../../util/UserManager";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// 하단 스낵바 출력을 위한 의존성.
import { useSnackbar } from "notistack";

// 부분 컴포넌트 의존성.
import { InputX, ButtonX } from "../Container/XContainer";

/**
 * @type {() => React.ReactElement}
 */
function RegisterFormHeader() {
  // 컴포넌트 반환
  return (
    <h1 style={{
      lineHeight: "42px"
    }}>회원가입</h1>
  )
}

/**
 * @type {() => React.ReactElement}
 */
function RegisterFormBody() {
  // 컴포넌트 반환
  return (
    <>
      <InputX name="name" placeholder="Enter your name."></InputX>
      <InputX name="email" placeholder="Enter your name."></InputX>
      <InputX name="password" placeholder="Enter your name."></InputX>
      <InputX name="check password" placeholder="Enter your name."></InputX>
      <ButtonX text="회원가입" canSubmit={true}></ButtonX>
    </>
  )
}

/**
 * @type {() => React.ReactElement}
 */
function RegisterFormFooter() {
  // 컴포넌트 반환
  return (
    <span style={{
      display: "block",
      width: "100%",
      color: "rgba(255, 255, 255, 0.6)",
      textAlign: "center",
      marginTop: "10px"
    }}>이미 계정이 있으신가요? <Link style={{
      display: "inline"
    }} to="/login">Log in</Link></span>
  )
}

/**
 * @description 회원가입 폼 컴포넌트.
 * @type {() => React.ReactElement}
 */
export default function RegisterForm() {
  // 컴포넌트 처리
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const submit = async e => {
    e.preventDefault();
    const status = await RegistManager.regist(new FormData(e.target))
    status == true ? navigate("/main") : enqueueSnackbar(status, { 
      variant: 'error',
    })
  }

  // 컴포넌트 반환
  return (
    <form onSubmit={submit}>
      <fieldset style={{
        background: "none"
      }}> 
        <RegisterFormHeader></RegisterFormHeader>
        <RegisterFormBody></RegisterFormBody>
        <RegisterFormFooter></RegisterFormFooter>
      </fieldset>
    </form>
  )
}