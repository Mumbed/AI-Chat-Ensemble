"use client";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'; // useRouter 훅을 가져옵니다
import { Divider, Button, Input, Progress } from "@nextui-org/react";
import Image from "next/image";
import Ai from '@/imgsrc/custom-Ai.gif';
import Link from 'next/link'; // Link 컴포넌트를 가져옵니다

export default function CostomLan() {
	const questions = [
		"어떤언어에 대해서 질문하시겠습니까?",
		"당신이 궁금한 내용은 무엇입니까?",
		"당신이 필요한 분야는 무엇입니까?"
	];

	const buttonSequences = [
		["영어", "일본어", "중국어"],
		["문법", "발음", "단어"],
		["문서작성", "회화", "학습"]
	];

	let lock = false;
	const [questionIndex, setQuestionIndex] = useState(0);
	const [selectedText, setSelectedText] = useState("");
	const [sequenceIndex, setSequenceIndex] = useState(0);
	const [inputValue, setInputValue] = useState("");
	const [responses, setResponses] = useState([]); // 사용자 응답 저장 배열
	const [isComplete, setIsComplete] = useState(false); // 질문이 완료되었는지 확인하는 상태

	const currentQuestion = questions[questionIndex];
	const currentButtonLabels = buttonSequences[sequenceIndex];

	const handleNextQuestion = () => {
		if (questionIndex < questions.length - 1) {
			setQuestionIndex(questionIndex + 1);
			setSequenceIndex(sequenceIndex + 1);
		} else {
			// 모든 질문이 완료된 경우
			setIsComplete(true);
		}
	};

	const handleButtonClick = (text) => {
		setSelectedText(text);
		setResponses([...responses, text]); // 응답 저장
		handleNextQuestion();
	};

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const handleConfirmClick = () => {
		setResponses([...responses, inputValue]); // 응답 저장
		setInputValue(""); // 입력 필드 초기화
		handleNextQuestion();
	};
	const createRoomWithPreferences = async () => {
		if (lock) console.log("이미 처리중입니다.");
		else {
			lock = true;
			const result = await DataResource.Room.createRoom();
			if (!result.success) router.push("/login");
			
			else {
				await DataResource.Room.submitQuestion({
					roomid: result.roomid as string,
					preferences: {
						majorTopic: "Language",
						details: {
							language: responses[0]
						}
					}
				})
				router.push(`/ask/${result.roomid}`);
			}
			lock = false;
		}
	}
		// 진행도 계산
		const progress = ((questionIndex + 1) / questions.length) * 100;


	return (
		<div>
			<h1 className="text-3xl font-bold mb-10">프롬프트를 제작하기 위해 <br></br>간단한 질문을 체크해주세요</h1>
			<Progress aria-label="진행도" value={progress} className=""/>
			{/* <h2>이곳에 출력: {responses.join(", ")}</h2> 응답 출력 */}
			<Divider />
			<div className="mt-10 flex justify-center">
				<div className="bg-white p-6 rounded-lg shadow-lg">
					<Image src={Ai} alt="Custom AI" width={500} height={500} />
				</div>
			</div>
			<Divider />
			<div className="flex flex-col items-center gap-10">
				{!isComplete ? (
					<>
						<h1 className="text-2xl font-bold mt-10">{currentQuestion}</h1>
						<div className="flex flex-row gap-4">
							{currentButtonLabels.map((label, index) => (
								<Button key={index} color="primary" onClick={() => handleButtonClick(label)}>
									{label}
								</Button>
							))}
						</div>
						<Input 
							label="원하는 답변이 없으면 이곳에 적어주세요." 
							value={inputValue}
							onChange={handleInputChange}
							endContent={
								<Button className="" type="button" color="primary" onClick={handleConfirmClick}>
									확인
								</Button>
							}
						/>
					</>
				) : (
					<Link href={{
						pathname: '/blog',
						query: { responses: JSON.stringify(responses) }
					}}>
						<Button color="primary" className = "mt-10">
							작성완료! 질문하기로 이동
						</Button>
					</Link>
				)}
			</div>
		</div>
	);
}
