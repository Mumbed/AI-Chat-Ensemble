"use client"

import DataResource from "@/app/DataResource";
import AnswerBox from "@/components/ask-AnswerBox";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function QuestionPage() {
    const router = useRouter();
    const param = useParams();
    const roomId = param.roomid as string;
    const [roomDatas, setRoomDatas] = useState([] as {question: string, response: {gpt: string | undefined, gemini: string | undefined}}[]);
  
    useEffect(() => {
      const roomAsync = async () => {
        const userDataResource = await DataResource.Auth.get();
        if (!userDataResource.isLogined) router.push('/login');
        
        else {
          const roomDataSource = await DataResource.Room.get(roomId);
		      if (!roomDataSource.success) router.push('/login');

          setRoomDatas(roomDataSource.data);
          //setGptResponse(roomDataSource.data[questionNum].response.gpt ?? "");
          //setGeminiResponse(roomDataSource.data[questionNum].response.gemini ?? "");
        }
      };
      roomAsync();
    }, []);
    
    return (
      <div className="flex flex-col min-h-screen p-4">
        {roomDatas.map((roomData, index) => (
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
        ))}
      </div>
    );
}