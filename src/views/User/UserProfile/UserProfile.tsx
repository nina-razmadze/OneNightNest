import { BsVectorPen } from "react-icons/bs";

export default function UserProfile() {
  return (
    <div className="flex justify-center items-center  pr-12 ml-80 pt-32	">
      <div className="w-full max-w-6xl p-4">
        <h1 className="pb-12">My Profile</h1>
        <div className="grid gap-8 grid-cols-2 grid-rows-3 border border-black p-4 bg-secondary-default rounded-lg p-8">
          <div className="flex justify-between items-center">
            <h1>Information</h1>
          </div>
          <div className="flex justify-end items-center">
            <h1>
              <BsVectorPen />
            </h1>
          </div>
          <div>
            <h1>name</h1>
            <p>name</p>
          </div>
          <div>
            <h1>Email</h1>
            <p>name</p>
          </div>
          <div>
            <h1>LastName</h1>
            <p>name</p>
          </div>
          <div>
            <h1>Phone Number</h1>
            <p>name</p>
          </div>
        </div>
      </div>
    </div>
  );
}
