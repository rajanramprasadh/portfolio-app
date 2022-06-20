import Image from "next/image";

import portfolioProfile from "public/portfolio_profile_img.jpg";
import ProfileCard from "components/hero/profile-card/profile-card";

import style from "./hero.module.css";

function Hero() {
  return (
    <div
      className={`w-full h-[800px] mx-auto transition-all duration-500 bg-[#F1F1F1] dark:bg-gray-900`}
    >
      <div className="flex flex-col p-20 justify-venter items-center">
        {/* <div className="w-1/2 px-20">
          <h1 className="text-5xl md:text-9xl text-logo-blue font-bold py-20 text-center md:text-left">
            About Me.
          </h1>
        </div>
        <div className="w-1/2 border-4 border-white">
          <Image src={portfolioProfile} className="object-contain" alt="Ram Prasadh Varadharajan"></Image>
        </div> */}
        <div>
          <h1 className="text-5xl md:text-9xl text-logo-blue font-bold py-20 text-center md:text-left">
            About Me.
          </h1>
        </div>
        <ProfileCard imgSrc={portfolioProfile} />
      </div>
    </div>
  );
}

export default Hero;
