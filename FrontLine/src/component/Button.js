/**
 * @description 버튼 관련 컴포넌트.
 * @type {(props: {text: string, color?: String[], autoScale?: Boolean, canSubmit?: Boolean, onClick?: Function}) => React.ReactElement}
 */
export default function Button({text, color=["black", "dodgerblue"], autoScale=true, canSubmit=false, onClick}) {
  // 컴포넌트 반환
  return (
    <input style={{
      width: autoScale? "100%" : null,
      color: color[0],
      background: color[1],
    }} type={canSubmit? "submit" : "button"} value={text} onClick={onClick}></input>
  )
}