import React from "react";
import { title } from "@/components/primitives";
import LoginTextArea from "@/components/login-textarea";
import LoginButton from "@/components/login-button";
export default function CounterPage() {
	return (
		<div className = "flex flex-col items-center space-y-16 mt-44">
			<div className="flex flex-row space-x-2 mb-20">
				<span className={title({ color: "violet" })}>ACE</span>
				<h1 className={title()}>에 오신것을 환영합니다.</h1>
			</div>
			<div className = "flex flex-row items-center">
				<LoginTextArea />
				<div className = "m-8">
				<LoginButton />
				</div>
				
			</div>

		</div>
	);
}
