import PublicHeader from "./PublicHeader/PublicHeader";
import PublicFooter from "./PublicFooter/PublicFooter";

import styled from "styled-components";
import { Layout } from "antd";
const { Header, Content } = Layout;
const CustomLayout = styled(Layout)`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

const CustomContent = styled(Content)`
  margin-top: 64px; /* Adjust as needed to account for header height */
  margin-bottom: 64px; /* Adjust as needed to account for footer height */
`;
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <CustomLayout>
        <PublicHeader />
        <CustomContent>{children}</CustomContent>
        <PublicFooter />
      </CustomLayout>
    </div>
  );
}
