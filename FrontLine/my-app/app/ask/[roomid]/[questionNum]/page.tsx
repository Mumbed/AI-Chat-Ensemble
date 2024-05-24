"use client"

import DataResource from "@/app/DataResource";
import AnswerBox from "@/components/ask-AnswerBox";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function QuestionPage() {
    const router = useRouter();
    const param = useParams();
    const questionNum = parseInt(param.questionNum as string);
    const [gptResponse, setGptResponse] = useState("");
    const [geminiResponse, setGeminiResponse] = useState("");
  
    useEffect(() => {
      const roomAsync = async () => {
        const userDataResource = await DataResource.Auth.get();
        if (!userDataResource.isLogined) router.push('/login');
        
        else {
          const roomDataSource = await DataResource.Room.get(param.roomid as string);
		      if (!roomDataSource.success) router.push('/login');

          setGptResponse(roomDataSource.data[questionNum].response.gpt ?? "");
          setGeminiResponse(roomDataSource.data[questionNum].response.gemini ?? "");
        }
      };
      roomAsync();
    }, []);
    return (
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-row gap-8">
            <AnswerBox aiSource="gpt" aiResponse={gptResponse} />
            <AnswerBox aiSource="gemini" aiResponse={geminiResponse} />
        </div>
      </div>
    );
}