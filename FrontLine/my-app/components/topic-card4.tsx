'use client'

import React from "react";
import { Card, CardHeader, CardBody, CardFooter,Button, Tooltip } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";
import StarIcon from '@/imgsrc/StarIcon';
import Icon from '@/imgsrc/CustomIcon';
export default function Card4() {
  return (
    
      <Card className="py-4 p-4 cursor-pointer transition-transform duration-300 transform hover:-translate-y-1 w-72">
        <CardHeader className="pb-0 pt-2 px-4 flex-row items-center gap-4">
          <h4 className="pt-1 font-bold text-large">직접 커스텀 하기</h4>
          <Tooltip content="간편하게 프롬프트를 커스텀 할 수 있어요">
            <Button isIconOnly color="primary" aria-label="Like" size="sm">
                <StarIcon />
            </Button> 
            </Tooltip>  
        </CardHeader>
        <CardBody 
          className="overflow-visible py-2"
        >
        <NextLink href="/Custom" passHref> {/* 링크 */}
          <div className="object-cover rounded-xl ">
            <Icon  />
          </div>
          </NextLink>
        </CardBody>
      </Card>
    
  );
}
