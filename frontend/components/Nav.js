import Link from "next/link";
import NavStyle from "./styles/NavStyle";

const Nav = () => (
  <NavStyle>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/items">
      <a>Gear</a>
    </Link>
    <Link href="/archive">
      <a>Archive</a>
    </Link>
  </NavStyle>
);
export default Nav;
