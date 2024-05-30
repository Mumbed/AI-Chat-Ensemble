"use client";

import DataResource from "@/app/DataResource";
import AnswerBox from "@/components/ask-AnswerBox";
import { useParams, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { RoomContext } from "../layout";

export default function QuestionPage() {
    const router = useRouter();
    const param = useParams();
    const roomId = param.roomid as string;
    const [roomDatas, setRoomDatas] = useState([] as {question: string, response: {gpt: string | undefined, gemini: string | undefined}}[]);
    const [isLoading, setIsLoading] = useState(true);
    let refreshState = useContext(RoomContext);

    useEffect(() => {
        const roomAsync = async () => {
            const userDataResource = await DataResource.Auth.get();
            if (!userDataResource.isLogined) {
                router.push('/login');
            } else {
                const roomDataSource = await DataResource.Room.get(roomId);
                if (!roomDataSource.success) {
                    router.push('/login');
                } else {
                    setRoomDatas(roomDataSource.data);
                    setIsLoading(false); // 데이터 로드 완료 후 로딩 상태를 false로 설정
                }
            }
        };
        roomAsync();
    }, [refreshState]);

    return (
        <div className="flex flex-col min-h-screen p-4">
            {isLoading ? (
                <p className="text-center">로딩중...</p> // 로딩중일 때 표시할 텍스트
            ) : (
                roomDatas.map((roomData, index) => (
                    <div key={index} className="mb-8 flex flex-col items-end relative">
                        <p
                            id={`question${index}`}
                            className="mb-4 bg-blue-500 text-white p-2 rounded-lg inline-block"
                        >
                            {roomData.question}
                        </p>
                        <div className="flex flex-row gap-4 w-full ml-4 mt-4">
                            <AnswerBox aiSource="gpt" aiResponse={roomData.response.gpt ?? ""} />
                            <AnswerBox aiSource="gemini" aiResponse={roomData.response.gemini ?? ""} />
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
