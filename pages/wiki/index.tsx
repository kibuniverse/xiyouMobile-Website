
/**
 * @author yankaizhi
 * @function wiki页面
 * 
 */
import axios from 'axios'
import WikiCard from '../../components/WikiCard'
import { WikiDataListItem } from '../../interface/wiki'
import { useEffect, useState } from 'react'
import HeaderNav from '../../components/HeaderNav'
export default function WikiIndex() {
    const [dataList, setDatalist] = useState<Array<WikiDataListItem>>([] as Array<WikiDataListItem>)

    useEffect(() => {
        // 首次渲染获取第一页数据
        axios.get('/api/api/wiki/list/all/1').then((res: any) => {
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
        <div>
            <HeaderNav />
            <ul>
                {wikiItemList}
            </ul>
            

            <style jsx>{`
                ul {
                    list-style: none;
                }
            `}</style>
        </div>
    )
}



// 获取数据


