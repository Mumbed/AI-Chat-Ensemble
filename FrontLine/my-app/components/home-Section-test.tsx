"use client";
import React, { useState } from "react";
import { Spacer, Badge, Avatar } from "@nextui-org/react";
import { motion, useScroll, useTransform } from "framer-motion";

// {/* 이미지가 경로로 적용이 안돼 ㅡㅡ*/}
import avatar1 from "https://ifh.cc/g/Sb8MWN.png";
import avatar2 from "@/imgsrc/clova_x.png"
import avatar3 from "../app/imgsrc/Microsoft_Copilot_2023.png";
import avatar4 from "../app/imgsrc/claude-icon.png";
import avatar5 from "../app/imgsrc/clova_x.png";
import avatar6 from "../app/imgsrc/google-gemini-icon.png";

export default function HomeSectiontest() {
    const { scrollYProgress } = useScroll({ 
        offset: ["0vh", "100vh"]
      });
    
      const fontSize = useTransform(scrollYProgress, [0, 1], ["12px", "58px"]);
      const showImage  = useTransform(scrollYProgress, [0.5, 0.51], [0, 1]);
      const imageXPosition = useTransform(
        scrollYProgress,
        [0.5, 1],
        ["-100%", "-40%"]
      );
      
  return (
    <div  className="flex flex-col"  style={{ fontFamily: "Arial, sans-serif" }}>
      <motion.div  style={{ fontSize, fontWeight: 700 }}>AI선택 고민하지 마세요</motion.div>
      <motion.div  style={{ fontSize, fontWeight: 700 }}>모든 답변을 한번에 받아보세요.</motion.div>
      <Spacer y={28} />
      <motion.div
        style={{
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: showImage,
          x: imageXPosition,
        }}
      >
      <div className="flex gap-28 items-center">
      <Badge>
        <Avatar
          className="w-20 h-20"
          radius="md"
          src= "https://ifh.cc/g/Sb8MWN.png"
        />
      </Badge>
      <Badge>
        <Avatar
          className="w-20 h-20"
          radius="md"
          src="https://ifh.cc/g/0WjoSb.png"
        />
      </Badge>
      <Badge >
        <Avatar
        className="w-20 h-20"
          radius="md"
          src="https://ifh.cc/g/SooT4V.png"
        />
      </Badge>
      <Badge>
        <Avatar
        className="w-20 h-20"
          radius="md"
          src="https://ifh.cc/g/sZjKRr.png"
        />
      </Badge>
      <Badge>
        <Avatar
        className="w-20 h-20"
          radius="md"
          src="https://ifh.cc/g/7DnK2L.png"
        />
      </Badge>
      <Badge>
        <Avatar
        className="w-20 h-20"
          radius="md"
          src="https://ifh.cc/g/jlVKax.png"
        />
      </Badge>
    </div>
      </motion.div>
    </div>
  );
}
