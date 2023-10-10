import "./App.css";
import styled from "styled-components";
import { Button, Input, Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

const CustomLayout = styled(Layout)`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

const CustomFooter = styled(Footer)`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const CustomContent = styled(Content)`
  margin-top: 64px; /* Adjust as needed to account for header height */
  margin-bottom: 64px; /* Adjust as needed to account for footer height */
`;
function App() {
  return (
    <>
      <CustomLayout>
        <Header>Header</Header>
        <CustomContent>Content</CustomContent>
        <CustomFooter>Footer</CustomFooter>
      </CustomLayout>
    </>
  );
}

export default App;
