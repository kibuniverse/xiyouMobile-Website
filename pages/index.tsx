import Link from "next/link";
import HeaderNav from "../components/HeaderNav";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
export default function Home() {
  return (
    <div className="container">
      <HeaderNav />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
