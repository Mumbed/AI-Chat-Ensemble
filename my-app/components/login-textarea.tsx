import React from "react";
import { Input, Spacer, Button } from "@nextui-org/react";

export default function LoginTextArea() {
  return (
    <div className="w-[40rem]">
      <Input
        label="Email"
        placeholder="이메일을 입력해주세요"
        fullWidth
      />
      <Spacer y={10} />
      <Input
        label="Password"
        placeholder="비밀번호를 입력해주세요"
        fullWidth
        type="password"
      />
      <Spacer y={10} />
        <Button color="primary" fullWidth>
        로그인
        </Button>
    </div>
  );
}
