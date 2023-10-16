import Header from "./Header/Header";

import SideBar from "./SideBar/SideBar";
import { Outlet } from "react-router-dom";

export default function UserPageLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <SideBar />
    </div>
  );
}
