'use client'

import React, { useEffect } from "react";
import { title } from "@/components/primitives";
import LoginTextArea from "@/components/login-textarea";
import LoginButton from "@/components/login-button";
import { DataResource } from "../DataResource";
import { useRouter } from "next/navigation";
export default function CounterPage() {
	const router = useRouter();
    useEffect(() => {
        const userAsync = async () => {
			const userDataResource = await DataResource.Auth.get();
            if (userDataResource.isLogined) router.push('/ask');
			else {
				document.querySelector('form')!.onsubmit = async (e) => {
					e.preventDefault();
					const form = e.target as HTMLFormElement;
					const email = (form[0] as HTMLInputElement).value;
					const password = (form[1] as HTMLInputElement).value;
					if ((await DataResource.Auth.login(email, password)).success) router.push('/ask');
				};
			}
        };
        userAsync();
    }, []);

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
