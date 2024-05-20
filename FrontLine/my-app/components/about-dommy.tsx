import React from "react";
import { Image, Button, ButtonGroup, Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";


export default function AboutDommy() {
  return (
    <div className = "flex flex-col ">
      <div className=" m-8 min-h-80">
      <div className="grid grid-cols-4 gap-4">
          <Button color="primary">1번방</Button>
          <Button color="primary">2번방</Button>
          <Button color="primary">3번방</Button>
          <Button color="primary">4번방</Button>
        </div>
      </div>
      <div className = "">
          <Card>
          <CardBody>
              <p>버튼을 누르면 이 텍스트가 변경</p>
          </CardBody>
          </Card>
      </div>
    </div>
  );
}
