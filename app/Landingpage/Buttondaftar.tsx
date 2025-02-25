"use client";

import { useRouter } from "next/navigation";
import Button from "../Components/Button";
import Image from "next/image";
import arrow from "../Assets/icon/arrowright.svg";
const Buttondaftar = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/Register");
  };

  return (
    <Button
      text="Daftar Sekarang"
      onClick={handleClick}
      className="bg-white text-black max-w-[189px] w-full px-[16px] flex items-center justify-center gap-[12px]"
    >
      <Image src={arrow} alt="arrow-r" className="" />
    </Button>
  );
};
export default Buttondaftar;
