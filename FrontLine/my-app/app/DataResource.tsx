import axios from "axios";
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
export default class DataResource {
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
                axiosInstance.defaults.headers['Authorization'] = null;
                const data = await axiosInstance.post("/login/", { email, password });
                localStorage.setItem("token", data.data.tokens.access);
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
                axiosInstance.defaults.headers['Authorization'] = null;
                const data = await axiosInstance.post('/register/', { name, email, password, verify });
                localStorage.setItem("token", data.data.tokens.access);
                return { success: true };
            } catch (e) {
                return { success: false, reason: e };
            }
        }

        /**
         * @description 현재 사용자 정보를 불러오는 함수
         */
        static get = async () => {
            if (localStorage.token == "") return this.buffer;
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
                localStorage.removeItem("token");
                this.buffer = copy(this.template)
                return this.buffer;
            }
            return this.buffer;
        }
    }

    /**
     * 채팅방 데이터 관련
     */
    static Room = class Room {
        static createRoom = async () => {
            try {
                const result = await axiosInstance.post("/createRoom/");
                return { success: true, roomid: result.data.chat_room_id, allRooms: (await DataResource.Auth.get()).rooms }
            } catch (e) {
                DataResource.Auth.get();
                return { success: false, reason: e };
            }
        }
        static submitQuestion = async ({ roomid, question } : {
            roomid: string,
            question: string
        }) => {
            try {
                await Promise.allSettled([
                    axiosInstance.post(`/chat/${roomid}/`, { question, source: "gpt" }),
                    axiosInstance.post(`/chat/${roomid}/`, { question, source: "gemini" })
                ])
                return { success: true, data: (await this.get(roomid)).data };
            } catch (e) {
                DataResource.Auth.get();
                return { success: false, reason: e };
            }
        }

        static get = async (roomId: string) => {
            try {
                const chatlist = await axiosInstance.get(`/fetch_chat_history/${roomId}`);
                return { success: true, data: chatlist.data.reduce((acc: {
                    question: string;
                    response: {
                        [source: string]: string;
                    };
                }[], chat: {
                    id: number;
                    question: string;
                    response: string;
                    source: string;
                    user_id: number;
                }) => {
                    const { question, response, source } = chat;
                    let transformedItem = acc.find(item => item.question === question);
                    if (!transformedItem) {
                        transformedItem = {
                            question,
                            response: {}
                        };
                        acc.push(transformedItem);
                    }
                    transformedItem.response[source] = response;
                    return acc;
                }, []).slice(1) };
            } catch (e) {
                DataResource.Auth.get();
                return { success: false, reason: e };
            }
        }
    }
}
