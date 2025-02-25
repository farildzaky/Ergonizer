"use client";

import { useEffect, useRef } from "react";
import sponsor from "../Assets/sponsor.svg";
import Image from "next/image";
import useMeasure from "react-use-measure";
import { motion } from "framer-motion";
import { useMotionValue } from "framer-motion";

const images = [sponsor, sponsor, sponsor, sponsor, sponsor, sponsor];

const Animasi = () => {
  
  const [ref, { width }] = useMeasure();
 
  const xTranslation = useMotionValue(0);
 
  const lastScrollDirectionRef = useRef(1);

  
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      if (delta > 0) {
        lastScrollDirectionRef.current = 1; 
      } else if (delta < 0) {
        lastScrollDirectionRef.current = -1; 
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  useEffect(() => {
    if (width === 0) return; 
    
    const sectionWidth = width / 2;
    const speed = 100; 
    let lastTimestamp: number | null = null;

    const update = (timestamp: number) => {
      if (lastTimestamp === null) {
        lastTimestamp = timestamp;
      }
      const dt = (timestamp - lastTimestamp) / 1000; 
      lastTimestamp = timestamp;

      
      const direction = lastScrollDirectionRef.current;
     
      let newX = xTranslation.get() + -direction * speed * dt;

     
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
        
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`sponsor${index + 1}`}
            className=""
          />
        ))}

        
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
