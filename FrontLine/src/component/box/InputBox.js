/**
 * 입력필드를 구성하는 컴포넌트.
 */

/**
 * @type {(props: {name: string, placeholder: string}) => React.ReactElement}
 */
export default function InputBox({name, placeholder}) {
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
      }}>{name.charAt(0).toUpperCase() + name.slice(1)}</label>
      <input style={{
        border: "none",
        borderRadius: "10px",
        padding: "10px",
        background: "linear-gradient(45deg, rgba(200, 200, 200, 0.8), rgba(200, 200, 200, 0.1))"
      }} required={true} name={name.split(" ")[0]} type={name.includes("password") ? "password" : "text"} placeholder={placeholder}></input>
    </div>
  )
}