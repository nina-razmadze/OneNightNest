export default function SearchForm() {
  return (
    <div className="relative bg-fffbf2  rounded-full p-30 mt-[50px] mb-[60px] ">
      <div className="w-[1000px] flex center items-center m-auto">
        <div className="grid grid-cols-3 gap-4 w-full relative z-10 items-center  rounded-full bg-fcf5eb text-base">
          <label className="rounded-2xl p-8 flex items-center gap-x-10 cursor-pointer border border-black">
            <input
              className=" inline-block rounded-none text-073937 text-base bg-transparent w-full"
              placeholder="where are you going to go?"
            ></input>
          </label>
          <label className="rounded-2xl p-8 flex items-center gap-x-10 cursor-pointer border border-black">
            <input
              className="border-0 inline-block rounded-none text-073937 text-base bg-transparent w-full"
              placeholder="Check-In Check-Out"
            ></input>
          </label>
          <label className="rounded-2xl p-8 flex items-center gap-x-10 cursor-pointer border border-black">
            <input
              className="border-0 inline-block rounded-none text-073937 text-base bg-transparent w-full"
              placeholder="1 adult"
            ></input>
          </label>
        </div>
      </div>
    </div>
  );
}
