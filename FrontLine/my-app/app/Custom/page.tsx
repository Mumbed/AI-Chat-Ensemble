import { title } from "@/components/primitives";
import Card from "@/components/Custom-Card";
import Tooltip from "@/components/Custom-Tooltip";
import {Divider} from "@nextui-org/react";
export default function BlogPage() {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-row mb-6">
        <h1 className={title()}>지금부터 &nbsp;</h1>
        <h1 className={title({ color: "violet" })}> 프롬프트</h1>
        <h1 className={title()}>를 만들어 볼게요.</h1>
      </div>
      <div className="mb-24">
        <h1 className="text-lg font-bold">질문하고 싶은 주제를 선택해주세요.</h1>
      </div>
	  <Divider />
      <div className="flex flex-row items-center gap-2 justify-center mt-10 mb-10">
		<Card />
     </div>
	 <Divider />
	  <div className = "mt-64 flex flex-col gap-24 items-center">
		<Tooltip />
	  </div>
    </div>
  );
}
