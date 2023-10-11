import { navClasses, background } from "./PublicHeader.styled";
import { LuPhoneCall } from "react-icons/lu";

export default function PublicHeader() {
  return (
    <header className={background}>
      <nav className={navClasses}>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="https://flowbite.com" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-primary-dark text-xl font-semibold ">
              ONN
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li className="hover:bg-secondary-light font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 cursor-pointer flex items-center text-center ">
                <LuPhoneCall className="text-black  mr-2" />
                <a
                  href="#"
                  className="block py-2 pr-6 pl-4 hover:text-black  text-black lg:p-0 dark:text-black-400  "
                >
                  Hot line
                </a>
              </li>
              <li className="hover:bg-secondary-light font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 cursor-pointers  ">
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3  text-black hover:text-black  hover:bg-secondary-light lg:p-0  "
                >
                  Language
                </a>
              </li>
            </ul>
            <button className="text-white bg-secondary-default font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none focus:ring focus:border-primary-dark  cursor-pointer ml-8">
              Log in
            </button>
            <button className="text-white  bg-secondary-dark font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 cursor-pointer">
              Get started
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
