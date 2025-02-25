"use client"; // Jika Anda menggunakan Next.js 13+ dengan app router (opsional)
import React, { useState, useEffect } from "react";
import Image from "next/image";
import hero from "../Assets/hero.svg";
import Logo from "../Assets/logo.svg";
import google from "../Assets/google.svg";
import apple from "../Assets/apple.svg";
import hide from "../Assets/hide.svg"; // Ikon mata tertutup
import show from "../Assets/show.svg"; // Ikon mata terbuka
import Link from "next/link";

const Formregister = () => {
  // State untuk toggle password
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  // State untuk ingat akun
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  // Ambil status rememberMe dari localStorage saat component di-mount
  useEffect(() => {
    const storedRememberMe = localStorage.getItem("rememberMe");
    if (storedRememberMe) {
      setRememberMe(JSON.parse(storedRememberMe));
    }
  }, []);

  // Fungsi untuk toggle password
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  // Fungsi untuk handle perubahan checkbox "ingat akun"
  const handleRememberMeChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = e.target.checked;
    setRememberMe(newValue);
    localStorage.setItem("rememberMe", JSON.stringify(newValue));
  };

  return (
    <div className="flex w-full justify-between">
      {/* Bagian kiri */}
      <div
        id="sisi_kiri"
        className="w-full max-w-[497px] mx-auto my-auto flex-col gap-[40px] flex"
      >
        <Image src={Logo} alt="Logo" className="" />
        <div className="flex flex-col gap-[12px]">
          <h1 className="font-semibold text-[32px] leading-[38.4px] text-[#121926]">
            Masuk ke Ergonize
          </h1>
          <p className="text-[16px] leading-[22.4px] text-[#697586]">
            Masuk dengan akun yang telah terdaftar
          </p>
        </div>

        <div className="flex flex-row gap-[24px]">
          <div
            id="google"
            className="flex flex-row items-center gap-[8px] border-2 px-[16px] py-[12px] rounded-[8px]"
          >
            <Image src={google} alt="google" />
            <p>Masuk dengan Google</p>
          </div>
          <div
            id="apple"
            className="flex flex-row items-center gap-[8px] border-2 px-[16px] py-[12px] rounded-[8px]"
          >
            <Image src={apple} alt="apple" />
            <p>Masuk dengan Apple</p>
          </div>
        </div>

        <div
          id="pembatas"
          className="flex flex-row items-center gap-[8px] w-full max-w-[497px]"
        >
          <div className="w-full max-w-[170.5px] h-[1px] rounded-[100px] bg-[#E3E8FF]"></div>
          <div className="text-[16px] text-[#697586] leading-[22.4px] whitespace-nowrap">
            Atau dengan email
          </div>
          <div className="w-full max-w-[170.5px] h-[1px] rounded-[100px] bg-[#E3E8FF]"></div>
        </div>

        


        <div className="flex flex-col gap-[32px]">

        <div className="flex flex-col gap-[8px]">
            <label
              htmlFor="nama"
              className="text-[16px] font-medium text-[#121926]"
            >
              Email
            </label>
            <input
              type="text"
              placeholder="Masukkan nama"
              className="w-full max-w-[497px] border-2 rounded-[8px] px-[16px] py-[12px]"
            />
          </div>

          {/* Input Email */}
          <div className="flex flex-col gap-[8px]">
            <label
              htmlFor="email"
              className="text-[16px] font-medium text-[#121926]"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Masukkan email"
              className="w-full max-w-[497px] border-2 rounded-[8px] px-[16px] py-[12px]"
            />
          </div>

          {/* Input Password */}
          <div className="flex flex-col gap-[16px]">
            <div className="flex flex-col gap-[8px]">
              <div className="flex flex-row justify-between items-center">
                <label
                  htmlFor="Password"
                  className="text-[16px] font-medium text-[#121926]"
                >
                  Password
                </label>
                <p className="text-[#697586] text-[14px] cursor-pointer">
                  Lupa Password?
                </p>
              </div>

              {/* Wrapper input password + ikon */}
              <div className="relative w-full max-w-[497px]">
                <input
                  type={isPasswordVisible ? "text" : "password"} // Pakai state untuk toggle
                  placeholder="Masukkan Password"
                  className="w-full border-2 rounded-[8px] px-[16px] py-[12px] pr-[40px]"
                />
                <Image
                  src={isPasswordVisible ? hide : show}
                  alt="Toggle Password"
                  className="absolute top-1/2 right-4 w-[24px] h-[24px] -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              </div>
            </div>

            <div className="flex flex-row gap-[8px] justify-start">
              <input
                type="checkbox"
                className="w-[24px] h-[24px]"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <p className="text-[16px]">Setuju dengan</p>
              <p className="text-[16px] text-[#121926] cursor-pointer font-medium">S&K</p>
            </div>
          </div>
        </div>

        {/* Tombol Masuk & Link Daftar */}
        <div className="flex flex-col gap-[32px]">
          <Link href={"/Login"}>
            <button className="flex justify-center bg-[#121926] w-full py-[16px] px-[24px] text-white rounded-[8px]">
              Daftar
            </button>
          </Link>
          <div className="flex flex-row gap-[4px]">
            <h1 className="text-[#697586]">Sudah memiliki akun?</h1>
            <Link href={"/Login"}><p className="text-[#121926] cursor-pointer">Masuk</p></Link>
          </div>
        </div>
      </div>

      {/* Sisi kanan: Hero Image */}
      <div
        id="sisi_kanan"
        className="hidden xl:flex items-center justify-center"
      >
        <Image
          src={hero}
          alt="hero"
          className="h-[960px] flex-shrink-0 w-auto"
        />
      </div>
    </div>
  );
};

export default Formregister;
