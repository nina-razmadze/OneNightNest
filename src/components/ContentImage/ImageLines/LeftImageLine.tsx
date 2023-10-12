import roomThree from "../../../images/RoomThree.jpg";

export default function LeftImageLine() {
  return (
    <div className="bg-secondary-default rounded-lg  flex justify-center mb-16  ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[1410px] h-[550px]  ">
        <div className="ml-[30px]  mt-[25px]">
          <img
            className="object-cover   md:h-[80%] md:w-[70%] md:rounded-none md:rounded-xl "
            src={roomThree}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between p-4 leading-normal max-w-screen-xl mx-auto">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Apartments per day
          </h2>
          <h3 className="mb-3 font-normal text-black dark:text-gray-400">
            Choose an interesting place for you and plan an unforgettable trip.
            Book an apartment for any time and receive discount cards as a gift.
          </h3>
        </div>
      </div>
    </div>
  );
}
