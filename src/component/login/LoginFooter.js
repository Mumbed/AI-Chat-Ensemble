/**
 * 로그인 화면 하단 컴포넌트. 
 */

// 페이지 이동 처리를 의한 위존성.
import { Link } from "react-router-dom";

export default function LoginFooter() {
  return (
    <>
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
    </>
  )
}