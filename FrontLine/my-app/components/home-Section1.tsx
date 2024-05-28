import React from "react";
import {Image} from "@nextui-org/react";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import NextLink from "next/link";
export default function HomeSection1() {
  return (
    <section className="flex flex-row items-center justify-center gap-6 py-8 md:py-10">
    <div className = "flex flex-col m-8">
        <div className="inline-block max-w-xl text-center justify-center">
            <h1 className={title()}>AI통합 서비스&nbsp;</h1><br/>
            <h1 className={title({ color: "violet" })}>ACE&nbsp;</h1>
            <h1 className={title()}>를 소개합니다&nbsp;</h1>
            <br />
            <h2 className={subtitle({ class: "mt-4" })}>
            project for asking questions to various AI
            </h2>
        </div>

        <div className="flex gap-3 ms-20 my-8">
            <NextLink
                href="/askBefore"
                className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
            >
                시작하기
            </NextLink>
            <NextLink
                className={buttonStyles({ variant: "bordered", radius: "full" })}
                href={siteConfig.links.github}
            >
                <GithubIcon size={20} />
                GitHub
            </NextLink>
            </div>
    </div>
    <Image
          isBlurred
          width={500}
          src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
          alt="NextUI Album Cover"
        />
</section>
  );
}
