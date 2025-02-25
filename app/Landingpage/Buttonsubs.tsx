'use client'

import { useState } from "react"
import arrow from "../Assets/icon/arrowright.svg"
import Image from "next/image"

const Buttonsubs = () => {
    const [email, setEmail] = useState("");

    // Fungsi untuk memeriksa format email menggunakan RegExp
    const isValidEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = () => {
        if (!email.trim()) {
            alert("Mohon masukkan email terlebih dahulu.");
            return;
        }

        if (!isValidEmail(email)) {
            alert("Format email tidak valid. Harap masukkan email yang benar.");
            return;
        }

        console.log("Email terkirim:", email);
        alert(`Email ${email} berhasil dikirim!`); // Konfirmasi email berhasil dikirim
        setEmail(""); // Mengosongkan input setelah pengiriman
    };

    return (
        <div className="flex rounded-[8px] max-w-[545px] w-full h-[48px]">
            <input
                type="email"
                placeholder="Masukkan email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-full rounded-[8px] pl-3 border border-transparent outline-none"
            />

            <button 
                className="bg-[#FBBA18] rounded-tr-[8px] rounded-br-[8px] p-[12px]"
                onClick={handleSubmit}
            >
                <Image src={arrow} alt="arrow" />
            </button>
        </div>
    )
}

export default Buttonsubs;
