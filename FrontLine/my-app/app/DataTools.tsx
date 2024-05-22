'use client' 

import axios from "axios";
import React from "react";
import { redirect } from 'next/navigation';
import { siteConfig } from "@/config/site";

const axiosInstance = axios.create({
    baseURL: siteConfig.links.backend,
});
const DataResource = class {
    private static userInfoResource;
    static get userInfo() {
        if (this.userInfoResource) return this.userInfoResource;
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
                const response = await axiosInstance.post('/login/', { email, password });
                localStorage.setItem("tokens", JSON.stringify(response.data.tokens));
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
                const response = await axiosInstance.post('/register/', { name, email, password, verify });
                localStorage.setItem("tokens", JSON.stringify(response.data.tokens));
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
                const response = await axiosInstance.get(`/fetch_chat_history/${roomId}`);
                this.roomId = roomId
                this.roomdata = response.data.map(({question, response, source}: {
                    question: string 
                    response: string 
                    source: string 
                }) => ({
                    question: question,
                    response: response,
                    source: source
                }))
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
            const response = await axiosInstance.post(`/chat/${this.roomId}/`, { question, source })
            this.roomdata.push({
                question: response.data.question,
                response: response.data.response,
                source: source
            })
        }
    }
    static init = async () => {
        const token = JSON.parse(localStorage.getItem("tokens") ?? "false");
        if (token) {
            axiosInstance.defaults.headers['Authorization'] = `Bearer ${token.access}`;
            const [auth, rooms] = await Promise.all([
                axiosInstance.get('/get_user_info/'),
                axiosInstance.get('/list_chat_rooms/')
            ]).catch(e => {
                console.log(e);
                localStorage.removeItem("tokens");
                window.location.reload();
                return [];
            });
            this.islogined = true;
            this.username = auth.data.name;
            this.email = auth.data.email;
            this.rooms = rooms.data.map((obj: {
                chat_room_id: string
            }) => obj.chat_room_id);
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

export { DataTools, Protecter }
