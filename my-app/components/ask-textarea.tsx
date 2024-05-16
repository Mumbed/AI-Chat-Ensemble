import React from "react";
import {Textarea} from "@nextui-org/react";

export default function App() {
  return (
    <Textarea
      label="무엇이든 물어보세요"
      placeholder="이곳에 질문해보세요"
      className="w-[40rem] mb-6"
    />
  );
}
