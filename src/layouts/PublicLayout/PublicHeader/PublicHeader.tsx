import { navClasses, background } from "./PublicHeader.styled";

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
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              ONN
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <button className="text-white bg-secondary-default font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none focus:ring focus:border-primary-dark  cursor-pointer">
              Log in
            </button>

            <button className="text-white  bg-secondary-dark font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 cursor-pointer">
              Get started
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li className="hover:bg-secondary-light font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 cursor-pointer ">
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3  text-black lg:p-0 dark:text-black-400  "
                >
                  Hot line
                </a>
              </li>
              <li className="hover:bg-secondary-light font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 cursor-pointers  ">
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-black hover:bg-secondary-light lg:p-0  "
                >
                  Language
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
