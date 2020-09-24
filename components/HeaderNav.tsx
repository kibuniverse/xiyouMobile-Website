import { Row, Col, Menu, Dropdown, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Avatar } from 'antd'

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
  return (
    <Row justify="center" align='middle' className='header' style={{ height: '2.5rem', backgroundColor: '#000000', color: 'white'}}>
      {/* PC端 */}
      <Col xs={0} sm={0} md={18} lg={18} xl={18} xxl={18} style={{ height: '2.5rem', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <Avatar src="//mobile.xupt.edu.cn/res/static/wiki_default.jpg" />
        <ul className='Title-navs'>
          <li>
            <Link href='/'>首页</Link>
          </li>
          <li>
            <Link href='/wiki'>wiki</Link>
          </li>
          <li>
            <Link href='/dynamic'>动态</Link>
          </li>
          <li>
            <Link href='/graduate'>毕业生</Link>
          </li>
          <li>
            <Link href='/member'>成员风采</Link>
          </li >
          <li>
            <Link href='/aboutus'>关于我们</Link>
          </li >
        </ul >
        <Button type='link' href='https://my.xiyoumobile.com/#/' style={{color: '#fff'}}>登录</Button>
      </Col >
      {/* 移动端 */}
      < Col xs={20} sm={20} md={0} lg={0} xl={0} xxl={0} flex="center" >
        <Dropdown overlay={menu} trigger={["click"]}>
          <MenuOutlined />
        </Dropdown>
      </Col >
      <style jsx>{`
        .header {
          height: 20px;
        }
        
        .Title-navs li{
          margin-left: 20px;
          float: left;
          color: '#000';
        }
        .Title-navs li:hover {
          cursor: pointer;
        }
        .ant-btn-link:hover{
          color: '#fff';
        }
      `}</style>
    </Row >
  );
}
