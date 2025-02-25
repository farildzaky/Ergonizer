'use client';

import { useRouter } from 'next/navigation';
import Button from './Button';

const Navbarbutton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/Login');
  };

  return (
    <Button
      text="Masuk"
      onClick={handleClick} 
      className="bg-black text-white px-[24px]"
    />
  );
};

export default Navbarbutton;
