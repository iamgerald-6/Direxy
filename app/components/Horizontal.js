"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Horizontal = ({ children, direction, height }) => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  const xTransform = useTransform(
    scrollYProgress,
    [0, 0.1, 1],
    [0, 0, direction]
  );
  return (
    <div ref={scrollRef}>
      <motion.div
        style={{
          height: height,
          zIndex: 20,
          //   position: "relative",
          translateX: xTransform,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Horizontal;
