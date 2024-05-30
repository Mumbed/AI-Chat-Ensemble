'use client'

import React from "react";
import { Card, CardHeader, CardBody, CardFooter,Button, Tooltip, Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import Image from "next/image";
import StarIcon from '@/imgsrc/StarIcon';
import RandomIcon from '@/imgsrc/RandomIcon';

export default function Card3() {
  return (
    <Popover placement="top">
      <PopoverTrigger>
        <Card className="py-4 p-4 cursor-pointer transition-transform duration-300 transform hover:-translate-y-1">
          <CardHeader className="pb-0 pt-2 px-4 flex-row items-start gap-4">
            <h4 className="pt-1 font-bold text-large">랜덤 프롬프트 선택하기</h4>
            <Tooltip content="AI가 생성한 랜덤 프롬프트를 간단하게 고를 수 있어요">
              <Button isIconOnly color="primary" aria-label="Like" size="sm">
                  <StarIcon />
                  </Button> 
              </Tooltip>  
          </CardHeader>
          <CardBody 
            className="overflow-visible py-2"
          >
          <div className="object-cover rounded-xl">
              <RandomIcon  />
            </div>
          </CardBody>
        </Card>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">아직 공사중 입니다.</div>
          <div className="text-tiny">아직 기능 구현중입니다.</div>
        </div>
      </PopoverContent>
      
      </Popover>
    
  );
}
