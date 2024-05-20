import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import NextLink from "next/link";

function InputX({ name, placeholder, type }: {
	name: string;
	placeholder: string;
	type: string | undefined
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
			}} required={true} name={name.split(" ")[0]} type={type} placeholder={placeholder}></input>
		</div>
	)
}
export default function LoginPage() {
	return (
		<div>
			<form>
      			<fieldset>
					<legend style={{
    				    top: "40px",
    				    width: "100%",
    				    color: "slateblue",
    				    textAlign: "center",
    				    fontSize: "xxx-large",
    				    fontWeight: "600"
    				}}>WELCOME BACK</legend>
    				<p style={{
    				    display: "inline-block",
    				    width: "100%",
    				    color: "rgba(150, 150, 150, 0.5)",
    				    textAlign: "center",
    				    fontSize: "18px",
    				}}>ACE에 오신걸 환영합니다.</p>
        			<InputX name="email" placeholder="Enter your email" type="email"></InputX>
      				<InputX name="password" placeholder="Enter your password" type="password"></InputX>
      				<NextLink
						style={{
      				  		fontSize: "14px",
      				  		flexDirection: "row-reverse",
      				  		top: "-20px",
      				  		color: "rgba(255, 255, 255, 0.6)"
      					}}
						href="/forgot"
					>
						Forgot Password?
					</NextLink>
      				<Button>로그인</Button>
      			</fieldset>
    		</form>
		</div>
	);
}
