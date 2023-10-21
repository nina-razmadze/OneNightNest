import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { CustomLayout } from "./PublicLayout.styled";
import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div className="w-100%">
      <CustomLayout>
        <Header />
        <Outlet />
        <Footer />
      </CustomLayout>
    </div>
  );
}
