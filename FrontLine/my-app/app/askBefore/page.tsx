import { title } from "@/components/primitives";
import Card1 from "@/components/topic-card1";
import Card2 from "@/components/topic-card2";
export default function DocsPage() {
	return (
		<div>
			<div className = "m-8 mb-60">
				<h1 className="text-4xl font-bold">질문하기 전에 주제를 정할 수 있어요.</h1>
			</div>
			
			<div className = "flex flex-row gap-8 m-8 mb-56">
				<Card1 />
				<Card2 />
			</div>
		</div>
	);
}
