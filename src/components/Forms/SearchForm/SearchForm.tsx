export default function SearchForm() {
  return (
    <div className="relative  rounded-full p-30 mt-[130px] mb-[100px] py-6 w-[1050px] flex center items-center m-auto bg-primary-light">
      <div className="w-[1000px] flex center items-center m-auto">
        <div className="grid grid-cols-3 gap-4 w-full relative z-10 items-center  rounded-full bg-fcf5eb text-base">
          <label className="rounded-l-lg  flex items-center gap-x-10 cursor-pointer border border-black">
            <select
              className="border rounded-l-full   border-gray-400 py-6 rounded-none text-gray-500 text-base bg-transparent w-full b inline-block  "
              defaultValue="default"
            >
              <option value="default" className="text-gray-500">
                where are you going to go?
              </option>
              <option value="checkin"></option>
              <option value="checkout"></option>
            </select>
          </label>
          <label className="  flex items-center gap-x-10 cursor-pointer border border-gray-300">
            <select
              className="border  border-gray-400 inline-block p-6 rounded-none text-gray-500 text-base bg-transparent w-full"
              defaultValue="default"
            >
              <option value="default" className="text-gray-500 ">
                Check-In Check-Out
              </option>
              <option value="checkin"></option>
              <option value="checkout"></option>
            </select>
          </label>
          <label className="rounded-r-full  flex items-center gap-x-10 cursor-pointer border border-gray-300">
            <select
              className="border rounded-r-full  border-gray-400 py-6 rounded-none text-gray-500 text-base bg-transparent w-full b inline-block "
              defaultValue="default"
            >
              <option value="default" className="text-gray-500">
                1 Adult
              </option>
              <option value="checkin"></option>
              <option value="checkout"></option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
}
