import React from "react";
import {Input} from "@nextui-org/react";

export default function SignUpEmail() {
  return (
    <Input
      isRequired
      type="email"
      label="이메일"
      variant="bordered"
    />
  );
}
