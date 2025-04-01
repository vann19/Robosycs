import React from "react";
import localFont from "next/font/local";
import Iot from "../iot.svg";
import Image from "next/image";

const Megabeat = localFont({
  src: ".././fonts/Megabeat.woff2",
});


const HeroHomepage = () => {
  return (
    <div className={`relative w-full h-screen flex ${Megabeat.className} items-center justify-center"`}>
      <div className="w-full h-full">
        <video autoPlay loop muted playsInline className="w-full max-h-[70vh] object-cover" preload="metadata">
          <source src="/video/tes.mp4" type="video/mp4" />
        </video>
        <div className="flex justify-center md:lg:mx-[100px] lg:mx-[400px] py-4 mx-10 -my-8  bg-robotika rounded-2xl relative shadow-secondary shadow-md  ">
          <div className=" gap-4 justify-center items-center ">
            <h1 className=" font-semibold text-xl bg-gradient-to-r from-secondary to-purple-600 text-transparent bg-clip-text" style={{ letterSpacing: "1.5px" }}>
              JUMLAH TIM YANG SUDAH TERDAFTAR
            </h1>
            <div className=" flex col-2 ">
              <div className="py-3 justify-start items-start">
                <ul className="text-2xl font-semibold col-2">
                  <li className="text-lg text-secondary px-9" style={{ letterSpacing: "3px" }}>
                    IoT
                  </li>
                  <Image src={Iot} alt="logo" width={50} height={50} className="text-white"/>
                  {/* sampai sini */}

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHomepage;
