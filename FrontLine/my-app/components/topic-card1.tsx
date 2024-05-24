'use client'

import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import ContinueButton from '@/imgsrc/CountinueButton.gif';

const TransparentImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/1l7nV8AAAAASUVORK5CYII=";

export default function Card1() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href="/Topic" passHref>
      <Card className="py-4 p-4 cursor-pointer">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <small className="text-default-500">더 정확한 질문을 받으실래요?</small>
          <h4 className="font-bold text-large">주제정하기</h4>
        </CardHeader>
        <CardBody 
          className="overflow-visible py-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={isHovered ? ContinueButton : TransparentImage}
            width={270}
            height={270}
          />
        </CardBody>
      </Card>
    </Link>
  );
}
