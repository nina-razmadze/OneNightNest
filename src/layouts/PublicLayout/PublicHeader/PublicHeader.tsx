import styled from "styled-components";
import { Layout } from "antd";
const { Header } = Layout;

const CustomHeader = styled(Header)`
  position: fixed;
  top: 0;
  width: 100%;
`;
export default function PublicHeader() {
  return (
    <div>
      <CustomHeader>Header</CustomHeader>
    </div>
  );
}
