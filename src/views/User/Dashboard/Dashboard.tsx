import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";

import SideBar from "@src/layouts/UserPageLayout/SideBar/SideBar";
import Container from "@src/components/Container/Container";

import { BsFillCreditCardFill } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";

export default function Dashboard() {
  return (
    <div>
      <SideBar />
      <div className="p-4 sm:ml-64 ">
        <div className="p-4 rounded-lg ">
          <div className="grid grid-cols-3 gap-4 mb-4 ml-12 mt-20">
            <Link to="/userpage/mylist" className="no-underline">
              <Container
                title="ჩემი განცხადებები"
                subText="ჩემი განცხადებები"
                btnText="განცხადების დამატება"
                icon={<AiOutlineUnorderedList />}
                path="/userpage/mylist"
              />
            </Link>
            <Link to="/userpage/profile" className="no-underline">
              <Container
                title="ჩემი პროფილი"
                subText="ნინა"
                btnText="პროფილი"
                icon={<BiUser />}
                path="/userpage/profile"
              />
            </Link>
            <Link to="/userpage/payment" className="no-underline">
              <Container
                title="ბალანსი"
                subText="მიმდინარე ბალანსი"
                btnText="ბალანსის შევსება"
                icon={<BsFillCreditCardFill />}
                path="/userpage/payment"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
