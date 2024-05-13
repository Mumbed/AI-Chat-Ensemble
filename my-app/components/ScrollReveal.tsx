"use client";
import React from "react";
import { motion, useAnimation, useTransform  } from "framer-motion";
import { useScroll } from "framer-motion";

const ScrollReveal = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  return (
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
<h2>Scroll down to 50% to see me!</h2>
</motion.div>
  );
}; 

export default ScrollReveal;