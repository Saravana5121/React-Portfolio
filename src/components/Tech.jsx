import { RiReactjsLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiRedux } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";

const Tech = () => {
  return (
    <div className="border-b border-neutral-400 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap item-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-400 p-4 bg-neutral-600">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-400 p-4 bg-neutral-600">
          <SiTailwindcss className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-400 p-4 bg-neutral-600">
          <TbBrandFramerMotion className="text-7xl text-pink-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-400 p-4 bg-neutral-600">
          <SiRedux className="text-7xl text-purple-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-400 p-4 bg-neutral-600">
          <SiExpress className="text-7xl text-slate-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-400 p-4 bg-neutral-600">
          <FaNodeJs className="text-7xl text-green-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-400 p-4 bg-neutral-600">
          <SiMongodb className="text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-400 p-4 bg-neutral-600">
          <SiMysql className="text-7xl text-blue-500" />
        </div>
      </div>
    </div>
  );
};

export default Tech;
