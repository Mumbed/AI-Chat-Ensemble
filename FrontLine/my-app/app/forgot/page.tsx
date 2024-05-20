"use client"

import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import NextLink from "next/link";
import { DataTools } from "../DataTools";
import { useState } from "react";
import { redirect } from "next/navigation";

function InputX({ name, placeholder }: {
	name: string;
	placeholder: string;
}): React.ReactElement {
	return (
	  	<div style={{
			display: "flex",
			flexDirection: "column",
			margin: "25px 0px",
			color: "rgba(255, 255, 255, 0.9)"
	  	}}>
			<label style={{
			  	fontSize: "14px",
			  	marginBottom: "4px",
			  	color: "rgba(255, 255, 255, 0.8)"
			}}>{name.charAt(0).toUpperCase() + name.slice(1)}</label>
			<input style={{
			  	border: "1px solid rgba(255, 255, 255, 0.3)",
			  	background: "none"
			}} required={true} name={name.split(" ")[0]} type={name.includes("password") ? "password" : "text"} placeholder={placeholder}></input>
		</div>
	)
}
export default function ForgotPage() {
	const [loginState, setLoginState] = useState(DataTools.Auth.isLogined);
	if (loginState) redirect("/ask")
	return (
		<div>
			<form onSubmit={e => {
				e.preventDefault();
				console.log(DataTools.Auth.regist(e.target[1].value, e.target[2].value, e.target[3].value, e.target[4].value))
			}}>
      			<fieldset>
				  	<h1 style={{
      					lineHeight: "42px"
    				}}>회원가입</h1>
					<InputX name="name" placeholder="Enter your name."></InputX>
      				<InputX name="email" placeholder="Enter your name."></InputX>
      				<InputX name="password" placeholder="Enter your name."></InputX>
      				<InputX name="verify password" placeholder="Enter your name."></InputX>
      				<Button type="submit">회원가입</Button>
					<span 
						style={{
      						display: "block",
      						width: "100%",
      						color: "rgba(255, 255, 255, 0.6)",
      						textAlign: "center",
      						marginTop: "10px"
    					}}
					>
						이미 계정이 있으신가요?
					</span>
					<NextLink
						style={{
      				  		fontSize: "14px",
      				  		flexDirection: "row-reverse",
      				  		top: "-20px",
      				  		color: "rgba(255, 255, 255, 0.6)"
      					}}
						href="/login"
					>
						Log in
					</NextLink>
      			</fieldset>
    		</form>
		</div>
	);
}
