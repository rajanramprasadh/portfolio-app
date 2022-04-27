import Card from "components/ui/card";
import type { NextPage } from "next";
import Image from "next/image";

import portfolioProfile from "../public/portfolio_profile_img.jpg";

const Home: NextPage = () => {
  return (
    <div className={`max-w-6xl mx-auto`}>
      <Image src={portfolioProfile} alt="Ram Prasadh Varadharajan"></Image>
    </div>
  );
};

export default Home;
