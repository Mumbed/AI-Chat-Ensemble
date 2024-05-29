
import AboutDummy from "@/components/about-dommy";
import { title } from "@/components/primitives";
import DataResource from "../DataResource";
import { useEffect, useState } from "react";
export default function AboutPage() {
	// const [prompt, setPrompt] = useState("");
	// useEffect(() => {
	// 	async function getData() {
	// 		setPrompt(await DataResource.Room.getPrompt());
	// 	}
	// 	getData();
	// })
	return (
		<div>
			<h1 className={title()}>About</h1>
			<div>
				{/* {prompt} */}
				<AboutDummy />
			</div>
		</div>
	);
}
