"use client";
import React from "react";
import {Button, ButtonGroup} from "@nextui-org/react";
type Room = string; // rooms 배열 요소의 타입과 일치시키기

type SidebarProps = {
  rooms: Room[];
};

export default function AskSidebar({ rooms }: SidebarProps) {
  return (
    <section className="h-screen w-[22rem] fixed left-0 top-0 bg-gray-100 overflow-y-auto mt-16">
    <nav className="mt-6">
    <div className="px-6 py-3">
          {rooms.map((room, index) => (
            <Button key={index} className="w-full mb-2">
              {room}
            </Button>
          ))}
        </div>
    </nav>
  </section>
  );
}
