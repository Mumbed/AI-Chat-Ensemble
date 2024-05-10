import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useScroll } from "framer-motion";

const ScrollReveal = () => {
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();

  controls.start({ opacity: scrollYProgress });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 1 }}
    >
      <img src="https://nextui.org/images/hero-card.jpeg" alt="Your Image" />
    </motion.div>
  );
};

export default ScrollReveal;