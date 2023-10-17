import { BsVectorPen } from "react-icons/bs";

export default function UserProfile() {
  return (
    <div className="flex justify-center items-center  pr-12 ml-80 pt-32 pl-	">
      <div className="w-full max-w-6xl p-4 ">
        <h1 className="pb-12">ჩემი პროფილი</h1>
        <div className="grid gap-8 grid-cols-2 grid-rows-3 border border-black  bg-secondary-default rounded-lg p-8 ">
          <div className="flex justify-between items-center pl-6 ">
            <h2>ინფორმაცია</h2>
          </div>
          <div className="flex justify-end items-center">
            <h1>
              <BsVectorPen />
            </h1>
          </div>
          <div className="pl-6">
            <h2 className="pb-2 text-gray-500 ">სახელი</h2>
            <p>ნინი</p>
          </div>
          <div className="pl-6">
            <h2 className="pb-2 text-gray-500">ემაილი</h2>
            <p>blabla@gmail.com</p>
          </div>
          <div className="pl-6">
            <h2 className="pb-2 text-gray-500">გვარი</h2>
            <p>რაზმაძე</p>
          </div>
          <div className="pl-6">
            <h2 className="pb-2 text-gray-500">ტელეფონის ნომერი</h2>
            <p>599 44 94 11</p>
          </div>
        </div>
      </div>
    </div>
  );
}
