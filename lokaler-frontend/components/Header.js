import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useContext } from "react";
// -------------- Default exports --------------
import AuthContext from "@/context/AuthContext";
import Layout from "./Layout";
import Link from "next/link";
import Search from "./Search";

export default function Header() {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="flex justify-between items-center flex-row bg-navbarColor text-textColor h-[60px] px-[30px] shadow-lg shadow-grey-500/50 text-[20px] font-ibmRegular">
      <div>
        <Link href="/">
          <a className="hover:text-linkHover">LOKALA LOKALER</a>
        </Link>
      </div>

      <Search />

      <nav>
        <ul className="flex justify-center items-center list-none">
          <li>
            <Link href="/lokaler">
              <a className="hover:text-linkHover">Lokaler</a>
            </Link>
          </li>

          {user ? (
            // --------------- If the user is logged in ---------------
            <>
              <li>
                <Link href="/lokaler/addera">
                  <a className="hover:text-linkHover ml-[20px] ">Lägg till</a>
                </Link>
              </li>

              <li>
                <Link href="/konto/instrumentfodral">
                  <a className="ml-[20px]">Instrument</a>
                </Link>
              </li>

              <li>
                <button
                  onClick={() => logout()}
                  className="flex flex-row justify-center items-center bg-buttonShowAll hover:bg-buttonShowAllHover text-white px-[10px] w-[80px] py-[6px] rounded-[5px] cursor-pointer ml-[20px] text-[12px]"
                >
                  <FaSignOutAlt className=" mr-[5px] " /> Logga ut
                </button>
              </li>
            </>
          ) : (
            //--------------- If the user is logged out---------------
            <>
              <li>
                <Link href="/konto/logga-in">
                  <a className="flex flex-row justify-center items-center bg-buttonShowAll hover:bg-buttonShowAllHover text-white px-[10px] w-[80px] py-[6px] rounded-[5px] cursor-pointer mx-[10px] text-[12px] ">
                    <FaSignInAlt className=" mr-[5px] " /> Logga in
                  </a>
                </Link>
              </li>
            </>
          )}

          {/* <li>
            <Link href="/konto/registrera">
              <a>Registrera</a>
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
