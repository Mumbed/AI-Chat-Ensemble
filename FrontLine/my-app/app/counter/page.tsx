import { title } from "@/components/primitives";
import { Counter } from "@/components/counter"
export default function CounterPage() {
	return (
		<div className = "flex flex-col space-y-16"> {/*tailwind사이트 참조*/}
			<h1 className={title()}>CounterPage</h1>
			<Counter/>
		</div>
	);
}
