/**
 * 사용자가 로그인 하게 될 페이지.
 */

// 사이트 로그인 상태와 관련된 의존성.
import LoginManager from "../util/LoginManager";

export default function Login() {
  if (LoginManager.isLogined) return <Navigate to="/main" />
  return (
    <>
      <div style ={{
        position: "absolute",
        width: "280px",
        height: "180px",
        top: "-80px",
        left: "0px",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        borderRadius: "50%",
        transform: "rotate(-8deg)"
      }}></div>
      <div style ={{
        position: "absolute",
        width: "120px",
        height: "120px",
        top: "-60px",
        left: "calc(50% - 60px)",
        background: "rgba(255, 255, 255, 0.25)",
        borderRadius: "100px"
      }}></div>
      <div style={{
        position: "absolute",
        width: "280px",
        height: "280px",
        top: "-80px",
        right: "-80px",
        border: "1px solid rgba(255, 255, 255, 0.25)",
        borderRadius: "50%",
      }}></div>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        width: "90%",
        top: "70px",
        left: "80px",
      }}>
        <img style={{
          width: "500px",
          height: "570px",
        }} src="img/dog.png"></img>
        <fieldset>
          <legend style ={{
            top: "40px",
            fontFamily: "math",
            fontSize: "xxx-large"
          }}>Login</legend>
          <hr style={{
            width: "150px",
            borderColor: "rgba(200, 200, 200, 0.5)"
          }}></hr>
          <p style={{
            fontSize: "24px",
            display: "inline"
          }}>ACE에 오신걸 환영합니다.</p>
        </fieldset>
      </div>
    </>
  )
}