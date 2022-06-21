import { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";

interface PortFolioCardsProps {
  imgSrc: StaticImageData;
}

function ProfileCard({ imgSrc }: PortFolioCardsProps) {
  return (
    <div className="flex flex-col-reverse xl:flex-row justify-center items-center py-10 w-100 h-2/4 md:w-1/2 md:h-2/4 bg-white rounded-md xl:divide-x-2 xl:divide-slate-800 xl:dark:divide-slate-100 shadow-md dark:bg-slate-800 transition-colors duration-500">
      <div className="text-black dark:text-white px-10 divide-y-2 divide-gray-400 transition-colors duration-500">
        <h1 className="text-3xl xl:text-5xl text-logo-blue font-bold pb-4 text-center xl:text-right">
          Ram Prasadh Varadharajan
        </h1>
        <p className="text-2xl text-center xl:text-right">
          React Developer <br /> (Sr Frontend Developer)
        </p>
      </div>
      <div className="text-black px-10">
        <div className="w-40 xl:w-80 h-auto">
          <Image
            src={imgSrc}
            alt="Ram Prasadh Varadharajan Profile Picture"
            className="object-cover rounded-full max-w-full h-auto align-middle border-none"
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
