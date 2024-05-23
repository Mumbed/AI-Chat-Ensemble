import axios, { AxiosError } from "axios";
import React from "react";
import { redirect } from 'next/navigation';
import { siteConfig } from "@/config/site";

/**
 * @description 서버에 요청을 보내는 객체
 */
const axiosInstance = axios.create({
    baseURL: siteConfig.links.backend,
});
/**
 * @description 데이터를 그대로 복사해서 넘겨주는 함수
 */
const copy = (to: any) => JSON.parse(JSON.stringify(to));

/**
 * @description 서버의 데이터를 가져오거나 설정하는 클래스 
 * @description (이 클래스는 오로지 클라이언트에서의 useEffect 내에서만 정상 작동합니다.)
 */
const DataResource = class {
    /**
     * @description 사용자 계정 관련.
     */
    static Auth = class Auth {
        private static template = {
            isLogined: false,
            name: null,
            email: null,
            rooms: null
        };
        private static buffer = copy(this.template);

        /**
         * @description 이메일과 비밀번호를 가지고 로그인을 시도하는 함수
         */
        static login = async (email: string, password: string) => {
            try {
                const data = await axiosInstance.post("/login/", { email, password });
                localStorage.setItem("token", data.data.tokens.access);
                console.log(data.data.tokens.access)
                return { success: true };
            } catch (e) {
                return { success: false, reason: e };
            }
        }

        /**
         * @description 이름과 이메일, 비밀번호를 가지고 로그인을 시도하는 함수
         */
        static regist = async (name: string, email: string, password: string, verify: string) => {
            try {
                const data = await axiosInstance.post('/register/', { name, email, password, verify });
                localStorage.setItem("token", data.data.tokens.access);
                console.log(data.data.tokens.access);
                return { success: true };
            } catch (e) {
                return { success: false, reason: e };
            }
        }

        /**
         * @description 현재 사용자 정보를 불러오는 함수
         */
        static get = async () => {
            if (this.buffer.isLogined || localStorage.token == null) return this.buffer;
            axiosInstance.defaults.headers['Authorization'] = `Bearer ${localStorage.token}`;
            try {
                const [auth, rooms] = await Promise.all([
                    axiosInstance.get("/get_user_info"),
                    axiosInstance.get('/list_chat_rooms/')
                ]);
                this.buffer.isLogined = true;
                this.buffer.name = auth.data.name
                this.buffer.email = auth.data.email
                this.buffer.rooms = rooms.data.map((room: {
                    chat_room_id: string
                }) => room.chat_room_id)
            } catch (e) {
                console.log(e)
                localStorage.removeItem("token");
                this.buffer = copy(this.template)
                return this.buffer;
            }
            return this.buffer;
        }
    }
}
const DataTools = class {
    private static islogined = false;
    private static username = null;
    private static email = null;
    private static rooms = [];

    static Auth = class Auth {
        static get isLogined() {
            return DataTools.islogined;
        }
        static get username() {
            return DataTools.username;
        }
        static get email() {
            return DataTools.email;
        }
        static login = async (email: string, password: string) => {
            try {
                //const response = await axiosInstance.post('/login/', { email, password });
                //localStorage.setItem("tokens", JSON.stringify(response.data.tokens));
                await DataTools.init();
                return true;
            } catch (e) {
                if (axios.isAxiosError(e)) {
                    if (e.response?.status === 400) {
                        console.log(e.response.data.error);
                    } else {
                        console.error("An unexpected error occurred:", e.message);
                    }
                } else {
                    console.error("An unknown error occurred:", e);
                }
                return false;
            }
        }
        static regist = async (name: string, email: string, password: string, verify: string) => {
            try {
                //const response = await axiosInstance.post('/register/', { name, email, password, verify });
                //localStorage.setItem("tokens", JSON.stringify(response.data.tokens));
                await DataTools.init();
            } catch (e) {
                if (axios.isAxiosError(e)) {
                    if (e.response?.status === 400) {
                        console.log(e.response.data.error);
                    } else {
                        console.error("An unexpected error occurred:", e.message);
                    }
                } else {
                    console.error("An unknown error occurred:", e);
                }
            }
        }
    }
    static Rooms = class Rooms {
        private static roomId = "";
        private static roomdata: [{
            question: string 
            response: string 
            source: string 
        }];
        static get list() {
            return JSON.parse(JSON.stringify(DataTools.rooms));
        }
        static get data() {
            return JSON.parse(JSON.stringify(this.roomdata));
        }

        static syncRoomData = async (roomId: string) => {
            if (roomId == "") return;
            try {
                //const response = await axiosInstance.get(`/fetch_chat_history/${roomId}`);
                //this.roomId = roomId
                //this.roomdata = response.data.map(({question, response, source}: {
                //    question: string 
                //    response: string 
                //    source: string 
                //}) => ({
                //    question: question,
                //    response: response,
                //    source: source
                //}))
            } catch (e) {
                console.log(e);
            }
        }

        static createRoom = () => {
            
        }
        static submitQuestion = async ({question, source}: {
            question: string 
            source: string 
        }) => {
            //const response = await axiosInstance.post(`/chat/${this.roomId}/`, { question, source })
            //this.roomdata.push({
            //    question: response.data.question,
            //    response: response.data.response,
            //    source: source
            //})
        }
    }
    static init = async () => {
        const token = JSON.parse(localStorage.getItem("tokens") ?? "false");
        if (token) {
            //axiosInstance.defaults.headers['Authorization'] = `Bearer ${token.access}`;
            //const [auth, rooms] = await Promise.all([
            //    axiosInstance.get('/get_user_info/'),
            //    axiosInstance.get('/list_chat_rooms/')
            //]).catch(e => {
            //    console.log(e);
            //    localStorage.removeItem("tokens");
            //    window.location.reload();
            //    return [];
            //});
            //this.islogined = true;
            //this.username = auth.data.name;
            //this.email = auth.data.email;
            //this.rooms = rooms.data.map((obj: {
            //    chat_room_id: string
            //}) => obj.chat_room_id);
        }
    }
}
DataTools.init();
const Protecter = ({ children }: {
    children: React.ReactNode
}) => {
    if (!DataTools.Auth.isLogined) redirect("/login");
    return children
};

export { DataResource, Protecter }
