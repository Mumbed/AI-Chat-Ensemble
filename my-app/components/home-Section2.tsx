import React from "react";
import {Spacer, Card, CardFooter, Image, Button} from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";
export default function HomeSection2() {
  let width = 75;
  let height = 50
  return (
    // 임시로 Card를 여러번 반복하였음.
    //나중에 map함수를 이용해 코드 반복사용을 줄이도록 최적화가능
    <div className="flex flex-col justify-center ">
       <h2 className="">AI고민하지 마세요&nbsp;</h2><br/>
       <div className = "flex flex-row justify-center">
      <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={height}
        src="https://nextui.org/images/hero-card.jpeg"
        width={width}
      />
    </Card>
      <Spacer x={14} />
      <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={height}
        src="https://nextui.org/images/hero-card.jpeg"
        width={width}
      />
    </Card>
      <Spacer x={14} />
      <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={height}
        src="https://nextui.org/images/hero-card.jpeg"
        width={width}
      />
    </Card>


    <Spacer x={14} />
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none "
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={height}
        src="https://nextui.org/images/hero-card.jpeg"
        width={width}
      />
    </Card>
      <Spacer x={14} />
      <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={height}
        src="https://nextui.org/images/hero-card.jpeg"
        width={width}
      />
    </Card>
    </div>

    </div>
  );
}
