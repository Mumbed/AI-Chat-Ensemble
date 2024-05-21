import React from "react";
import { Card, CardFooter, CardHeader, Button } from "@nextui-org/react";
import Image from "next/image";
import loginEmoji from '@/imgsrc/Login-emoji.gif'; // SignUp 컴포넌트를 import
import NextLink from "next/link";
export default function LoginButton() {
  
  return (
    <div className="">
    <NextLink href="/signup">
      <Card
        isFooterBlurred
        radius="lg"
        className="border-none transform transition-transform duration-300 hover:scale-105"
        isPressable
        >
        <div className="flex justify-center items-center h-[300px] w-[300px]">
           <Image 
            src={loginEmoji}
            alt="Example GIF" 
            width={300} 
            height={300} 
            className="object-cover"
          />
        </div>
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10  justify-center">
        <p className="text-neutral-950 uppercase font-bold">회원가입 하기</p>
        </CardFooter>
      </Card>
      </NextLink>
    </div>
  );
}
