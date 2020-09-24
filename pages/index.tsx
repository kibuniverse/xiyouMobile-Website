import Link from "next/link";
import HeaderNav from "../components/HeaderNav";
import { Row, Col } from "antd";
import { Button } from 'antd'
export default function Home() {
  return (
    <div className="container">
      <HeaderNav />
      <Link href='/activeDetailPage?activeId=183'>
        <Button >点击跳转</Button>
      </Link>
    </div>
  )
}
