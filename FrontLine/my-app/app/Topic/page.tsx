import { title } from "@/components/primitives";
import PopoverButton from "@/components/topic-popoverButton";
import Card3 from "@/components/topic-card3";
import Card4 from "@/components/topic-card4";
export default function DocsPage() {
	return (
		<div className = "">
			<div className = "bg-slate-100 w-screen p-32 dark:bg-gray-900">
				<div className = "flex flex-col gap-8 ">
					<h1 className="text-4xl font-bold">쉬운 프롬프트 엔지니어링</h1>
					<h1 className="text-4xl font-bold">바로 시작해 보세요.</h1>
					<div>
						<PopoverButton />
					</div>
				</div>
			</div>
			<div className="mt-24">
				<div className = "flex flex-row items-center justify-center gap-24">
					<Card3 />
					<Card4 />
				</div>

			</div>

			
		</div>
	);
}
