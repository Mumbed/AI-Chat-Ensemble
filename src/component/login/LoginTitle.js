/**
 * 로그인 창을 꾸며주는 컴포넌트. 
 */

export default function LoginTitle() {
  return (
    <>
      <legend style ={{
        top: "40px",
        fontFamily: "math",
        fontSize: "xxx-large"
      }}>Login</legend>
      <hr style={{
        width: "150px",
        borderColor: "rgba(200, 200, 200, 0.6)"
      }}></hr>
      <p style={{
        fontSize: "20px",
        display: "inline"
      }}>ACE에 오신걸 환영합니다.</p>
    </>
  ) 
}