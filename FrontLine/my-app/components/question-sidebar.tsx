"use client";

import React, { Dispatch, SetStateAction } from "react";
import { Button } from "@nextui-org/react";
import Trashbutton from "@/components/ask-trash-button";
import { useRouter } from "next/navigation";

type SidebarProps = {
  questions: string[];
  roomid: string;
};

export default function QuestionSidebar({ questions, roomid }: SidebarProps) {
  const router = useRouter();

  const handleQuestionClick = (index: number) => {
    router.push(`/ask/${roomid}#question${index}`);
  };

  return (
    <section className="h-screen fixed left-0 top-0 bg-gray-100 overflow-y-auto mt-16 dark:bg-zinc-800">
      <nav className="mt-6">
        <div className="px-6 py-3 flex flex-col gap-4">
          <div className="flex flex-row gap-2">
            <Button className="w-64" onClick={() => router.push("/ask")}>채팅방 리스트로 이동</Button>
          </div>
          {questions.map((question, index) => (
            <div key={index} className="flex flex-row gap-2">
              <Button className="w-64" onClick={() => handleQuestionClick(index)}>{question}</Button>
              <Trashbutton /> {/* 이 버튼을 눌렀을때 방이 사라지는 기능이 추가 */}
            </div>
          ))}
        </div>
      </nav>
    </section>
  );
}