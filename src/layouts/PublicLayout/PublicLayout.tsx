import PublicHeader from "./PublicHeader/PublicHeader";
import PublicFooter from "./PublicFooter/PublicFooter";
import { CustomLayout, CustomContent } from "./PublicLayout.styled";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <CustomLayout>
        <PublicHeader />
        {children}
        <PublicFooter />
      </CustomLayout>
    </div>
  );
}
