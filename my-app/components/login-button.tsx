import React from "react";
import { Card, CardFooter, CardHeader, Button } from "@nextui-org/react";
import SignUp from '@/imgsrc/login-signup-icon'; // SignUp 컴포넌트를 import

export default function LoginButton() {
  return (
    <div className="">
      <Card
        isFooterBlurred
        radius="lg"
        className="border-none transform transition-transform duration-300 hover:scale-105"
        isPressable
        ><CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-neutral-950 uppercase font-bold dark:text-neutral-50">ACE가 처음이신가요?</p>
        </CardHeader>
        <div className="flex justify-center items-center h-[300px] w-[300px]">
          <SignUp />
        </div>
      </Card>
    </div>
  );
}
