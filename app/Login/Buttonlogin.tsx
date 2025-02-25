"use client"

import { useRouter } from "next/navigation";
import Button from "../Components/Button";

const Buttonlogin = () => {

    const router = useRouter();

    const handleClick = () => {
        router.push('/Dashboard')
    }
    return (
        <div >
            <Button
                text="Masuk"
                onClick={handleClick}
                className="bg-black text-white flex-justify-center w-full"
                />
        </div>
    
    );
};
export default Buttonlogin;