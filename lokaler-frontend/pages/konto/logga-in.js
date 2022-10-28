import { FaUser } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
// import AuthContext from '@/context/AuthContext'

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const { login, error } = useContext(AuthContext);

  //   useEffect(() => error && toast.error(error));

  const handleSubmit = (e) => {
    e.preventDefault();
    // login({ email, password });
    console.log({ email, password });
  };

  return (
    <Layout title="Logga In">
      <div className="b py-16 bg-backgroundColor px-4 sm:px-6 flex flex-col  justify-center items-center font-ibmRegular">
        <ToastContainer hideProgressBar={false} pauseOnHover />
        <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
          <h1 className=" flex flex-row justify-center items-center mb-[15px] text-[20px] text-textColor ">
            <FaUser className=" mr-[5px] " /> Logga In
          </h1>
          <ToastContainer />
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="email" className="sr-only">
                E-postadress
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-postadress"
                className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-700 border-[1px] rounded-md focus:outline-none focus:ring-2"
              />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Lösenord
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Lösenord"
                className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-700 border-[1px] rounded-md focus:outline-none focus:ring-2"
              />
            </div>

            <div className=" grid grid-cols-2 ">
              <button
                type="submit"
                className="inline-flex justify-center py-3 px-5 border border-transparent shadow text-base font-medium rounded-md text-white bg-buttonColor hover:bg-buttonHover w-1/3 "
              >
                Logga in
              </button>
              <p className="w-[220px] flex ml-[75px] justify-center items-center ">
                Har inget konto?{" "}
                <Link href="/konto/registrera">
                  <a className="ml-[5px] text-link">Registrera</a>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
