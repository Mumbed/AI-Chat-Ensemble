"use client";

import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "@/imgsrc/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/imgsrc/EyeSlashFilledIcon";

export default function SignUpPassword() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      label="비밀번호"
      variant="bordered"
      isRequired
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
    />
  );
}
