/**
 * 유저 정보 관련 처리를 관리하는 클래스.
 */

// 서버 연결을 위한 의존성
import axios from "axios";

// 로그인을 처리하는 LoginManager 클래스.
class LoginManager {
    // 현재 로그인 된 유저 토큰.
    static #userUid = null;

    /**
     * @type {(form: FormData) => Promise<Boolean | String>}
     * @description 로그인 시도. 성공하면 true, 실패하면 사유를 담은 문자열을 반환.
     */
    static login = async form => {
        try {
            const { data } = await axios.post(process.env.REACT_APP_BACKEND, form);
            this.#userUid = data;
            return true;
        } catch (e) {
            return e.response.status == 400 ? e.response.data.message : "로그인 서버에 연결할 수 없습니다."
        }
    }

     /**
     * @type {() => Promise<void>}
     * @description 현재 사용자의 로그인 정보를 삭제함.
     */
     static logout = async  () => {
        await axios.post(`${process.env.REACT_APP_BACKEND}/logout`)
        this.#userUid = null;
        return false;
    }

    /**
     * @description 현재 유저가 로그인 되어 있는지의 여부를 반환.
     * @type {() => Boolean}
     */
    static get isLogined() {
        return !!this.#userUid;
    }

    /**
     * @description 현재 유저의 uid 값을 반환. 유저가 로그인 되어 있지 않으면 RangeError를 반환
     * @type {() => Boolean | RangeError}
     */
    static get userUid() {
        if (this.isLogined) 
        return this.isLogined ? this.#userUid : new RangeError("로그인을 먼저 해주세요.");
    }
}




// 회원가입을 처리하는 LoginManager 클래스.
class RegistManager {
    /**
     * @type {(form: FormData) => Promise<Boolean | String>}
     * @description 회원가입 시도. 성공하면 true, 실패하면 사유를 담은 문자열을 반환.
     */
    static regist = async form => {
        if (LoginManager.isLogined) return "이미 로그인 되어 있습니다."
        try {
            let formFetch = {};
            for (let formdata of form.entries()) formFetch[formdata[0]] = formdata[1];
            if (formFetch.password != formFetch.check) return "비밀번호가 일치하지 않습니다.";
            const { data } = await axios.post(`${process.env.REACT_APP_BACKEND}/join/`, formFetch);
            return await LoginManager.login(form);
        } catch (e) {
            return e.response.status == 400 ? e.response.data.message : "로그인 서버에 연결할 수 없습니다."
        }
    }
}
export {LoginManager, RegistManager}