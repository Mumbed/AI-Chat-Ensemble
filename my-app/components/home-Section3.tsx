"use client";
import React, { useState } from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Image, Spacer, Tooltip, Button} from "@nextui-org/react";
import { motion } from "framer-motion";
export default function HomeSection3() {
  const [showGreeting, setShowGreeting] = useState(false); 

  return (
    <div>
      <div className = "flex flex-col items-center justify-center mb-32">
        <h2>버튼을 눌러 답변을 확인해보세요.</h2>
        <p className = "text-6xl font-bold">모든 답변을 한번에 받아보세요.</p>
        </div>
      <div className="flex justify-end">
      <Tooltip content="버튼을 눌러보세요" color="primary"  >
        <Button color="primary" onClick={() => setShowGreeting(true)}>여행갔을때 외국인에게 하기 좋은 인사말을 추천해줘</Button>
      </Tooltip>
      </div>

      <Spacer y={32} />

      <div className = "flex justify-center">
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showGreeting ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="max-w-[400px] h-96 w-96" >
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
        외국인을 만날 때 간단하고 친근한 인사말은&nbsp;
        "Hello! How's your day going?" (안녕하세요! 오늘 하루 어떠세요?)입니다. &nbsp;
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
          </motion.div>

          <Spacer x={16} />

          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showGreeting ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="max-w-[400px] h-96 w-96">
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
                외국인에게 인사할 때 사용하기 좋은 영어 문장을 추천드리겠습니다.&nbsp;
                "Hello! Nice to meet you." &nbsp;
              
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
          </motion.div>
      </div>
    </div>
  );
}
