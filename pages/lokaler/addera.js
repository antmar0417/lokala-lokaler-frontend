// This is a page for adding a lokal
import { parseCookies } from "@/helpers/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { API_URL } from "@/config/index";
// -------------- Default exports --------------
import Layout from "@/components/Layout";
import Link from "next/link";

export default function AddLocalsPage({ token }) {
  // -------------- State for the field --------------
  const [values, setValues] = useState({
    title: "",
    town: "",
    address: "",
    price: "",
    quantity: "",
    description: "",
  });

  // -------------- Using the router --------------
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // --------- Validation for all fields ---------
    const hasEmptyFields = Object.values(values).some(
      //--- Check if the current element is empty---
      (element) => element === ""
    );

    if (hasEmptyFields) {
      toast.error("Var vänligen sriv in i alla fält");
      // ---------- Testing with return ----------
      return;
    }

    // ------------ Post rquest to Strapi ------------
    const res = await fetch(`${API_URL}/api/premises`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ data: values }),
    });

    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        toast.error("Ingen token ingår");
        return;
      }
      toast.error("Något gick fel");
    } else {
      const lkl = await res.json();
      // Redirect to the premise (lokal) with the current slug
      router.push(`/lokaler/${lkl.data.attributes.slug}`);
    }
  };

  // Taking the name and value attributes from the input
  const handleInputChange = (e) => {
    // -------- Destructure from e.target --------
    const { name, value } = e.target;
    // --------- Setting the name to value ---------
    setValues({ ...values, [name]: value });
  };

  return (
    <Layout title="Lägg till lokal">
      <div className="b py-16 bg-backgroundColor px-4 sm:px-6 flex flex-col  justify-center items-center font-ibmRegular">
        <ToastContainer hideProgressBar={false} pauseOnHover />
        <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
          <h1 className=" mb-[15px] text-[20px] text-textColor ">
            Lägg till lokal
          </h1>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="title" className="sr-only">
                Titel
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={values.title}
                onChange={handleInputChange}
                placeholder="Titel"
                className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-700 border-[1px] rounded-md focus:outline-none focus:ring-2"
              />
            </div>

            <div>
              <label htmlFor="town" className="sr-only">
                Stad
              </label>
              <input
                type="text"
                name="town"
                id="town"
                value={values.town}
                onChange={handleInputChange}
                placeholder="Stad"
                className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-700 border-[1px] rounded-md focus:outline-none focus:ring-2"
              />
            </div>

            <div>
              <label htmlFor="address" className="sr-only">
                Adress
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={values.address}
                onChange={handleInputChange}
                placeholder="Adress"
                className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-700 border-[1px] rounded-md focus:outline-none focus:ring-2"
              />
            </div>

            <div>
              <label htmlFor="price" className="sr-only">
                Pris
              </label>
              <input
                type="text"
                name="price"
                id="price"
                value={values.price}
                onChange={handleInputChange}
                placeholder="Pris"
                className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-700 border-[1px] rounded-md focus:outline-none focus:ring-2"
              />
            </div>

            <div>
              <label htmlFor="quantity" className="sr-only">
                Antal Personer
              </label>
              <input
                type="text"
                name="quantity"
                id="quantity"
                value={values.quantity}
                onChange={handleInputChange}
                placeholder="Antal Personer"
                className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-700 border-[1px] rounded-md focus:outline-none focus:ring-2"
              />
            </div>

            <div>
              <label htmlFor="description" className="sr-only">
                Beskrivning
              </label>
              <textarea
                rows="4"
                type="text"
                name="description"
                id="description"
                value={values.description}
                onChange={handleInputChange}
                placeholder="Skriv in detailerad beskrivning"
                className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-700 border-[1px] rounded-md focus:outline-none focus:ring-2"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="inline-flex justify-center py-3 px-6 border border-transparent shadow text-base font-medium rounded-md text-white bg-buttonColor hover:bg-buttonHover "
              >
                Lägg till lokal
              </button>
            </div>
          </form>
        </div>
        <Link href="/lokaler">
          <a className="text-white mt-[30px] ">{"<"} Tillbaka</a>
        </Link>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  return {
    props: {
      token,
    },
  };
}
