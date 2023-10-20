import { Link } from "react-router-dom";
import { FaHotel } from "react-icons/fa";

import { GiPapers } from "react-icons/gi";
import { BsFillHouseAddFill } from "react-icons/bs";

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
            <li className="list-none mb-0 flex items-center justify-center">
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover-bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                ></svg>
                <Link to="/">
                  <span className="py-2 px-4 text-2xl text-white">NNO.ge</span>
                </Link>
              </a>
            </li>

            <li className="list-none mb-0 flex items-center p-2  text-white rounded-lg  group no-underline">
              <svg
                className="w-5 h-5 text-gray-500 transition duration-75  "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <GiPapers style={{ color: "white", fontSize: "22px" }} />
              </svg>
              <span className="ml-3">გვერდები</span>
            </li>

            <li className="list-none no-underline	 mb-0 flex items-center p-2  rounded-lg text-white  group ">
              <svg
                className="flex-shrink-0 w-5 h-5transition duration-75 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              ></svg>
              <BsFillHouseAddFill />

              <span className="flex-1 ml-3 whitespace-nowrap">
                განცხად. დამატება
              </span>
            </li>

            <li className="list-none no-underline	 mb-0 flex items-center p-2  rounded-lg text-white  group ">
              <svg
                className="flex-shrink-0 w-5 h-5transition duration-75 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              ></svg>
              <AiOutlineUnorderedList />

              <span className="flex-1 ml-3 whitespace-nowrap">
                ჩემი განცხადებები
              </span>
            </li>

            <li className="list-none no-underline	 mb-0 flex items-center p-2 text-white rounded-lg  group no-underline">
              <svg
                className="flex-shrink-0 w-5 h-5 transition duration-75"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              ></svg>
              <FaHotel />
              <span className="flex-1 ml-3 whitespace-nowrap">
                ჩემი დაჯავშნილები
              </span>
            </li>

            <Link to="/userpage/payment" className="no-underline">
              <li className="list-none mb-0 flex items-center p-2 text-white rounded-lg group">
                <svg
                  className="flex-shrink-0 w-5 h-5 transition duration-75"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                ></svg>
                <BsFillCreditCardFill />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  ბარათის დამატება
                </span>
              </li>
            </Link>
          </ul>
        </div>
      </aside>
    </div>
  );
}
