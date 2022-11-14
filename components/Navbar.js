import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useContext, useState } from "react";
// -------------- Default exports --------------
import AuthContext from "@/context/AuthContext";
import Layout from "./Layout";
import Link from "next/link";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      {/* <div className=" bg-slate-300 h-[30px] w-[120px] absolute top-[20px] left-1/2 transform -translate-x-1/2"></div> */}

      <nav className="w-full bg-gray-900 shadow-lg shadow-blue-500/50 font-ibmRegular sticky top-0 z-50">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex  md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
                <a className="xxs:text-[16px] bcm:text-2xl text-white font-bold">
                  LOKALA LOKALER
                </a>
              </Link>

              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li>
                  <Link href="/lokaler">
                    <a className="ml-[20px] text-white hover:text-linkHover">
                      Lokaler
                    </a>
                  </Link>
                </li>

                {user ? (
                  // --------------- If the user is logged in ---------------
                  <>
                    <li>
                      <Link href="/lokaler/addera">
                        <a className="ml-[20px] text-white hover:text-linkHover">
                          Lägg till
                        </a>
                      </Link>
                    </li>

                    <li>
                      <Link href="/konto/instrumentpanel">
                        <a className="ml-[20px] text-white hover:text-linkHover">
                          Admin
                        </a>
                      </Link>
                    </li>

                    <li>
                      <button
                        onClick={() => logout()}
                        className="flex flex-row justify-center items-center bg-[#c70000] hover:bg-[#881616] text-white px-[6px] w-[80px] py-[8px] rounded-[5px] cursor-pointer ml-[20px] text-[12px]"
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
                        <a className="flex flex-row justify-center items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 text-white px-[6px] dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-[80px] py-[8px] rounded-[5px] cursor-pointer ml-[20px] text-[12px] ">
                          <FaSignInAlt className=" mr-[5px] " /> Logga in
                        </a>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
