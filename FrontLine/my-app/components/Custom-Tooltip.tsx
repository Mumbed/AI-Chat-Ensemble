import React from "react";
import {Tooltip, Button} from "@nextui-org/react";

export default function CustomTooltip() {
  return (
    <Tooltip
      content={
        <div className="px-1 py-2">
          <div className="text-small font-bold">공사중!</div>
          <div className="text-tiny">현재 ACE는 데모버전으로 커스텀 프롬프트는 3가지 주제만 제공하고 있습니다.</div>
        </div>
      }
    >
        원하는 주제가 없으신가요?
    </Tooltip>
  );
}
