import { title } from "@/components/primitives";
import Textarea from "@/components/ask-textarea";
export default function CounterPage() {
	return (
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-col flex-grow">
                <h1 className={title()}>ask</h1>
                {/* 페이지 내용 */}
            </div>
            <div className="sticky bottom-0">
                <Textarea />
            </div>
        </div>
	);
}
