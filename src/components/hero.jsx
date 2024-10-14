import profilePic from "../assets/picture.png";
import { HERO_CONTENT } from "../assets/react-portfolio-assets-kevin-main/constants";
import { motion } from "framer-motion";

const hero = () => {
  return (
  <div className="border-b border-neutral-900 pb-4 lg:mb-35">
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start">
            <motion.h1 animate={{ x: 100 }} className="ml-8 pb-7 text-6xl font-thin tracking-tight lg:mt-3
         lg:text-5xl">
            Precious Aikhomu
            </motion.h1>
            <span className="ml-8 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight
            text-transparent">Software Developer</span>
            <p className="ml-8 my-2 max-w-xl py-5 font-light tracking-tighter">
          {HERO_CONTENT}
            </p>
        </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-2">
        <div className="flex justify-center">
            <img className="ml-16 size-80" src={profilePic} alt="Precious Aikhomu" />
        </div>
        </div>
    </div>
  </div>
  );
};

export default hero