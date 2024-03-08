/**
 * 로그인 화면 본문 컴포넌트. 
 */

// 페이지 이동 처리를 의한 위존성.
import { Link } from "react-router-dom";

// 부분 컴포넌트 의존성.
import LoginInput from "./LoginInput"

export default function LoginFormBody() {
  return (
    <>
      <LoginInput id="email" label="Username" placeholder="Enter your email."></LoginInput>
      <LoginInput id="password" label="Password" placeholder="Enter your password."></LoginInput>
      <Link style={{
        fontSize: "14px",
        flexDirection: "row-reverse",
        top: "-20px",
        color: "rgba(255, 255, 255, 0.6)"
      }} to="/forgot">Forgot Password?</Link>
    </>
  )
}