import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const path = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 1.6,
      ease: "easeInOut",
    },
  },
};

export default function LogoOutline() {
  return (
    <motion.svg
      viewBox="0 0 798 290"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      {/* 👇 SEU SVG, só removi fill e classe */}
      {SVG_PATHS.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          variants={path}
          fill="none"
          stroke="#9d4edd"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            filter: "drop-shadow(0 0 6px #9d4edd)",
          }}
        />
      ))}
    </motion.svg>
  );
}
