export default function Adventages() {
  return (
    // <div className="bg-secondary-default rounded-lg  flex justify-center mb-[60px] relative">
    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[200px]   m-auto">
    //     <div className="grid grid-cols-4 gap-4 border border-black  w-[1410px]">
    //       <div className=" border border-black">01</div>
    //       <div className=" border border-black">01</div>
    //       <div className=" border border-black">01</div>
    //     </div>
    //   </div>
    // </div>
    <div className="relative bg-secondary-default  p-30 mt-[130px] mb-[100px] py-6 w-full flex center items-center m-auto bg-primary-light">
      <div className="w-[1000px] flex center items-center m-auto">
        <div className="grid grid-cols-3 gap-4 w-full relative z-10 items-center  rounded-full bg-fcf5eb text-base">
          <a
            href="#"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src="/docs/images/blog/image-4.jpg"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </a>
          <div className=" p-8 flex items-center gap-x-10 cursor-pointer border border-gray-300 "></div>
          <div className=" p-8 flex items-center gap-x-10 cursor-pointer border border-gray-300"></div>
          <div className=" p-8 flex items-center gap-x-10 cursor-pointer border border-gray-300"></div>
        </div>
      </div>
    </div>
  );
}
