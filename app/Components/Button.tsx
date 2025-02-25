'use client';

import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className = "", children }) => {
  return (
    <button
      onClick={onClick}
      className={` py-[16px] rounded-[8px] ${className}`}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
