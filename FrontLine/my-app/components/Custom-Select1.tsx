"use client";
import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { topics } from "@/imgsrc/Custom-Select1-data";
import Link from "next/link";
import { Button } from "@nextui-org/react";

export default function CustomSelect1() {
  const [value, setValue] = React.useState("");

  const handleSelectionChange = (e) => {
    setValue(e.target.value);
  };

  let href = "/";
  if (value === "코딩") {
    href = "/customCoding";
  } else if (value === "언어") {
    href = "/customLanguage";
  } else if (value === "물리") {
    href = "/customphysics";
  }

  return (
    <div className="flex flex-col gap-10 mt-14">
      <div className="flex w-full flex-wrap items-center justify-center md:flex-nowrap mb-6 md:mb-0 gap-4">
        <Select
          labelPlacement="outside"
          label="주제를 선택해주세요"
          className="flex-grow"  
          style={{ backgroundColor: 'transparent', minWidth: '200px' }} 
          selectedKeys={[value]}
          onChange={handleSelectionChange}
        >
          {topics.map((topic) => (
            <SelectItem key={topic.value} value={topic.value}>
              {topic.label}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className = "mr-28">
        <Link href={href}>
          <Button color="primary" className="max-w-xs w-full">
            계속하기
          </Button>
        </Link>
      </div>

    </div>
  );
}
