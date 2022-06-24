import { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";

interface PortFolioCardsProps {
  imgSrc: StaticImageData;
}

function ProfileCard({ imgSrc }: PortFolioCardsProps) {
  return (
    <div className="flex flex-col-reverse xl:flex-row justify-center items-center py-10 w-100 h-2/4 md:w-1/2 md:h-2/4 bg-white rounded-md shadow-md xl:divide-x-2 xl:divide-slate-800 xl:dark:divide-slate-100 dark:bg-slate-800 transition-colors duration-500">
      <div className="text-black dark:text-white px-10 transition-colors duration-500">
        <h1 className="text-3xl xl:text-5xl text-logo-blue font-bold pb-4 text-center xl:text-right">
          Ram Prasadh Varadharajan
        </h1>
        <div className="transition-all duration-500 h-0.5 bg-gray-400"></div>
        <p className="text-2xl text-center xl:text-right mt-2">
          React Developer
        </p>
        <div className="text-center xl:text-right">
          <pre>(Sr. Frontend Developer)</pre>
        </div>
      </div>
      {/* <div className="transition-all duration-500 w-0.5 h-auto bg-slate-800 dark:bg-slate-100"></div> */}
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
