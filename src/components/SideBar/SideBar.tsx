import { GiPapers } from "react-icons/gi";

import { BsFillHouseAddFill } from "react-icons/bs";
import { FaHotel } from "react-icons/fa";

import { BsFillCreditCardFill } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";

export default function SideBar() {
  return (
    <div>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-secondary-dark">
          <ul className="space-y-2 font-medium">
            <li className="list-none no-underline mb-0 flex items-center justify-center ">
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover-bg-gray-700 group no-underline"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                ></svg>

                <span className="py-2 px-4 text-2xl ">NNO.ge</span>
              </a>
            </li>

            <li className="list-none no-underline	 mb-0">
              <a
                href="#"
                className="flex items-center p-2  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover-bg-gray-700 group no-underline"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75  "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  {/* <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" /> */}
                  <GiPapers style={{ color: "white", fontSize: "22px" }} />
                </svg>
                <span className="ml-3">გვერდები</span>
              </a>
            </li>

            <li className="list-none no-underline	 mb-0">
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover-bg-gray-700 group no-underline"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                ></svg>
                <BsFillHouseAddFill />

                <span className="flex-1 ml-3 whitespace-nowrap">
                  განცხ. დამატება
                </span>
              </a>
            </li>
            <li className="list-none no-underline	 mb-0">
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover-bg-gray-700 group no-underline"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                ></svg>
                <AiOutlineUnorderedList />

                <span className="flex-1 ml-3 whitespace-nowrap">
                  ჩემი განცხადებები
                </span>
              </a>
            </li>
            <li className="list-none no-underline	 mb-0">
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover-bg-gray-700 group no-underline"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                ></svg>
                <FaHotel />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  ჩემი დაჯავშნილები
                </span>
              </a>
            </li>
            <li className="list-none no-underline	 mb-0">
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover-bg-gray-700 group no-underline"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  =
                </svg>
                <BsFillCreditCardFill />

                <span className="flex-1 ml-3 whitespace-nowrap">
                  ბარათის დამატება
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
