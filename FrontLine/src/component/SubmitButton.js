/**
 * 폼 요소를 제출하는 컴포넌트.
 */

/**
 * @type {(props: {text: string}) => React.ReactElement}
 */
export default function SubmitButton({text}) {
  // 컴포넌트 반환
  return (
    <input style={{
      width: "100%",
      cursor: "pointer",
      background: "rgb(60, 144, 255)",
      border: "none",
      borderRadius: "10px",
      marginTop: "20px",
      padding: "10px"
    }} type="submit" value={text}></input>
  )
}