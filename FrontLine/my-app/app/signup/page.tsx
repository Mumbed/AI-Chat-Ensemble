import { title } from "@/components/primitives";
import Password from "@/components/signup-password";
import Email from "@/components/signup-email";
import Name from "@/components/signup-name";
import Button from "@/components/signup-button";
export default function SignupPage() {
	return (
		<div>
			<div className = "flex flex-col m-12">
			<h1 className={title()}>자 이제</h1>
			<h1 className={title()}>간단하게 회원가입해 볼까요?</h1>
			</div>
			<div className = "flex flex-col gap-4 m-24">
				<Name />
				<Email />
				<Password />
			</div>
			<div className = "p-24 pt-2">
				<Button />
			</div>
		</div>
	);
}
