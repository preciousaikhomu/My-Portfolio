import { RiReactjsLine} from "react-icons/ri";
import { TbBrandNextjs} from "react-icons/tb";
import { SiMongodb} from "react-icons/si";
import { FaNodeJs} from "react-icons/fa";
import { IoLogoJavascript} from "react-icons/io";
import { FaHtml5} from "react-icons/fa";
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
    <h1 className="my-20 text-center text-4xl">Technologies</h1>
    <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandNextjs className="text-7xl"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-7xl text-green-500"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <IoLogoJavascript className="text-7xl text-yellow-300"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className="text-7xl text-green-500"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaHtml5 className="text-7xl text-red-700"/>
        </div>
    </div>
    </div>
  )
}

export default Technologies