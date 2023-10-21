import { Link } from "react-router-dom";

export default function statements() {
  return (
    <div className="flex justify-center items-center  pr-12 ml-80 pt-32 ">
      <div className="w-full max-w-6xl p-4 ">
        <h1 className="pb-12">ჩემი განცხადებები</h1>
        <div className=" border shadow bg-secondary-default rounded-lg p-8 ">
          <p className="mb-2 text-lg font-bold tracking-tight no-underline  text-gray-600 ">
            ამ მომენტისთვის არ დაგიმატებიათ არცერთი განცხადება
          </p>
          {/* აქ დაემატება განცხადება რომელსაც ჩვენ დავამატებთ */}
          <Link to="/userpage/addstatement">
            <button className="text-white bg-secondary-dark font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2  mt-6 focus:outline-none focus:ring focus:border-primary-dark border-none cursor-pointer">
              განცხადების დამატება
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
