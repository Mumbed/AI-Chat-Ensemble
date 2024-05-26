
import HomeSection1 from "@/components/home-Section1";
import HomeSectiontest from "@/components/home-Section-test";
import HomeSection3 from "@/components/home-Section3";
import HomeSection4 from "@/components/home-Section4";
import HomeSection5 from "@/components/home-Section5";
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
			<div className = "min-h-[80rem]">
				<HomeSection3 />
			</div>
			<div className = "min-h-[20rem]">
				<HomeSection4 />
			</div>
			<div className = "min-h-[60rem] ">
				<HomeSection5 />
			</div>
			</ScrollShadow>

		</div>

	);
}
