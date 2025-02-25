import animate from "../../Assets/LIDM/animate.svg";
import Image from "next/image";
const Lidm = () => {
  return (
    <div className="bg-orange-400 overflow-hidden">
      <div className="absolute top-0 bg-orange-100 left-0 w-full h-full overflow-hidden ">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-yellow-500 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-red-400 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="absolute left-0 bottom-0">
      <Image src={animate} alt="animate1" className="w-full max-w-[500px]" />
      </div>
      <h1>Hi</h1>
    </div>
  );
};
export default Lidm;
