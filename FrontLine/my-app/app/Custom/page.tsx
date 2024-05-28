import { title } from "@/components/primitives";
import Select1 from "@/components/Custom-Select1";
export default function BlogPage() {
	return (
		<div>
			<h1 className={title()}>Blog</h1>
			<Select1 />
		</div>
	);
}
