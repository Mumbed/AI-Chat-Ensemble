"use client";

import { useState } from "react";
import { Button } from "@nextui-org/button"; {/*nextui에 있는 버튼 가져옴 */}

export const Counter = () => {
	const [count, setCount] = useState(0);

	return (
		<Button radius="full" onPress={() => setCount(count + 1)}>{/*"on pressed" nextui button 전용 메소드 NextUi위키 참조*/}
			Count is {count}
		</Button>
	);
};
