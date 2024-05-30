import AnswerBox from "@/components/ask-AnswerBox";
export default function CounterPage() {
	return (
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-row gap-8">
                {/* 페이지 내용 */}
                <AnswerBox aiSource="gpt" aiResponse="안녕하세요. 무엇을 도와드릴까요?" />
                <AnswerBox aiSource="gemini" aiResponse="안녕하세요."/>
            </div>
        </div>
	);
}
