"use client"

import Sidebar from '@/components/ask-sidebar';
import Textarea from "@/components/ask-textarea";
import { useEffect, useState } from 'react';
import DataResource from '../DataResource';
import { useParams, useRouter } from 'next/navigation';
import QuestionSidebar from '@/components/question-sidebar';
import AnswerBox from '@/components/ask-AnswerBox';

export default function CounterLayout({ children }: { children: React.ReactNode }) {
	const [list, setList] = useState<string[]>([]);
	const router = useRouter();
	const param = useParams();
  
	useEffect(() => {
	  const roomAsync = async () => {
		let locked = false;
		const userDataResource = await DataResource.Auth.get();
		if (!userDataResource.isLogined) router.push('/login');

		else if (param.roomid) {
		  const roomDataSource = await DataResource.Room.get(param.roomid as string);
		  if (!roomDataSource.success) router.push('/login');

		  else setList(roomDataSource.data.map((item: { question: string }) => item.question));
		} else setList(userDataResource.rooms);
		
		document.querySelector("form")!.onsubmit = async e => {
			e.preventDefault();
			if (locked) {
				console.log("이미 처리중인 질문 데이터가 존재합니다.");
				return;
			} else {
				locked = true;
				const form = e.target as HTMLFormElement;
				const input = (form[0] as HTMLTextAreaElement).value;
				if (param.roomid) {
					const result = await DataResource.Room.submitQuestion({
						roomid: param.roomid as string,
						question: input
					})
					if (!result.success) router.push("/login");

					else {
						setList(result.data!.map((item: { question: string }) => item.question));
						router.push(`/ask/${param.roomid}/${result.data!.length - 1}`);
					}
				} else {
					const result = await DataResource.Room.createRoom();
					if (!result.success) router.push("/login");

					else {
						await DataResource.Room.submitQuestion({
							roomid: result.roomid,
							question: input
						})
						router.push(`/ask/${result.roomid}`);
					}
				}
				locked = false;
			}
		}
	  };
	  roomAsync();
	}, [param.roomid, router]);
  
	return (
	  <div className="flex h-screen">
		<div className="w-[22rem] hidden md:block">
		  {param.roomid ? (
			<QuestionSidebar questions={list} roomid={param.roomid as string} />
		  ) : (
			<Sidebar rooms={list} />
		  )}
		</div>
		<div className="flex-1 flex flex-col">
		  <section className="flex-1 flex items-center justify-center">
			<div className="inline-block text-center justify-center">
			  {children}
			  <div className="sticky bottom-0 w-full h-32">
				<Textarea />
			  </div>
			</div>
		  </section>
		</div>
	  </div>
	);
  }