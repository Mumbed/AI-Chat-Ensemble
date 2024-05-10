
import HomeSection1 from "@/components/home-Section1";
import HomeSection2 from "@/components/home-Section2";
import HomeSectiontest from "@/components/home-Section-test";
import ScrollReveal from "@/components/ScrollReveal";
import {ScrollShadow} from "@nextui-org/react";
export default function Home() {
	return (

		<div>
			<ScrollShadow hideScrollBar className="">
			<div className = "min-h-[80rem]"> {/* 요소의 하단 높이 */}
				<HomeSection1 />
			</div>
			<div className = "min-h-[60rem]">
				<HomeSectiontest />
				<ScrollReveal />
			</div>
			</ScrollShadow>

		</div>

	);
}
