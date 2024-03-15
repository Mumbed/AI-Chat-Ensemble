// 부분 컴포넌트 의존성.
import * as Container from "../component/IndexContainer";

/**
 * @description 초기 화면 페이지.
 * @type {() => React.ReactElement}
 */
export default function Index() {
  return (
    <>
      <Container.Introduction></Container.Introduction>
      <Container.Example></Container.Example>
    </>
  )
}