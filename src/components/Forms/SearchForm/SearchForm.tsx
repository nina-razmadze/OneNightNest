export default function SearchForm() {
  return (
    <div className="relative bg-fffbf2 mt-[-60px] rounded-full p-30 mt-[50px] ">
      <div className="w-full">
        <div className="grid grid-cols-3 gap-4 w-full relative z-10 items-center border border-solid border-gray-300 rounded-full bg-fcf5eb text-base">
          <label className="rounded-full p-8 flex items-center gap-x-10 cursor-pointer">
            <input className="border-0 inline-block rounded-none text-073937 text-base bg-transparent w-full"></input>
          </label>
          <label className="rounded-full p-8 flex items-center gap-x-10 cursor-pointer">
            <input className="border-0 inline-block rounded-none text-073937 text-base bg-transparent w-full"></input>
          </label>
          <label className="rounded-full p-8 flex items-center gap-x-10 cursor-pointer">
            <input className="border-0 inline-block rounded-none text-073937 text-base bg-transparent w-full"></input>
          </label>
        </div>
      </div>
    </div>
  );
}
