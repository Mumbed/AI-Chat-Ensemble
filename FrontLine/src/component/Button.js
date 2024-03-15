/**
 * @description 폼 전송 버튼 컴포넌트.
 * @type {(props: {text: string, color?: String[], autoScale?: Boolean, canSubmit?: Boolean, onClick: f}) => React.ReactElement}
 */
export default function Button({text, color=["black", "dodgerblue"], autoScale=true, canSubmit=false, onClick}) {
  // 컴포넌트 반환
  return (
    <input style={{
      textAlign: "center",
      width: autoScale? "100%" : null,
      cursor: "pointer",
      color: color[0],
      background: color[1],
      border: "none",
      borderRadius: "10px",
      marginTop: "20px",
      padding: "10px 40px"
    }} type={canSubmit? "submit" : "button"} value={text} onClick={onClick}></input>
  )
}