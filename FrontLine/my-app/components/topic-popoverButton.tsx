'use client' 
import React from "react";
import {Popover, PopoverTrigger, PopoverContent, Button, Input} from "@nextui-org/react";
import StarIcon from '@/imgsrc/StarIcon';

export default function PopoverButton() {
  return (
      <Popover placement="bottom" offset={20} showArrow backdrop= "blur">
      <PopoverTrigger>
        <Button color="primary" size="md">
            프롬프트 엔지니어링이란?
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">프롬프트 엔지니어링이란?</div>
          <div className="text-tiny">AI가 더 정확하고 유용한 응답을 생성하도록 돕는 것 입니다.</div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
