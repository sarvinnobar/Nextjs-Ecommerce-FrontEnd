import Link from "next/link";
import "@/styles/Head.css";
import Center from "./Center";

export default function Header() {
  return (
    <header className="headerDiv">
      <Center>
        <div className="wrapper">
          <Link href={"/"} className="logo">
            Arax
          </Link>
          <nav>
            <Link className="navLink" href={"/"}>
              Home
            </Link>
            <Link className="navLink" href="">
              New
            </Link>
            <Link className="navLink" href="">
              Categories
            </Link>
            <Link className="navLink" href="">
              Account
            </Link>
            <Link className="navLink" href={"/cart"}>
              Cart(0)
            </Link>
          </nav>
        </div>
      </Center>
    </header>
  );
}
