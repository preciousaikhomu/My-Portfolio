import profilePic from "../assets/picture.png";
import { HERO_CONTENT } from "../assets/react-portfolio-assets-kevin-main/constants";
import { motion } from "framer-motion";

const container = (delay) => ({
   hidden: {x: -100, opacity: 0},
   visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 0.5, delay: delay},
   },
});

const hero = () => {
  return (
  <div className="border-b border-neutral-900 pb-4 lg:mb-35">
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
            variants={container (0)}
            initial="hidden"
            animate="visible"
            className="ml-8 pb-8 text-6xl font-thin tracking-tight lg:mt-4  
         lg:text-6xl">
            Precious Aikhomu
            </motion.h1>
            <motion.span 
             variants={container (0.5)}
             initial="hidden"
             animate="visible"
             className="ml-8 md: mr-16 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight
            text-transparent">Software Developer</motion.span>
            <motion.p 
             variants={container (1)}
             initial="hidden"
             animate="visible"
             className="ml-8 my-2 max-w-xl py-5 font-light tracking-tighter">
          {HERO_CONTENT}
            </motion.p>
        </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-2">
        <div className="flex justify-center">
            <motion.img initial={{x:100, opacity: 0}}
            animate={{x:0, opacity: 1}}
            transition={{duration: 1, delay: 1.2}}
             className="w-60 h-auto md:w-80 lg:w-96 object-contain" src={profilePic} alt="Precious Aikhomu" />
        </div>
        </div>
    </div>
  </div>
  );
};

export default hero