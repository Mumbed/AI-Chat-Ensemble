"use client";

import { useState } from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";

export default function AnswerBox() {

	return (
        <Card className="w-96">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="https://nextui.org/avatars/avatar-1.png" />
          <div className="flex flex-col gap-1 items-start justify-center mb-3">
            <h4 className="text-small font-semibold leading-none text-default-600">Chat GPT</h4>
            <h5 className="text-small tracking-tight text-default-400">프롬프트 적용중</h5> {/*변경가능*/}
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small mb-10 text-zinc-950 dark:text-neutral-50">
        <p>{/*변경가능*/}
        당신이 여행 중 외국인을 만날 때 사용할 수 있는 간단하고 친근한 인사말은&nbsp;
        "Hello! How's your day going?" (안녕하세요! 오늘 하루 어떠세요?)입니다. &nbsp;
        이렇게 하면 상대방과 자연스럽게 대화를 시작할 수 있습니다.
        </p>
      </CardBody>
    </Card>
	);
};
