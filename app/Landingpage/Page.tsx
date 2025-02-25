

import bg from "../Assets/bg.svg";
import Image from "next/image";
import Navbar from "../Components/Navbar";
import image from "../Assets/image.svg";
import sponsor from "../Assets/sponsor.svg";
import text from "../Assets/text.svg";
import tugas from "../Assets/tugas.svg";
import todo from "../Assets/todo.svg";
import dash from "../Assets/dash.svg";
import kolab from "../Assets/kolab.svg";
import example1 from "../Assets/example.svg";
import example2 from "../Assets/example_2.svg";
import profile from "../Assets/profile.svg";
import contoh from "../Assets/contoh.svg";
import Buttonsubs from "./Buttonsubs";
import bg_2 from "../Assets/bg_2.svg";
import sign from "../Assets/sign.svg";
import Footer from "../Components/Footer";
import Buttondaftar from "./Buttondaftar";
import Animasi from "./Animasisponsor";

const images = [sponsor, sponsor, sponsor, sponsor, sponsor, sponsor];
const example = [example1, example2];
const Landingpage = () => {
  return (
    <div className="h-full">
      <div className="relative min-h-screen flex flex-col justify-center items-center" id="Home">
        <Image
          src={bg}
          alt="background"
          className="min-h-screen w-screen object-cover"
        />
        <div className="absolute top-0 flex justify-center flex-col">
          <div className="fixed top-0 w-full right-0 left-0 z-20">
            <Navbar />
          </div>
          <div className="flex flex-col items-center justify-center text-white">
            <h1 className="text-[48px] font-bold text-white mt-[186px] leading-[52.8px] w-full max-w-[867px] text-center">
              Jelajahi Pengalaman Manajemen Tim Dengan Mudah!
            </h1>
            <p className="w-full max-w-[657px] mt-[50px] font-normal text-center text-[16px] leading-[22.4px]">
              Ingin manajemen tim lebih efisien? Gunakan aplikasi kami! Kelola
              tugas, atur prioritas, dan kolaborasi dengan mudah untuk hasil
              optimal. Mulai sekarang!
            </p>
          </div>
          <Image
            src={image}
            alt="image1"
            className="max-w-full  object-fit mt-[50px]"
          />
        </div>
      </div>
     <Animasi/>
      <div className="bg-[#121926] min-h-screen relative z-10 flex justify-center items-center" id="Fitur">
        <div className="w-full max-w-[1203px] flex-col justify-center items-center ">
          <div className="flex justify-between">
            <Image src={tugas} alt="tugas" />
            <Image src={todo} alt="todo" className="mt-10" />
          </div>
          <div className="flex justify-center">
            <Image src={text} alt="text" className="mt-5" />
          </div>
          <div className="flex justify-between ">
            <Image src={dash} alt="dash" className="mt-10" />
            <Image src={kolab} alt="kolab" className="mt-[-100px] mr-[30px]" />
          </div>
        </div>
      </div>

      <div className="mt-[3rem] flex-col" id="Tentang Kami">
        <div className=" max-w-[1240px] w-full mx-auto">
          <div className="flex justify-between items-center gap-[60px]">
            <h1 className="text-[48px] font-bold leading-[52.8px] w-full max-w-[524px]">
              Mengenali Lebih Jauh Tentang Kami!
            </h1>
            <p className="font-normal text-[16px] leading-[22.4px] w-full max-w-[634px] text-[#697586]">
              Ingin tahu lebih banyak tentang kami? Temukan siapa kami, misi
              kami, dan bagaimana kami dapat membantu Anda. Jelajahi layanan dan
              solusi kami yang dirancang untuk kebutuhan Anda!
            </p>
          </div>

          <div className="flex justify-between mt-10">
            {example.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`example1${index + 1}`}
                className=""
              />
            ))}
          </div>

          <div className="mt-10 justify-between flex">
            <div className="gap-[83px] flex w-full max-w-[523px]">
              <div className="flex-col flex gap-[20px]">
                <h1 className="text-[40px] font-semibold leading-[44px]">
                  17+
                </h1>
                <h1 className="text-[24px] font-semibold leading-[28.8px]">
                  Penghargaan
                </h1>
                <p className="font-normal text-[16px] leading-[22.4px] text-[#697586]">
                  Kami telah dianugerahi 17+ penghargaan berharga yang
                  bervariasi
                </p>
              </div>

              <div className="flex-col flex gap-[20px]">
                <h1 className="text-[40px] font-semibold leading-[44px]">
                  27+
                </h1>
                <h1 className="text-[24px] font-semibold leading-[28.8px]">
                  Klien
                </h1>
                <p className="font-normal text-[16px] leading-[22.4px] text-[#697586]">
                  Kami telah dipercaya oleh lebih dari 40 klien dari seluruh
                  sektor industri.
                </p>
              </div>
            </div>

            <div className="flex-col w-full max-w-[634px] flex gap-[40px]">
              <h1 className="font-medium text-[20px] leading-[24px]">
                Ingin tahu tentang kami? Kami tim berkomitmen untuk solusi
                terbaik, menciptakan inovasi dari layanan pelanggan hingga
                produk berkualitas tinggi.
              </h1>
              <div className="text-[16px] font-medium flex flex-col gap-[40px] text-[#697586]">
                <p>
                  Ingin tahu lebih banyak tentang kami? Kami adalah tim yang
                  berdedikasi untuk memberikan solusi terbaik bagi kebutuhan
                  Anda. Misi kami adalah menciptakan inovasi yang mempermudah
                  hidup Anda. Dari layanan pelanggan yang responsif hingga
                  produk berkualitas tinggi, kami selalu berusaha memberikan
                  yang terbaik.
                </p>
                <p>
                  Tim kami terdiri dari para ahli di bidangnya, siap membantu
                  Anda mencapai tujuan dengan cara yang efisien dan efektif.
                  Kami percaya bahwa dengan kolaborasi dan komunikasi yang baik,
                  setiap tantangan bisa diatasi. Jelajahi layanan dan solusi
                  kami yang dirancang khusus untuk memenuhi kebutuhan unik Anda.
                </p>
              </div>
              <div className="flex items-center gap-[16px] ">
                <Image src={profile} alt="profile" />
                <div className="flex flex-col gap-[4px]">
                  <h1 className="font-semibold text-[20px] leading-[24px]">
                    John Doe
                  </h1>
                  <p className="text-[16px] leading-[22.4px] text-[#697586]">
                    Founder
                  </p>
                </div>
              </div>

              <h1 className="font-medium text-[20px] leading-[24px]">
                "Mengenal kami lebih dekat berarti memahami dedikasi kami untuk
                memberikan solusi inovatif dan layanan terbaik, karena kebutuhan
                Anda adalah prioritas utama kami."
              </h1>
            </div>
          </div>


          <div className="mt-10" >
            <Image src={contoh} alt="contoh" />
          </div>

          <div className="bg-[#F4F5F7] p-[48px]" id="Kontak">
            <div className="flex items-center gap-[93px]">
              <div className="flex flex-col gap-[16px] w-full max-w-[526px]">
                <h1>Hubungi Tim Pemasaran Kami</h1>
                <p>
                  Dapatkan informasi tentang diskon, event dan penawaran menarik
                  lainnya melalui email pribadi anda.
                </p>
              </div>
              <Buttonsubs />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 relative">
        <Image src={bg_2} alt="bg_2" className="w-full h-full  z-0 " />

        <div className="absolute inset-0 flex items-center justify-center z-10 text-white" id="Bergabung">
          <div className="flex w-full max-w-[1260px] justify-between">
            <div className="flex flex-col gap-[32px] w-full max-w-[523px]">
              <h1 className="text-[32px] font-semibold">
                Bergabung untuk memanfaatkan fitur menakjubkan dari ergonize
              </h1>
              <p className="font-medium text-[16px]">
                Bergabunglah untuk merasakan keajaiban fitur Ergonize yang
                menghadirkan pengalaman luar biasa dan solusi yang inovatif bagi
                Anda.
              </p>
            <Buttondaftar/>
            </div>
            <div>
              <Image src={sign} alt="sign" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landingpage;
