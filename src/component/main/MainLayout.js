/**
 * 헤더 바 등을 포함한 메인 레이아웃.
 */

import Header from "./Header";

export default function MainLayout(props) {
  return (
    <>
      <Header currentPage={props.page}></Header>
      {props.children}
    </>
  )
}