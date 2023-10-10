import styled from "styled-components";
import { Layout } from "antd";
const { Content } = Layout;

export const CustomLayout = styled(Layout)`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

export const CustomContent = styled(Content)`
  margin-top: 64px; /* Adjust as needed to account for header height */
  margin-bottom: 64px; /* Adjust as needed to account for footer height */
`;
