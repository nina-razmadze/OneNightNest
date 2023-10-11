import { navClasses, background } from "./PublicHeader.styled";
import { LuPhoneCall } from "react-icons/lu";
import Leng from "../../../components/Leng/Leng";
import HouseLogo from "../../../images/houselogo.jpg";

export default function PublicHeader() {
  return (
    <header className={background}>
      <nav className={navClasses}>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="https://flowbite.com" className="flex items-center">
            <img
              src={HouseLogo}
              className="mr-3 h-6 sm:h-9 rounded-full"
              alt="Flowbite Logo"
            />
            <span className="self-center text-primary-dark text-xl font-semibold ">
              ONN
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li className="hover:bg-primary-light font-medium rounded-full text-sm px-5 py-3 text-center  cursor-pointer flex items-center text-center mb-1.5  ">
                <LuPhoneCall
                  className="text-black  mr-4 "
                  style={{ width: "23px", height: "23px" }}
                />
                <a
                  href="#"
                  className="block py-2 pr-6 pl-4 hover:text-black text-base	 text-black lg:p-0 dark:text-black-400  "
                >
                  Hotline
                </a>
              </li>
            </ul>
            <div className=" font-medium rounded-full text-sm  text-center mr-2 mb-2 cursor-pointers  ">
              <Leng />
            </div>
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
