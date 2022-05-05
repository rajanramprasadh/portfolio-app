import Image from "next/image";

import portfolioProfile from "public/portfolio_profile_img.jpg";

import style from "./hero.module.css";

function Hero() {
  return (
    <div
      className={`w-full h-[800px] mx-auto transition-all duration-500 bg-[#F1F1F1] dark:bg-gray-900`}
    >
      <div className="flex flex-col md:flex-row p-20">
        <div className="w-1/2 px-20">
          <h1 className="text-5xl md:text-9xl text-logo-blue font-bold py-20 text-center md:text-left">
            About Me.
          </h1>
        </div>
        <div className="w-1/2 px-20">
          <Image src={portfolioProfile} alt="Ram Prasadh Varadharajan"></Image>
        </div>
      </div>
    </div>
  );
}

export default Hero;
