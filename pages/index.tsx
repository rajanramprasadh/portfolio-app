import { Hero } from "components/hero";
import Card from "components/ui/card";
import type { NextPage } from "next";
import Image from "next/image";

import portfolioProfile from "../public/portfolio_profile_img.jpg";

const Home: NextPage = () => {
  return (
    <div className={`m-full mx-auto`}>
      {/* <Image src={portfolioProfile} alt="Ram Prasadh Varadharajan"></Image> */}
      <Hero />
    </div>
  );
};

export default Home;
