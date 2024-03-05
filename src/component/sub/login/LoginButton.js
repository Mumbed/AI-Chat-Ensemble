/**
 * 로그인 처리를 하는 버튼.
 */

// 로그인 정보 처리와 관련된 의존성.
import LoginManager from "../../../util/LoginManager";

// 스낵바를 생성하기 위한 위존성.
import { useSnackbar } from 'notistack'

/**
 * @type {(id: string, password: string, action: Function, name: string) => Input}
 * @description 로그인 처리를 담당하는 버튼. action 안의 매개변수로는, 로그인이 성공하면 1, 실패하면 0이 들어감.
 */
export default function LoginButton({id, password, action, name = "Login"}) {
    const { enqueueSnackbar } = useSnackbar();
    const tryLogin = () => {
        const isSuccessedLogin = LoginManager.login({id, password});
        switch (isSuccessedLogin) {
            case 1:
                enqueueSnackbar("비밀번호가 일치하지 않습니다.", { 
                    variant: 'error',
                });
                action(false);
                break;
            case 2:
                enqueueSnackbar("해당 아이디는 존재하지 않습니다.", { 
                    variant: 'error',
                });
                action(false);
                break;
            default:
                action(true);
                break;
        }
    }
    return <input type="button" value={name} onClick={tryLogin}></input>
}