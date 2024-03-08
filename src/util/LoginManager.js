/**
 * 사이트의 로그인 관련 처리를 관리하는 클래스.
 */

// 현재 서버상에 등록된 유저 정보
const sample = {
    list: [
        {id: "hello@gmail.com", password:  "a12345"},
        {id: "kity@gmail.com", password:  "b56789"}
    ]
}

// 사이트 Login 정보를 관리하는 LoginManager 클래스.
export default class LoginManager {
    
    // 현재 로그인 된 유저 토큰. (외부에선 열람 불가)
    static #currentUser = null;

    /**
     * @type {() => Boolean}
     * @description 현재 사이트에 성공적으로 로그인 되어 있는지의 여부를 반환.
     */
    static get isLogined() {
        return typeof this.#currentUser == "stirng"
    }

    /**
     * @type {(formdata: FormData) => Promise<Boolean | String>}
     * @description 로그인 시도. 성공하면 true, 실패하면 사유를 담은 문자열을 반환.
     */
    static async login(formdata) {
        try {
            const { data } = await axios.post(process.env.REACT_APP_BACKEND, formdata);
            this.#currentUser = data;
            return true;
        } catch (e) {
            return e.response.data.message
        }
    }

    /**
     * @type {() => false}
     * @description 현재 사용자의 로그인 정보를 삭제하고, false를 리턴.
     */
    static logout() {
        this.#currentUser = null;
        localStorage.removeItem("currentUser");
        return false;
    }
}