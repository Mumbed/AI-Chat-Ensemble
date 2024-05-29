"use client"

import { title } from "@/components/primitives";
import Password from "@/components/signup-password";
import Email from "@/components/signup-email";
import Name from "@/components/signup-name";
import Button from "@/components/signup-button";
import SignUpPasswordVerify from "@/components/signup-password-verify";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import DataResource from "../DataResource";
export default function SignupPage() {
	const router = useRouter();
    useEffect(() => {
        const userAsync = async () => {
            const userDataResource = await DataResource.Auth.get();
            if (userDataResource.isLogined) router.push('/ask');
			else {
				document.querySelector('form')!.onsubmit = async (e) => {
					e.preventDefault();
					const form = e.target as HTMLFormElement;
					const name = (form[0] as HTMLInputElement).value;
					const email = (form[1] as HTMLInputElement).value;
					const password = (form[2] as HTMLInputElement).value;
					const passwordVerify = (form[4] as HTMLInputElement).value;
					if ((await DataResource.Auth.regist(name, email, password, passwordVerify)).success) router.push('/ask');
				};
			}
        };
        userAsync();
    }, []);

	return (
		<div>
			<div className = "flex flex-col m-12">
			<h1 className={title()}>자 이제</h1>
			<h1 className={title()}>간단하게 회원가입해 볼까요?</h1>
			</div>
			<form className = "flex flex-col gap-4 m-24">
				<Name />
				<Email />
				<Password />
				<SignUpPasswordVerify />
				<div className = "p-24 pt-2">
					<Button />
				</div>
			</form>
		</div>
	);
}
