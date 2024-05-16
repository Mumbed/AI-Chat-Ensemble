import Sidebar from '@/components/ask-sidebar';

type Room = string; // rooms 배열 요소의 타입 정의
export default function CounterLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const rooms: Room[] = ["room1", "room2", "room3", "room43580"]; 
	return (
		<div  className="flex">
			<Sidebar rooms={rooms} /> {/* rooms 배열을 Sidebar 컴포넌트에 전달 */}
		
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				{children}
			</div>
		</section>
		</div>
	);
}
