/**
 * 사용자가 로그인 하게 될 페이지.
 */

export default function Login() {
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
        background: "rgba(255, 255, 255, 0.3)",
        borderRadius: "100px"
      }}></div>
      <div style={{
        position: "absolute",
        width: "280px",
        height: "280px",
        top: "-80px",
        right: "-80px",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        borderRadius: "50%",
      }}></div>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        width: "90%",
        position: "absolute",
        top: "70px",
        left: "80px",
      }}>
        <img style={{
          position: "relative",
          width: "500px",
          height: "570px",
        }} src="img/dog.png"></img>
        <fieldset style={{
          position: "relative",
          width: "500px",
          height: "570px",
        }}></fieldset>
      </div>
    </>
  )
}