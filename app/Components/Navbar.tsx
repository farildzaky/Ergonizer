"use client";

import ScrollLink from "react-scroll/modules/components/Link";
import logo from "../Assets/logo.svg";
import Image from "next/image";
import Navbarbutton from "./Navbarbutton";

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-white text-black rounded-[40px] px-[32px] py-[16px] flex mt-[36px] justify-between w-full items-center max-w-[1240px] max-h-[86px] h-full">
        <Image src={logo} alt="logo" />
        <ul className="flex gap-[30px] w-full max-w-[513px]">
          <li>
            <ScrollLink 
              to="Home" 
              smooth={true} 
              duration={200} 
              spy={true} 
              offset={-100} 
              activeClass="active-link" 
              className="cursor-pointer hover:bg-[#FBBA18] p-2 rounded-lg"
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink 
              to="Fitur" 
              smooth={true} 
              duration={200} 
              spy={true} 
              offset={-200} 
              activeClass="active-link" 
              className="cursor-pointer hover:bg-[#FBBA18] p-2 rounded-lg"
            >
              Fitur
            </ScrollLink>
          </li>
          <li>
            <ScrollLink 
              to="Tentang Kami" 
              smooth={true} 
              duration={200} 
              spy={true} 
              offset={-250} 
              activeClass="active-link" 
              className="cursor-pointer hover:bg-[#FBBA18] p-2 rounded-lg"
            >
              Tentang Kami
            </ScrollLink>
          </li>
          <li>
            <ScrollLink 
              to="Kontak" 
              smooth={true} 
              duration={200} 
              spy={true} 
              offset={-200} 
              activeClass="active-link" 
              className="cursor-pointer hover:bg-[#FBBA18] p-2 rounded-lg"
            >
              Kontak
            </ScrollLink>
          </li>
          <li>
            <ScrollLink 
              to="Bergabung" 
              smooth={true} 
              duration={200} 
              spy={true} 
              offset={-100} 
              activeClass="active-link" 
              className="cursor-pointer hover:bg-[#FBBA18] p-2 rounded-lg"
            >
              Bergabung
            </ScrollLink>
          </li>
        </ul>
        <Navbarbutton />
      </div>
    </div>
  );
};

export default Navbar;
