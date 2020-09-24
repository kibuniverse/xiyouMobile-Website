import requests from '../../public/tools/request'
import HeaderNav from '../../components/HeaderNav'
export default function ActivePageIndex() {
    fetch('https://mobile.xupt.edu.cn/api/wiki/top/-1')
    return (
        <div>
            <HeaderNav />
        </div>
    )
}