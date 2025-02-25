import Image from "next/image";
import hero from "../Assets/hero.svg"


const Signin = () => {
    return(
        <div className="flex justify-around">
            <div id="sisi_kiri">

            </div>

            <div id="sisi_kanan">
                <Image
                src={hero}
                alt="hero"
                className=""
                />
            </div>
        </div>    
    )
}
export default Signin;