"use client";

import { useEffect, useRef } from "react";
import sponsor from "../Assets/sponsor.svg";
import Image from "next/image";
import useMeasure from "react-use-measure";
import { motion } from "framer-motion";
import { useMotionValue } from "framer-motion";

const images = [sponsor, sponsor, sponsor, sponsor, sponsor, sponsor];

const Animasi = () => {
  // Mengukur lebar dari motion.div (yang berisi dua section gambar)
  const [ref, { width }] = useMeasure();
  // xTranslation akan diupdate secara manual menggunakan requestAnimationFrame
  const xTranslation = useMotionValue(0);
  // Ref untuk menyimpan arah scroll terakhir: 1 = scroll down (gambar bergerak ke kiri), -1 = scroll up (gambar bergerak ke kanan)
  const lastScrollDirectionRef = useRef(1);

  // Listener scroll untuk mendeteksi arah scroll dan menyimpan arah terakhir
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      if (delta > 0) {
        lastScrollDirectionRef.current = 1; // scroll down → gambar ke kiri
      } else if (delta < 0) {
        lastScrollDirectionRef.current = -1; // scroll up → gambar ke kanan
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Loop animasi yang mengupdate xTranslation berdasarkan scroll direction
  useEffect(() => {
    if (width === 0) return; // Pastikan width sudah terukur
    // Karena kita menduplikasi section, lebar satu section adalah setengah total width
    const sectionWidth = width / 2;
    const speed = 100; // Kecepatan pergerakan (pixel per detik), sesuaikan jika diperlukan
    let lastTimestamp: number | null = null;

    const update = (timestamp: number) => {
      if (lastTimestamp === null) {
        lastTimestamp = timestamp;
      }
      const dt = (timestamp - lastTimestamp) / 1000; // delta time dalam detik
      lastTimestamp = timestamp;

      // Dapatkan arah scroll terakhir (1 = scroll down, -1 = scroll up)
      const direction = lastScrollDirectionRef.current;
      // Jika scroll down, gambar bergerak ke kiri (x menurun), jika scroll up, gambar bergerak ke kanan (x bertambah)
      let newX = xTranslation.get() + -direction * speed * dt;

      // Lakukan "wrap" nilai newX agar tetap dalam rentang [-sectionWidth, 0)
      if (newX <= -sectionWidth) {
        newX += sectionWidth;
      } else if (newX > 0) {
        newX -= sectionWidth;
      }
      xTranslation.set(newX);

      requestAnimationFrame(update);
    };

    const frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, [width, xTranslation]);

  return (
    <div className="bg-[#121926] relative z-10 py-[24px] px-[16px] max-h-[72px] h-full max-w-[1606px] w-full overflow-hidden">
      <motion.div
        className="flex justify-between gap-[158px]"
        ref={ref}
        style={{ x: xTranslation }}
      >
        {/* Section 1 */}
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`sponsor${index + 1}`}
            className=""
          />
        ))}

        {/* Section 2 (duplikasi) */}
        {images.map((src, index) => (
          <Image
            key={index + images.length}
            src={src}
            alt={`sponsor${index + images.length + 1}`}
            className=""
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Animasi;
