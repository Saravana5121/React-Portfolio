import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Tech = () => {
  return (
    <div className="border-b border-neutral-400 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap item-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4 bg-neutral-600"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4 bg-neutral-600"
        >
          <SiTailwindcss className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4 bg-neutral-600"
        >
          <TbBrandFramerMotion className="text-7xl text-pink-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4 bg-neutral-600"
        >
          <SiRedux className="text-7xl text-purple-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4 bg-neutral-600"
        >
          <SiExpress className="text-7xl text-slate-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4 bg-neutral-600"
        >
          <FaNodeJs className="text-7xl text-green-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4 bg-neutral-600"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(6.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4 bg-neutral-600"
        >
          <SiMysql className="text-7xl text-blue-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Tech;
