import { Row, Col, Menu, Dropdown, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import axios from "axios";
const menu = (
  <Menu>
    <Menu.Item key="index">
      <Link href="/">
        <Button className="select-item">首页</Button>
      </Link>
    </Menu.Item>
    <Menu.Item key="wiki">
      <Link href="/wiki">
        <Button className="select-item">wiki</Button>
      </Link>
    </Menu.Item>
    <Menu.Item key="dynamic">
      <Link href="/dynamic">
        <Button className="select-item">动态</Button>
      </Link>
    </Menu.Item>
    <Menu.Item key="graduateMessage">
      <Link href="/graduate/index">
        <Button className="select-item">毕业生</Button>
      </Link>
    </Menu.Item>
    <style jsx>{`
      .select-item {
        width: 100%;
      }
    `}</style>
  </Menu>
);
export default function HeaderNav() {
  const handleClick = () => {
    axios.get("api/api/wiki/list/all/2").then((resp) => console.log(resp));
  };
  return (
    <Row justify="center">
      {/* PC端 */}
      <Col xs={0} sm={0} md={20} lg={20} xl={20} xxl={20}>
        PC端
        <button onClick={handleClick}>test</button>
      </Col>
      {/* 移动端 */}
      <Col xs={20} sm={20} md={0} lg={0} xl={0} xxl={0} flex="center">
        <Dropdown overlay={menu} trigger={["click"]}>
          <MenuOutlined />
        </Dropdown>
      </Col>
    </Row>
  );
}
