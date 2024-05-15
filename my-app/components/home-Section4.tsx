"use client";
import React, { useState } from "react";
import {Card, CardBody} from "@nextui-org/react";
import { title } from "@/components/primitives";
import HomeTextAnimation from "./home-text-animation";
export default function HomeSection3() {
  return (
    <div className = "flex flex-row items-center">
      <div className = "mr-16">
      <div className = "flex flex-col items-center justify-center mb-32">
        <p className = "text-4xl font-bold">어려운<br></br>
        <span className={title({ color: "violet" })}>프롬프트 엔지니어링 </span>
        <br></br><span className = "text-sky-500">ACE</span>에서 쉽게 시작해보세요.</p>
        </div>
      </div>
      <div>
      <Card className = "bg-gray-100 min-h-[45rem] w-[35rem]">
        <CardBody>
          <HomeTextAnimation />
        </CardBody>
      </Card>
      </div>
    </div>
  );
}
