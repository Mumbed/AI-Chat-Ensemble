"use client";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import {Card, Skeleton, Button} from "@nextui-org/react";
import Icon from '@/imgsrc/Custom-Complete';
import NextLink from "next/link";
import DataResource from '../DataResource';
export default function HomePage() {
	const searchParams = useSearchParams();
	const responses = searchParams.get('responses');
	const [parsedResponses, setParsedResponses] = useState([]);

	useEffect(() => {
		if (responses) {
			try {
				const parsed = JSON.parse(responses);
				setParsedResponses(parsed);
			} catch (error) {
				console.error("Failed to parse responses:", error);
			}
		}
	}, [responses]);
	const [response1, response2, response3] = parsedResponses;

	return (
		<div>
			<h1 className="text-3xl font-bold mb-10">응답을 Ai에게 전달했어요</h1>
			<h3 className="text-2xl font-bold mb-10">자세한 프롬프트는 ACE가 작성했어요</h3>
			{/* {parsedResponses.length > 0 ? (
				<ul>
					{parsedResponses.map((response, index) => (
						<li key={index}>{response}</li>
					))}
				</ul>
			) : (
				<p>응답이 없습니다.</p>
			)} */}

			<Card className="w-[800px] space-y-5 p-10 h-[600px]" radius="lg">
				
				<div className="space-y-3">
					<Skeleton className="w-3/5 rounded-lg">
					<div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
					</Skeleton>
					<Skeleton className="w-4/5 rounded-lg">
					<div className="h-3 w-4/5 rounded-lg bg-default-200 font-bold"></div>
					</Skeleton>
					<p className = "underline decoration-wavy font-bold mr-24">{response1}</p>
					<Skeleton className="w-2/5 rounded-lg">  
					<div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
					</Skeleton>
					<Skeleton className="w-3/5 rounded-lg">
					<div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
					</Skeleton>
					<Skeleton className="w-4/5 rounded-lg">
					<div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
					</Skeleton>
					<p className = "underline decoration-wavy font-bold ml-12">{response2}</p>
					<Skeleton className="w-4/5 rounded-lg">  
					<div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
					</Skeleton>
					<Skeleton className="w-2/5 rounded-lg">  
					<div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
					</Skeleton>
					<Skeleton className="w-3/5 rounded-lg">
					<div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
					</Skeleton>
					<Skeleton className="w-4/5 rounded-lg">
					<div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
					</Skeleton>
					<Skeleton className="w-5/5 rounded-lg">  
					<div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
					</Skeleton>
					<Skeleton className="w-1/5 rounded-lg">  
					<div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
					</Skeleton>
					<p className = "underline decoration-wavy font-bold">{response3}</p>
					<Skeleton className="w-3/5 rounded-lg">
					<div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
					</Skeleton>
					<Skeleton className="w-4/5 rounded-lg">
					<div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
					</Skeleton>
					<Skeleton className="w-2/5 rounded-lg">  
					<div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
					</Skeleton>
				</div>
			</Card>
			<NextLink href="/ask">
				<Button color="primary" startContent={<Icon/>} className = "mt-10">
					질문하러가기
				</Button>
			</NextLink>
		</div>
	);
}
