import { title } from "@/components/primitives";
import AnswerBox from "@/components/ask-AnswerBox";
import { Protecter } from "../DataTools";
export default function CounterPage() {
	return (
        <Protecter>
            <div className="flex flex-col min-h-screen">
                <div className="flex flex-row gap-8">
                    {/* 페이지 내용 */}
                    <AnswerBox />
                    <AnswerBox />
                </div>
            </div>
        </Protecter>
	);
}
