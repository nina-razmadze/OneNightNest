export default function SearchForm() {
  return (
    <div className="relative bg-fffbf2  rounded-full p-30 mt-[50px] mb-[60px] ">
      <div className="w-[1000px] flex center items-center m-auto">
        <div className="grid grid-cols-3 gap-4 w-full relative z-10 items-center  rounded-full bg-fcf5eb text-base">
          <label className="rounded-2xl p-8 flex items-center gap-x-10 cursor-pointer border border-gray-300">
            <select
              className="border-0 inline-block rounded-none text-gray-500 text-base bg-transparent w-full"
              defaultValue="default"
            >
              <option value="default" className="text-gray-500">
                where are you going to go?
              </option>
              <option value="checkin"></option>
              <option value="checkout"></option>
            </select>
          </label>
          <label className="rounded-2xl p-8 flex items-center gap-x-10 cursor-pointer border border-gray-300">
            <select
              className="border-0 inline-block rounded-none text-gray-500 text-base bg-transparent w-full"
              defaultValue="default"
            >
              <option value="default" className="text-gray-500">
                Check-In Check-Out
              </option>
              <option value="checkin"></option>
              <option value="checkout"></option>
            </select>
          </label>
          <label className="rounded-2xl p-8 flex items-center gap-x-10 cursor-pointer border border-gray-300">
            <select
              className="border-0 inline-block rounded-none text-gray-500 text-base bg-transparent w-full"
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
