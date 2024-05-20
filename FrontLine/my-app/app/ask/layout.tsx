import Sidebar from '@/components/ask-sidebar';
import Textarea from "@/components/ask-textarea";

type Room = string; // rooms 배열 요소의 타입 정의
export default function CounterLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const rooms: Room[] = ["room1", "room2", "room3"]; 
	return (
		<div className="flex h-screen">
			<div className = "w-[22rem]  hidden md:block">
				<Sidebar rooms={rooms} /> {/* rooms 배열을 Sidebar 컴포넌트에 전달 */}
			</div>
			<div className="flex-1 flex flex-col">
				<section className="flex-1 flex items-center justify-center">
					<div className="inline-block text-center justify-center">
						{children}
						<div className="sticky bottom-0 w-full h-32">
							<Textarea />
						</div>
					</div>
				</section>

			</div>
		</div>
	);
}
