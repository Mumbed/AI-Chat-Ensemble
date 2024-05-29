import React from "react";
import {Card, CardBody,  Divider} from "@nextui-org/react";
import Select from "@/components/Custom-Select1";

export default function CustomCard() {
  return (
    <Card className="w-full h-60">
      <CardBody className="flex flex-row items-center justify-center">
        <h1 className="text-lg font-bold">내가 질문할 내용은</h1>
        <Select />
        <h1 className="text-lg font-bold">이야.</h1>
      </CardBody>

    </Card>
  );
}
