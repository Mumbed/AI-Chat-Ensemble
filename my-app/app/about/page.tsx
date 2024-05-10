import AboutDummy2 from "@/components/about-dommy2";
import AboutDummy from "@/components/about-dommy";
import { title } from "@/components/primitives";
export default function AboutPage() {
	return (
		<div>
			<h1 className={title()}>About</h1>
			<div>
			<AboutDummy />
			</div>
		</div>
	);
}
