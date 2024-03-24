// 페이지 이동 처리를 의한 위존성.
import { AuthManagement } from "../Management";

// 부분 컴포넌트 의존성.
import RegisterForm from "../component/form/RegisterForm";
import { ProtecterX, SpliterX } from "../component/Container/XContainer";

/**
 * @description 회원가입 페이지.
 * @type {() => React.ReactElement}
 */
export default function Register() {
  // 컴포넌트 반환
  return (
    <ProtecterX query={() => !AuthManagement.isLogined} rejectedRedirect="/question">
      <SpliterX length="1">
        <RegisterForm></RegisterForm>
      </SpliterX>
    </ProtecterX>
  )
}