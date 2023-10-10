import styled from "styled-components";
import { Layout } from "antd";
const { Footer } = Layout;

const CustomFooter = styled(Footer)`
  position: fixed;
  bottom: 0;
  width: 100%;
`;
export default function PublicFooter() {
  return (
    <div>
      <CustomFooter>Footer</CustomFooter>
    </div>
  );
}
