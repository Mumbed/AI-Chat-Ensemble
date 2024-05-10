"use client";
import React, { useState } from "react";
import { Spacer, Card, CardFooter, Image, Button } from "@nextui-org/react";
import { motion, useScroll, useTransform } from "framer-motion";
import HorizontalScrollImage from "./HorizontalScrollImage"; // HorizontalScrollImage 컴포넌트를 불러옵니다.

export default function HomeSectiontest() {
    const { scrollYProgress } = useScroll({ 
        offset: ["0vh", "100vh"]
      });
    
      const fontSize = useTransform(scrollYProgress, [0, 1], ["12px", "58px"]);
    
  return (
    <motion.div
    style={{
      fontSize,
    }}
  >
    AI선택 고민하지 마세요
    {/* 이곳에 스크롤을하면 이미지가 수평으로 움직이는 애니메이션 추가*/}
  </motion.div>
  );
}
