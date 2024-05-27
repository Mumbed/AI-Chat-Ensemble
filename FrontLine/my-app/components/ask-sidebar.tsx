"use client";

import React, { Dispatch, SetStateAction } from "react";
import { Button } from "@nextui-org/react";
import Trashbutton from "@/components/ask-trash-button";
import { useRouter } from "next/navigation";

type Room = string;

type SidebarProps = {
  rooms: Room[],
  stateCallback: React.Dispatch<React.SetStateAction<string[]>>
};

export default function AskSidebar({ rooms, stateCallback }: SidebarProps) {
  const router = useRouter();

  return (
    <section className="h-screen fixed left-0 top-0 bg-gray-100 overflow-y-auto mt-16 dark:bg-zinc-800 ">
      <nav className="mt-6">
        <div className="px-6 py-3 flex flex-col gap-4">
            {rooms.map((room, index) => (
              <div key={index} className="flex flex-row gap-2">
                <Button onClick={() => router.push(`/ask/${room}`)} className="w-64">{room}</Button>
                <Trashbutton id={room} stateCallback={stateCallback} /> {/* 이 버튼을 눌렀을때 방이 사라지는 기능이 추가*/}
              </div>
            ))}
        </div>
      </nav>
    </section>
  );
}
