import Link from "next/link";
import dynamic from "next/dynamic";
import { CommonComponent } from "@example/common/CommonComponent";

const Header = dynamic(import("../components/Header"));

export default function Home() {
  return (
    <div>
      <Header />
      <CommonComponent />
      <p>This is our homepage</p>
      <div>
        <a href="/blog">Blog</a>
      </div>
      <div>
        <Link href="/about">
          <a>About us</a>
        </Link>
      </div>
      <img width={200} src="/static/nextjs.png" />
    </div>
  );
}
