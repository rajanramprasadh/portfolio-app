export default function Custom404() {
  return (
    <>
      <div className="transition-all duration-500 bg-[#F1F1F1] dark:bg-gray-900 h-screen align-center flex flex-row items-center justify-center mx-auto">
        <div>
          <h1 className="inline-block border-r border-gray-500 p-8 text-2xl align-top">
            404
          </h1>
        </div>
        <div className="inline-block text-left align-middle leading-[49px] h-[49px]">
          <h2 className="text-base font-normal leading-[49px] m-0 px-8 py-0">
            This page could not be found
          </h2>
        </div>
      </div>
    </>
  );
}
