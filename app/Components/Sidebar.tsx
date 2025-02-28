"use client";

import { useState } from "react";
import Image from "next/image";

import logo from "../Assets/logodash.svg";
import butterfly from "../Assets/icon/butterfly.svg";
import search from "../Assets/icon/search.svg";
import dashboard from "../Assets/icon/dashboard.svg";
import sampah from "../Assets/icon/sampah.svg";
import arrowright from "../Assets/icon/arrowright_2.svg";
import workspace from "../Assets/icon/workspace.svg";
import setting from "../Assets/icon/setting.svg";
import dashboard_2 from "../Assets/icon/dashboard_2.svg";
import workspace_2 from "../Assets/icon/workspace_2.svg";
import setting_2 from "../Assets/icon/setting_2.svg";
import sampah_2 from "../Assets/icon/sampah_2.svg";

const Sidebar = () => {
 
  const [activeMenu, setActiveMenu] = useState("dashboard");

  return (
    <div className="relative flex bg-[#121926] h-screen p-[32px] flex-col">
      <div className="flex flex-col gap-[40px]">
        
        <Image src={logo} alt="logo" />

        
        <div className="flex flex-row items-center p-[12px] rounded-[8px] gap-[8px] bg-[#F4F5F70D]">
          <Image src={search} alt="search" className="cursor-pointer" />
          <input
            type="text"
            placeholder="Cari sesuatu"
            className="bg-transparent focus:outline-none text-white flex-1 w-full max-w-[145px]"
          />
          <div className="flex flex-row items-center justify-center gap-[8px] w-full max-w-[71px]">
            <Image
              src={butterfly}
              alt="butterfly"
              className="cursor-pointer border-transparent bg-[#F0F0F00D] p-[8px] rounded-[8px] w-[31px] h-[31px]"
            />
            <p className="cursor-pointer border-transparent bg-[#F0F0F00D] p-[8px] rounded-[8px] w-[31px] h-[31px] text-white text-[12px] font-medium leading-[14.52px] text-center">
              K
            </p>
          </div>
        </div>

       
        <div className="flex flex-col gap-[16px]">
          
          <div
            className={`rounded-[8px] p-[16px] flex flex-row gap-[8px] items-center cursor-pointer ${
              activeMenu === "dashboard" ? "bg-[#FBBA18]" : ""
            }`}
            onClick={() => setActiveMenu("dashboard")}
          >
            <Image src={activeMenu === "dashboard" ? dashboard : dashboard_2} alt="icon-dashboard"  />
            <p
              className={`text-base font-medium leading-[22.4px] ${
                activeMenu === "dashboard" ? "text-black" : "text-white"
              }`}
            >
              Dashboard
            </p>
          </div>

          
          <p className="text-sm font-medium leading-[19.6px] text-white cursor-default">
            Menu
          </p>

          
          <div
            className={`rounded-[8px] p-[16px] flex flex-row gap-[8px] items-center cursor-pointer ${
              activeMenu === "workspace" ? "bg-[#FBBA18]" : ""
            }`}
            onClick={() => setActiveMenu("workspace")}
          >
            <Image src={activeMenu === "workspace" ? workspace : workspace_2} alt="icon-workspace" />
            <p
              className={`text-base font-reguler leading-[22.4px] w-full max-w-[151px] ${
                activeMenu === "workspace" ? "text-black" : "text-white"
              }`}
            >
              Workspace
            </p>
            <p className={` text-xs font-semibold leading-[14.52px] border border-transparent  h-[23px] w-[24px] p-[4] rounded-[100px] items-center justify-center flex ${activeMenu === "workspace" ? " text-[#121926] bg-[#1219261A]" : "text-[#FB5329] bg-[#FB53291A]"}`}>
              2
            </p>
            <Image src={arrowright} alt="icon-arrowright" />
          </div>

          
          <div
            className={`rounded-[8px] p-[16px] flex flex-row gap-[8px] items-center cursor-pointer ${
              activeMenu === "sampah" ? "bg-[#FBBA18]" : ""
            }`}
            onClick={() => setActiveMenu("sampah")}
          >
            <Image src={activeMenu === "sampah" ? sampah : sampah_2} alt="icon-sampah" />
            <p
              className={`text-base font-medium leading-[22.4px] ${
                activeMenu === "sampah" ? "text-black" : "text-white"
              }`}
            >
              Sampah
            </p>
          </div>

          
          <p className="text-sm font-medium leading-[19.6px] text-white cursor-default">
            Pengaturan
          </p>

         
          <div
            className={`rounded-[8px] p-[16px] flex flex-row gap-[8px] items-center cursor-pointer ${
              activeMenu === "setting" ? "bg-[#FBBA18]" : ""
            }`}
            onClick={() => setActiveMenu("setting")}
          >
            <Image src={activeMenu === "setting" ? setting : setting_2} alt="icon-setting" />
            <p
              className={`text-base font-medium leading-[22.4px] ${
                activeMenu === "setting" ? "text-black" : "text-white"
              }`}
            >
              Pengaturan
            </p>
          </div>
        </div>
      </div>

      
      <p className="text-white absolute bottom-[32px] ">
        v0.0.1
      </p>
    </div>
  );
};

export default Sidebar;
