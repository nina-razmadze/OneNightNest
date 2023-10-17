export default function Payment() {
  return (
    <div>
      <div className="flex justify-center items-center  pr-12 ml-80 pt-32">
        <div className="w-full max-w-6xl p-4  bg-secondary-default rounded-lg">
          <p className="mb-2 text-2xl font-bold tracking-tight no-underline text-gray-900">
            ბალანსის შევსება შესაძლებელია VISA, MasterCard და American Express
            ბარათებით.
          </p>
          <div className="flex items-center">
            icon
            <p className="mb-3 ml-2 font-normal text-black mt-4"></p>
          </div>
          <div className="flex justify-start mt-8">
            {/* <Link to={path}> */}
            <button className="text-white bg-secondary-dark font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none focus:ring focus:border-primary-dark border-none cursor-pointer">
              btnText
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
