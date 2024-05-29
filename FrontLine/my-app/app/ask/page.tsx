import AnswerBox from "@/components/ask-AnswerBox";
export default function CounterPage() {
	return (
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-row gap-8">
                {/* 페이지 내용 */}
                <AnswerBox aiSource="gemini" aiResponse={`당신이 여행 중 외국인을 만날 때 사용할 수 있는 간단하고 친근한 인사말은&nbsp;
        "Hello! How's your day going?" (안녕하세요! 오늘 하루 어떠세요?)입니다. &nbsp;
        이렇게 하면 상대방과 자연스럽게 대화를 시작할 수 있습니다.`} />
                <AnswerBox aiSource="gemini" aiResponse={`당신이 여행 중 외국인을 만날 때 사용할 수 있는 간단하고 친근한 인사말은&nbsp;
        "Hello! How's your day going?" (안녕하세요! 오늘 하루 어떠세요?)입니다. &nbsp;
        이렇게 하면 상대방과 자연스럽게 대화를 시작할 수 있습니다.`}/>
            </div>
        </div>
	);
}
