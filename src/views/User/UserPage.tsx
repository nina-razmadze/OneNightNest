import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import SideBar from "@src/components/SideBar/SideBar";
import Container from "@src/components/Container/Container";

import { BiUser } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";

import { BsFillCreditCardFill } from "react-icons/bs";

import UserProfile from "./UserProfile/UserProfile";
import Card from "./Card/Card";
import Statements from "./Statements/Statements";

export default function UserPage() {
  return (
    <div>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/userpage/profile" element={<UserProfile />} />
          <Route path="/userpage/mylist" element={<Statements />} />
          <Route path="/userpage/card" element={<Card />} />
        </Routes>
      </Suspense>

      <SideBar />
      <div className="p-4 sm:ml-64 ">
        <div className="p-4 rounded-lg ">
          <div className="grid grid-cols-3 gap-4 mb-4 ml-12 mt-20">
            <Container
              title="ჩემი განცხადებები"
              subText="ჩემი განცხადებები"
              btnText="განცხადების დამატება"
              icon={<AiOutlineUnorderedList />}
              path={"/userpage/mylist"}
            />
            <Container
              title="ჩემი პროფილი"
              subText="ნინა"
              btnText="პროფილი"
              icon={<BiUser />}
              path={"/userpage/profile"}
            />
            <Container
              title="ბარათის დამატება"
              subText="ბარათი"
              btnText="ბარათი"
              icon={<BsFillCreditCardFill />}
              path={"/userpage/card"}
            />
          </div>

          {/* <div className="grid grid-cols-2 gap-4 mb-4"> */}
          {/* <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div> */}
          {/* <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div> */}
          {/* </div> */}
          {/* <div className="grid grid-cols-2 gap-4"></div> */}
        </div>
      </div>
    </div>
  );
}
