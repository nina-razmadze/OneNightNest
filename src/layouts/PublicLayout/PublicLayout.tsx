import PublicHeader from "./PublicHeader/PublicHeader";
import PublicFooter from "./PublicFooter/PublicFooter";
import { CustomLayout } from "./PublicLayout.styled";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-100%">
      <CustomLayout>
        <PublicHeader />
        {children}
        <PublicFooter />
      </CustomLayout>
    </div>
  );
}
