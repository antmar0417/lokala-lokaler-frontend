import { FaUser } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect, useContext } from "react";
// -------------- Default exports --------------
import AuthContext from "@/context/AuthContext";
import Link from "next/link";
import Layout from "@/components/Layout";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { register, error } = useContext(AuthContext);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      toast.error("Lösenorden matchar inte!");
      return;
    }

    register({ username, email, password, phone });
  };

  return (
    <Layout title="Registrera">
      <div className="py-16 bg-backgroundColor xxs:pb-[150px] cm:pb-[90px] lg:pb-[50px] px-4 sm:px-6 flex flex-col  justify-center items-center font-ibmRegular">
        <ToastContainer hideProgressBar={false} pauseOnHover />
        <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
          <h1 className="flex flex-row justify-center items-center mb-[15px] text-[20px] text-textColor ">
            <FaUser className=" mr-[5px] " /> Registrera
          </h1>
          <ToastContainer hideProgressBar={false} pauseOnHover />
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="username" className="sr-only">
                Användarnamn
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Användarnamn"
                className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-700 border-[1px] rounded-md focus:outline-none focus:ring-2"
              />
            </div>

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
              <label htmlFor="phone" className="sr-only">
                Telefonnummer
              </label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Telefonnummer"
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

            <div>
              <label htmlFor="passwordConfirm" className="sr-only">
                Bekräfta lösenord
              </label>
              <input
                type="password"
                name="passwordConfirm"
                id="passwordConfirm"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                placeholder="Bekräfta lösenord"
                className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-700 border-[1px] rounded-md focus:outline-none focus:ring-2"
              />
            </div>

            <div className="xxs:flex xxs:flex-col xxs:justify-center xxs:items-center sm:grid sm:grid-cols-2 ">
              <button
                type="submit"
                className="sm:inline-flex sm:justify-center xxs:text-[12px] md:text-[16px] text-white xxs:py-2 xxs:px-2 md:py-3 md:px-5 border border-transparent shadow font-medium rounded-md bg-buttonColor hover:bg-buttonHover xxs:w-[90px] md:w-1/3 "
              >
                Registrera
              </button>
              <p className="md:w-[220px] flex xxs:ml-[0px] md:ml-[75px] justify-center items-center xxs:text-[12px] md:text-[16px] ">
                Har du redan ett konto?{" "}
                <Link href="/konto/logga-in">
                  <a className="ml-[5px] text-link">Logga in</a>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
