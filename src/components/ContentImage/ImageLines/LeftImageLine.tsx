import roomThree from "../../../images/RoomThree.jpg";

export default function LeftImageLine() {
  return (
    <div className="bg-secondary-default rounded-lg  flex justify-center mb-[60px] relative ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[1410px] h-[550px]  ">
        <div className="ml-[30px]  mt-[25px]">
          <img
            className="object-cover   md:h-[80%] md:w-[70%] md:rounded-none md:rounded-xl "
            src={roomThree}
            alt=""
          />
        </div>
        <div className="flex flex-col p-4  max-w-screen-xl mx-auto mt-[120px] text-black items-center">
          <h1>Apartments per day Choose</h1>
          <h2 className="mb-2 text-2xl font-bold tracking-tight mt-[20px]">
            an interesting place for you and plan an unforgettable trip. Book an
            apartment for any time and receive discount cards as a gift.
          </h2>
          <button className="text-white mt-[20px] bg-secondary-dark font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 cursor-pointer">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}
