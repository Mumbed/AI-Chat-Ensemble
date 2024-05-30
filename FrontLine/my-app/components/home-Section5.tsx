import React from 'react';
import {Button } from "@nextui-org/react";
import avatar from "@/imgsrc/home-footer.png";
import { title } from "@/components/primitives";
import NextLink from "next/link";
const App = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen"> 
     <p className = "text-4xl font-bold">AI 다중 답변 서비스 ACE</p>
     <p className = "text-4xl font-bold">바로 시작해 보세요</p>
        <div className="mt-44">
        <NextLink
                href="/ask">
        <Button color="primary"
        size='lg'>
            시작하기
        </Button>
        </NextLink>
        </div>
    </div>
  );
};

export default App;
