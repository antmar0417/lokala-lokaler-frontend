// Default exports
import Layout from "./Layout";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center flex-row bg-navbarColor text-textColor h-[60px] px-[30px] shadow-lg shadow-grey-500/50 text-[20px] font-ibmRegular">
      <div>
        <Link href="/">
          <a className="hover:text-linkHover">LOKALA LOKALER</a>
        </Link>
      </div>

      <nav>
        <ul className="flex justify-center items-center list-none">
          <li>
            <Link href="/lokaler">
              <a className="hover:text-linkHover">Lokaler</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
