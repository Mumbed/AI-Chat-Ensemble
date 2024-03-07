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
    
    // 현재 로그인 된 유저 정보. (외부에선 열람 불가)
    static #currentUser = {
        id: null,
        password: null
    }

    /**
     * @type {() => Boolean}
     * @description 현재 사이트에 성공적으로 로그인 되어 있는지의 여부를 반환.
     */
    static get isLogined() {
        const userInfo = this.#currentUser;
        return (userInfo.id && userInfo.password);
    }

    /**
     * @type {(id: string, dataset: string) => Boolean}
     * @description 로그인 성공 여부에 따라 1은 성공, 0은 실패.
     */
    static login({id, password}) {
        for (let data of sample.list) {
            if (data.id == id) {
                if (data.password == password) {
                    [this.#currentUser.id, this.#currentUser.password] = [id, password];
                    localStorage.setItem("currentUser", JSON.stringify(this.#currentUser));
                    return 1;
                } else return 0;
            }
        }
        return 0;
    }

    /**
     * @type {() => false}
     * @description 현재 사용자의 로그인 정보를 삭제하고, false를 리턴.
     */
    static logout() {
        this.#currentUser = {
            id: null,
            password: null
        }
        localStorage.removeItem("currentUser");
        return false;
    }
}