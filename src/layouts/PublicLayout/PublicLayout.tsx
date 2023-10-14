import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { CustomLayout } from "./PublicLayout.styled";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-100%">
      <CustomLayout>
        <Header />
        {children}
        <Footer />
      </CustomLayout>
    </div>
  );
}
