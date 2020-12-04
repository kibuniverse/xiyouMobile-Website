/**
 * @author yankaizhi
 * @function Header组件
 * @property WikiDataListItem
 */

import { Row, Col, Menu, Dropdown, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Avatar } from 'antd'
import { useEffect } from "react";
import { DocumentType } from "next/dist/next-server/lib/utils";

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
    useEffect(() => {
        const header_: any = document.getElementsByClassName('header-top')[0]
        window.addEventListener('scroll', () => {
            let top_: number = window.scrollY
            if (top_ < 40) {
                const opac: number = 100 - top_
                header_.style.opacity = opac / 100
            }
        })

    }, [])
    return (
        <div className="header-top">
            <Row justify="center" align='middle' className='header'>
                {/* PC端 */}
                <Col xs={0} sm={0} md={24} lg={24} xl={24} xxl={24}>
                    <div style={{ width: '100%', backgroundColor: '#000000', }}>
                        <div style={{ width: '70%', margin: 'auto', height: '2.5rem', display: 'flex', backgroundColor: '#000000', justifyContent: 'space-between', alignItems: 'center' }}>
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
                        </div>
                    </div>
                </Col >
                {/* 移动端 */}
                <Col xs={24} sm={24} md={0} lg={0} xl={0} xxl={0} flex='center' >
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: ".3rem",
                        borderBottom: '1px solid #e4d6d6'
                    }}>
                        <Avatar src="//mobile.xupt.edu.cn/res/static/wiki_default.jpg" />
                        <div style={{
                            textAlign: 'center',
                            margin: 'auto',
                            fontWeight: 600
                        }}>xiyouMobile</div>
                        <div style={{
                            marginRight: '0.5rem',
                            paddingTop: '0.25rem'
                        }}>
                            <Dropdown overlay={menu} trigger={["click"]}>
                                <MenuOutlined />
                            </Dropdown>
                        </div>

                    </div>

                </Col >
                
            </Row >
            <style jsx>{`
                    .header-top {
                        position: sticky;
                        top: 0px;
                        z-index: 1;
                        opacity: 1;
                    }
                    .header {
                        height: 20px;
                    }
                    .Title-navs {
                        width: 80%;
                        display: flex;
                        justify-content: center;
                    }

                    .Title-navs li{
                        margin-left: 30px;
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
        </div>
        
    );
}
