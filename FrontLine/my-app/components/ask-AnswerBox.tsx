"use client";

import { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
import { marked } from "marked";
import gptImage from '@/imgsrc/ChatGPT_logo.png';
import geminiImage from '@/imgsrc/google-gemini-icon.png';

interface AnswerBoxProps {
  aiSource: string;
  aiResponse: string;
}

export default function AnswerBox({ aiSource, aiResponse }: AnswerBoxProps) {
  let avatarSrc;
  if (aiSource === "gpt") {
    avatarSrc = gptImage.src;
  } else if (aiSource === "gemini") {
    avatarSrc = geminiImage.src;
  } else {
    avatarSrc = "https://nextui.org/avatars/avatar-1.png";
  }
  // aiSource의 값이 "gpt"인 경우 "gpt.png", "gemini"인 경우 "gemini.png"를 적용

  return (
    <Card className="w-96">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src={avatarSrc} />
          <div className="flex flex-col gap-1 items-start justify-center mb-3">
            <h4 className="text-small font-semibold leading-none text-default-600">{aiSource}</h4>
          </div>
        </div>
      </CardHeader>
      <CardBody dangerouslySetInnerHTML={{ __html: marked(aiResponse) }} className="px-3 py-0 text-small mb-10 text-zinc-950 dark:text-neutral-50">
      </CardBody>
    </Card>
  );
}
