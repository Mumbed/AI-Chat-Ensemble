
import HomeSection1 from "@/components/home-Section1";
import HomeSectiontest from "@/components/home-Section-test";
import HomeSection3 from "@/components/home-Section3";
import HomeSection4 from "@/components/home-Section4";

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
			</div>
			<div className = "min-h-[100rem]">
				<HomeSection3 />
			</div>
			<div className = "min-h-[60rem]">
				<HomeSection4 />
			</div>
			</ScrollShadow>

		</div>

	);
}
