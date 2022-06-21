import Head from "next/head";

interface UnderConstructionProps {
  title: string;
}

function UnderConstruction({ title }: UnderConstructionProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="transition-all duration-500 bg-[#F1F1F1] dark:bg-gray-900 h-screen align-center flex flex-row items-center justify-center mx-auto">
        <div>
          <h1 className="inline-block border-r border-gray-500 p-8 text-2xl align-top">
            {title}
          </h1>
        </div>
        <div className="inline-block text-left align-middle leading-[49px] h-[49px]">
          <h2 className="text-base font-normal leading-[49px] m-0 px-8 py-0">
            Under Construction
          </h2>
        </div>
      </div>
    </>
  );
}

export default UnderConstruction;
