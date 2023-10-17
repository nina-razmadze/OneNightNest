export default function Payment() {
  return (
    <div className="flex justify-center items-center  pr-12 ml-80 pt-32 pl-	">
      <div className="w-full max-w-6xl p-4 ">
        <h1 className="pb-12">ჩემი პროფილი</h1>
        <div className=" border shadow bg-secondary-default rounded-lg p-8 ">
          <p className="mb-2 text-lg font-bold tracking-tight no-underline  text-gray-600 ">
            ბალანსის შევსება შესაძლებელია VISA, MasterCard და American Express
            ბარათებით.
          </p>
          <div className="flex items-center ">
            <p></p>
            <p className="mb-3 ml-2 font-normal text-gray-600 mt-4"></p>
          </div>
          <div className="mb-6">
            <label className="block pb-4 text-sm font-medium text-gray-900">
              მინიმუმ: 3₾
            </label>
            <div className="flex justify-start mr-32">
              <input
                type="text"
                id="large-input"
                className="text-gray-900 text-sm rounded-lg border-none bg-white shadow block w-full p-2.5 "
              />
            </div>
          </div>
          <div className="flex justify-start mt-8">
            {/* <Link to={path}> */}
            <button className="text-white bg-secondary-dark font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2  mt-6 focus:outline-none focus:ring focus:border-primary-dark border-none cursor-pointer">
              შევსება
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
