'use client' 

import React, { useState } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";
import SkipButtonGif from '@/imgsrc/SkipButton.gif';
import Link from "next/link";

const TransparentImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/1l7nV8AAAAASUVORK5CYII=";

export default function Card2() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href="/ask" passHref>
      <Card className="py-4 p-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start ">
          <small className="text-default-500">바로 질문하고 싶으신가요?</small>
          <h4 className="font-bold text-large">바로 질문하기</h4>
        </CardHeader>
        <CardBody
          className="overflow-visible py-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            alt="Card background"
            className="object-cover rounded-xl invert dark:invert-0 dark:brightness-200"
            src={isHovered ? SkipButtonGif : TransparentImage}
            width={270}
            height={270}
          />
        </CardBody>
      </Card>
    </Link>
  );
}
