/**
 * @description 두 컴포넌트를 나눠서 보여주는 컴포넌트.
 * @type {() => React.ReactElement}
 */
export default function SplitBox(props) {
  // 컴포넌트 반환
  return <div className="split_box">{props.children}</div>
}