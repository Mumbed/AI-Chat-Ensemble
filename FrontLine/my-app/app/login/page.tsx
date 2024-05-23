import React from "react";
import { title } from "@/components/primitives";
import LoginTextArea from "@/components/login-textarea";
import LoginButton from "@/components/login-button";
export default function CounterPage() {
	return (
		<div className = "flex flex-col items-center space-y-12 mt-12">
			<div className="flex flex-row space-x-2 mb-12">
				<span className={title({ color: "violet" })}>ACE</span>
				<h1 className={title()}>에 오신것을 환영합니다.</h1>
			</div>
			<div className = "flex flex-row items-center bg-gray-100 rounded-lg dark:bg-zinc-800 py-12">
				<div className = "m-12">
				<LoginTextArea />
				</div>
				<div className = "m-12">
				<LoginButton />
				</div>
				
			</div>

		</div>
	);
}
