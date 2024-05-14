"use client";
import React, { useState } from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Image, Spacer, Tooltip, Button} from "@nextui-org/react";

export default function HomeSection3() {
  // useState 수정 필요, false로 바꾸고 버튼을 누르면 텍스트가 출력되도록
  const [showGreeting, setShowGreeting] = useState(false); 

  // 스크롤(10~ 100%)에 따라 해당 배열의 블러 값을 적용하도록
  const blurs = [
    "blur-2xl",
    "blur-lg",
    "blur-sm",
    "blur-none"
  ];
  return (
    <div>
      <div className = "flex flex-col items-center justify-center mb-32"><p className = "text-6xl font-bold">모든 답변을 한번에 받아보세요.</p></div>
      <div className="flex justify-end">
      <Tooltip content="버튼을 눌러보세요" color="primary"  >
        <Button color="primary" onClick={() => setShowGreeting(true)}>여행갔을때 외국인에게 하기 좋은 인사말을 추천해줘</Button>
      </Tooltip>
      </div>

      <Spacer y={32} />

      <div className = "flex justify-center">
          <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
              <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://ifh.cc/g/Sb8MWN.png"
              width={40}
              />
              <div className="flex flex-col">
              <p className="text-md">ChatGPT 3.5</p>
              {/* <p className="text-small text-default-500">nextui.org</p> */}
              </div>
          </CardHeader>
          <Divider/>
          <CardBody>
 {/* 버튼 클릭 여부에 따라 표시할 내용 */}
    {showGreeting ? 
      <p>
        당신이 여행 중 외국인을 만날 때 사용할 수 있는 간단하고 친근한 인사말은&nbsp;
        "Hello! How's your day going?" (안녕하세요! 오늘 하루 어떠세요?)입니다. &nbsp;
        이렇게 하면 상대방과 자연스럽게 대화를 시작할 수 있습니다.
      </p> : <p></p>
    }
          </CardBody>
          <Divider/>
          {/* <CardFooter>
              <Link
              isExternal
              showAnchorIcon
              href="https://github.com/nextui-org/nextui"
              >
              Visit source code on GitHub.
              </Link>
          </CardFooter> */}
          </Card>

          <Spacer x={16} />

          <Card className="max-w-[400px] h-96">
          <CardHeader className="flex gap-3">
              <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://ifh.cc/g/jlVKax.png"
              width={40}
              />
              <div className="flex flex-col">
              <p className="text-md">Gemini</p>
              {/* <p className="text-small text-default-500">nextui.org</p> */}
              </div>
          </CardHeader>
          <Divider/>
          <CardBody>
          {showGreeting && (
              <p>
                여행갈 때 외국인에게 인사할 때 사용하기 좋은 간단한 영어 문장을 추천드리겠습니다.&nbsp;
                "Hello! Nice to meet you." &nbsp;
                이 문장은 기본적이고 간단한 인사말로, 외국인과의 첫 만남에서 유용하게 사용할 수 있습니다. &nbsp;
                부담 없이 편하게 인사를 건네보세요.&nbsp;
              </p>
            )}
          </CardBody>
          <Divider/>
          {/* <CardFooter>
              <Link
              isExternal
              showAnchorIcon
              href="https://github.com/nextui-org/nextui"
              >
              Visit source code on GitHub.
              </Link>
          </CardFooter> */}
          </Card>
      </div>
    </div>
  );
}
