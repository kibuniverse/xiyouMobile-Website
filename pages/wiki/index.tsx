
/**
 * @author yankaizhi
 * @function wiki页面
 * 
 */
import axios from 'axios'
import WikiCard from '../../components/WikiCard'
import { WikiDataListItem } from '../../interface/wiki'
import { useEffect, useState } from 'react'
import { Row, Col, Avatar, Divider, BackTop, Tabs } from 'antd'
import { UpSquareTwoTone, AppleOutlined, AndroidOutlined, ChromeOutlined, LikeOutlined, CloudServerOutlined, FieldTimeOutlined } from '@ant-design/icons'
import HeaderNav from '../../components/HeaderNav'
const { TabPane } = Tabs

export default function WikiIndex() {

    const onchange = (key) => {
        console.log(key)
    }
    const onTableClick = (key, e) => {
        console.log(e)
    }
    return (
        <div>
            <HeaderNav />

            <Row className="comm-main" justify="center">
                <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
                    <Tabs defaultActiveKey="all" onChange={onchange} size="large" onTabClick={onTableClick}>
                        <Divider />
                        <TabPane tab={
                            <span>
                                <FieldTimeOutlined />
                                最新
                            </span>
                        } key="all">
                            <WikiList type="all"/>
                            111
                        </TabPane>
                        <TabPane tab={
                            <span>
                                <LikeOutlined />
                                推荐
                            </span>
                        } key="recommend">
                            <WikiList type="all"/>
                        </TabPane>
                        <TabPane tab={
                            <span>
                                <AppleOutlined />
                                iOS
                            </span>
                        } key='iOS'>
                            <WikiList type="iOS"/>
                        </TabPane>
                        <TabPane tab={
                            <span>
                                <ChromeOutlined />
                                web
                            </span>
                        } key="web">
                            <WikiList type="web"/>
                        </TabPane>
                        <TabPane tab={
                            <span>
                                <AndroidOutlined />
                                Android
                            </span>
                        } key="Android">
                            <WikiList type="android"/>
                        </TabPane>
                        <TabPane tab={
                            <span>
                                <CloudServerOutlined />
                                server
                            </span>
                        } key="server">
                            <WikiList type="server"/>
                        </TabPane>
                    </Tabs>
                </Col>

                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <BackTop>
                        <UpSquareTwoTone />
                    </BackTop>
                </Col>
            </Row>
            <style jsx>{`
                ul {
                    list-style: none;
                }
            `}</style>
        </div>
    )
}

interface IPropsWikiList {
    type: string
}

function WikiList(props: IPropsWikiList) {
    const [dataList, setDatalist] = useState<Array<WikiDataListItem>>([] as Array<WikiDataListItem>)

    useEffect(() => {
        // 首次渲染获取第一页数据
        axios.get(`/api/api/wiki/list/${props.type}/1`).then((res: any) => {
            setDatalist(res.data.data.dataList)
            console.log(res.data.data.dataList)
        })
    }, [])

    const wikiItemList = dataList.map((item: WikiDataListItem, index: number) => (
        <li key={index}>
            <WikiCard data={item} />
        </li>
    ))
    return (
        <ul>
            {wikiItemList}
        </ul>
        
    )
}


// 获取数据


