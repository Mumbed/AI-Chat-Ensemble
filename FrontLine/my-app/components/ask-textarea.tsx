import React from "react";
import { Textarea, Button } from "@nextui-org/react";
import Sendicon from '@/imgsrc/Send-icon';

export default function App() {
  return (
      <form>
        <Textarea
          label="무엇이든 물어보세요"
          placeholder="이곳에 질문해보세요"
          className="w-[40rem] mb-6"
          endContent={
            <Button type="submit" isIconOnly color="primary" aria-label="Send"> {/* 이 버튼을 눌렀을때 전송*/}
            <Sendicon />
          </Button>
          }
        />
      </form>
  );
}
