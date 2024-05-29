"use client";

import { useState } from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";
import { marked } from "marked";

interface AnswerBoxProps {
  aiSource: string;
  aiResponse: string;
}

export default function AnswerBox({ aiSource, aiResponse }: AnswerBoxProps) {
  return (
    <Card className="w-96">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="https://nextui.org/avatars/avatar-1.png" />
          <div className="flex flex-col gap-1 items-start justify-center mb-3">
            <h4 className="text-small font-semibold leading-none text-default-600">{aiSource}</h4>
            <h5 className="text-small tracking-tight text-default-400">프롬프트 적용중</h5> {/* 변경가능 */}
          </div>
        </div>
      </CardHeader>
      <CardBody dangerouslySetInnerHTML={{ __html: marked(aiResponse) }} className="px-3 py-0 text-small mb-10 text-zinc-950 dark:text-neutral-50">
      </CardBody>
    </Card>
  );
}