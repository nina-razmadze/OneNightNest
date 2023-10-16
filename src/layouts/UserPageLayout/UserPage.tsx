import SideBar from "./SideBar/SideBar";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

export default function UserPageLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <SideBar />x
    </div>
  );
}
