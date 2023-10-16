import SideBar from "./SideBar/SideBar";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

import { useWindowSize } from "rooks";

export default function UserPageLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <SideBar />
    </div>
  );
}
