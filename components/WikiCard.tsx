
/**
 * @author yankaizhi
 * @function 卡片组件
 * @property WikiDataListItem
 */


import { Avatar, Divider } from 'antd'
import { WikiDataListItem } from '../interface/wiki'
import { TagTwoTone } from '@ant-design/icons'

interface IProps {
    data: WikiDataListItem
}

export default function WikiCard(props: IProps) {
    const data: WikiDataListItem = props.data
    return (
        <div className="card-wiki">
            <div className="card-wiki-header">
                <div className="head-info">
                    <Avatar src={data.author.portrait} />
                    <span style={{
                        marginLeft: '0.5rem',
                    }}>
                        {data.author.realName}
                    </span>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <TagTwoTone twoToneColor="blue" />
                    <div style={{
                        lineHeight: "2rem",
                        marginLeft: "0.2rem",
                    }}>{data.type.typeName}</div>
                </div>
            </div>
            <div className="card-wiki-body">
                <div style={{width: "68%",}}>
                    <div className="card-wiki-body-header">
                        {data.title}
                    </div>
                    <div className="card-wiki-body-header-content">
                        {data.summary}
                    </div>
                </div>

                <div className="card-wiki-img">
                    <img width="100%" height="100%" src={data.img} alt={data.title} />
                </div>
            </div>
            <style>{`
                .card-wiki {
                    width: 100%;
                    height: 10rem;
                    margin-bottom: 0.5rem;
                    box-shadow: 0px 1px 0px #c9b7b7;
                    background-color: #ffffff;
                    overflow: hidden;
                }
                .card-wiki-header {
                    width: 95%;
                    display: flex;
                    margin: 0 auto;
                    margin-top: 0.5rem;
                    justify-content: space-between;
                    align-content: center;
                    height: 2rem;
                }
                .card-wiki-body {
                    width: 95%;
                    height: 7rem;
                    margin: 0 auto;
                    margin-top: 0.5rem;
                    display: flex;
                    justify-content: space-between;
                }
                .card-wiki-body-header {
                    font-weight: 550;
                }
                .card-wiki-body-header-content {
                    font-size: 0.7rem;
                    font-weight: 300;
                }
                .card-wiki-img {
                    width: 30%;
                    height: 6rem;
                    border-radius: 5%;
                    overflow: hidden;
                }
            `}</style>
        </div>
    )
}