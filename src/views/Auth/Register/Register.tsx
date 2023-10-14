import logo from "@src/images/houselogo.jpg";

export default function RegisterView() {
  return (
    <section className="bg-white">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-secondary-light  text-black rounded-lg shadow d md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 md:space-y-6 sm:p-8">
            <div className="flex flex-col items-center mb-6">
              <a
                href="#"
                className="flex items-center text-2xl text-black"
                style={{ textDecoration: "none" }}
              >
                <img className="w-8 h-8 mr-2" src={logo} alt="logo" />
                ONN
              </a>
              <h1 className="text-xl   md:text-2xl text-black">
                Create an account for free
              </h1>
            </div>
            <form className="space-y-4 md:space-y-6 mr-5" action="#">
              <div>
                <label className="block mb-2 text-sm font-medium  text-black">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-white text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 border-none"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-white text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 border-none"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-white text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 border-none "
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4  rounded "
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label className="font-light text-gray-700 ">
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>

              <div className="flex justify-center items-center ">
                <button className="bg-secondary-dark text-white sm:text-sm  block  border-none rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 cursor-pointer ">
                  Create an account
                </button>
              </div>
              <p className="text-sm font-light text-gray-700 ">
                Already have an account?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
