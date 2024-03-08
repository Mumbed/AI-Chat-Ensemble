/**
 * 로그인 입력필드를 구성하는 컴포넌트.
 */

export default function LoginInput({id, label, placeholder}) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      margin: "25px 0px",
      color: "rgba(255, 255, 255, 0.9)"
    }}>
      <label style={{
        fontSize: "14px",
        marginBottom: "4px",
        color: "rgba(255, 255, 255, 0.6)"
      }}>{label}</label>
      <input style={{
        border: "none",
        borderRadius: "10px",
        padding: "10px",
        background: "linear-gradient(45deg, rgba(200, 200, 200, 0.8), rgba(200, 200, 200, 0.1))"
      }} name={id} type={id == "password" ? "password" : "text"} placeholder={placeholder}></input>
    </div>
  )
}