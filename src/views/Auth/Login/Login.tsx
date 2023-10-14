import logo from "@src/images/houselogo.jpg";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <section className="bg-secondary-light">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-secondary-light  text-black rounded-lg  d md:mt-0 sm:max-w-md xl:p-0 ">
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
                <h1 className="text-3xl    text-black">
                  Sign in to your account
                </h1>
              </div>
              <form className="space-y-4 md:space-y-6 mr-5" action="#">
                <div>
                  <label className="block mb-2 text-lg font-medium  text-black">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-white text-gray-900 sm:text-sm rounded-lg block w-full p-5 border-none"
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-lg font-medium text-gray-900">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-white text-gray-900 sm:text-sm rounded-lg block w-full p-5 border-none"
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
                  <div className="ml-3 text-md">
                    <label className="font-light text-gray-700 ">
                      Remember Me
                      <a
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      ></a>
                    </label>
                  </div>
                </div>

                <div className="flex justify-center items-center ">
                  <button className="bg-secondary-dark text-white sm:text-sm  block  border-none rounded-full text-md px-10 py-2.5 text-center ml-4  mb-2   cursor-pointer ">
                    Log in
                  </button>
                </div>
                <p className="text-md font-light text-gray-700 ">
                  Don't have an account?{" "}
                  <Link to="/auth/signup">
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Register here
                    </a>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
