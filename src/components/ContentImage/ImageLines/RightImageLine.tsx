import halfOne from "../../../images/halfOne.webp";
import halfTwo from "../../../images/halfTwo.webp";

export default function RightImageLine() {
  return (
    <div className="bg-primary-default rounded-lg  flex justify-center mb-[60px] relative ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[1410px] h-[550px]  ">
        <div className="flex flex-col p-4  max-w-screen-xl mx-auto mt-[120px] text-black items-center">
          <p>Search, choose and book</p>
          <h1>Hotels</h1>
          <h2 className="mb-2 text-2xl font-bold tracking-tight mt-[20px]">
            The largest selection of hotels and other types of accommodation in
            Georgia. Get bonus points on every booking.
          </h2>
          <button className="text-white mt-[20px] bg-secondary-dark font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 cursor-pointer">
            Search for a hotel
          </button>
        </div>
        <div className=" mt-[25px] flex">
          <img
            src={halfOne}
            style={{
              width: "100%",
              height: "500px",
              borderRadius: "10px",
              marginRight: "20px",
              marginLeft: "20px",
              marginTop: "-50px",
            }}
          />
          <img
            src={halfTwo}
            style={{
              width: "100%",
              height: "560px",
              borderRadius: "15px",
              marginRight: "20px",
              marginLeft: "20px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
