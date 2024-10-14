import logo from "../assets/logo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";

const Navbar = () => {
  return (
  <nav className="mb-20 flex items-center flex-wrap px-4 md:px-8 justify-between py-6">
    <div className="flex item-center">
        <img className="mx-2 w-32 md:w-48" src={logo} alt="logo" />
    </div>
    <div className=" mt-4 flex items-center w-full justify-center gap-4 text-xl md:mt-0 md:w-auto md:text-2xl lg:text-3xl">
    <a
          href="https://www.linkedin.com/in/precious-aikhomu/"
          target="_blank"
          rel="noopener noreferrer"
        >
        <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/precious_aikhomu?igsh=MTZ1dXVxaXFwbWIwbw=="
          target="_blank"
          rel="noopener noreferrer"
        >
        <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/share/1B5yd3tkKz/"
          target="_blank"
          rel="noopener noreferrer"
        >
        <FaFacebook />
        </a>
        <a
          href="https://x.com/preciousaikhomu?t=Gihdjcjs0euWl0Fk8U_IxA&s=09"
          target="_blank"
          rel="noopener noreferrer"
        >
        <FaSquareXTwitter />
        </a>
    </div>
  </nav>
  );
};

export default Navbar;