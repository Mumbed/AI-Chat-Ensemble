import React from "react";
import { Image, Button, ButtonGroup, Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";


export default function AboutDommy() {
  return (
    <div className = "flex flex-col ">
      <div className=" m-8 min-h-80">
      <div className="grid grid-cols-4 gap-4">
          <Button color="primary"onClick={() => {}}>1번방</Button>
          <Button color="primary"onClick={() => {}}>2번방</Button>
          <Button color="primary"onClick={() => {}}>3번방</Button>
          <Button color="primary"onClick={() => {}}>4번방</Button>
        </div>
      </div>
      <div className = "">
          <Card>
          <CardBody>
              <p>버튼을 누르면 이 텍스트가 변경</p>
              {/* 만약 채팅방 구현을 위해 더 좋은 방법이 있다면 그 방법을 사용해도 좋음 */}
          </CardBody>
          </Card>
      </div>
    </div>
  );
}
