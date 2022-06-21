import Head from "next/head";

import { Hero } from "components/hero";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className={`m-full mx-auto`}>
      <Head>
        <html lang="en" />
        <title>About Me</title>
      </Head>
      <Hero />
    </div>
  );
};

export default Home;
