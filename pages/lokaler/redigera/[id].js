// This is a page for adding a lokal
import { parseCookies } from "@/helpers/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { API_URL } from "@/config/index";
import { FaImage } from "react-icons/fa";
// -------------- Default exports --------------
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import Modal from "@/components/Modal";
import ImageUpload from "@/components/ImageUpload";

// -------------- lkl is passed in as a prop --------------
export default function EditLocalsPage({ lkl, token }) {
  // -------------- State for the field --------------
  const [values, setValues] = useState({
    // id: lkl.data.id,
    title: lkl.data.attributes.title,
    town: lkl.data.attributes.town,
    address: lkl.data.attributes.address,
    price: lkl.data.attributes.price,
    quantity: lkl.data.attributes.quantity,
    description: lkl.data.attributes.description,
  });

  const [imagePreview, setImagePreview] = useState(
    lkl.data.attributes.image && lkl.data.attributes.image.data
      ? lkl.data.attributes.image.data.attributes.formats.thumbnail.url
      : null
  );

  // -------------- State for Modal component --------------
  const [showModal, setShowModal] = useState(false);

  // -------------- Using the router --------------
  const router = useRouter();
  const id = router.query.id;
  //   console.log(id);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(values);

    // -------------- Validation for all fields --------------
    const hasEmptyFields = Object.values(values).some(
      // Check if the current element is empty
      (element) => element === ""
    );

    if (hasEmptyFields) {
      toast.error("Var vänligen sriv in i alla fält");
      // testing with return
      return;
    }

    // Post rquest to Strapi
    const res = await fetch(`${API_URL}/api/premises/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ data: values }),
    });

    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        toast.error("Obehörig");
        return;
      }
      toast.error("Något gick fel");
    } else {
      const lkl = await res.json();
      // Redirect to the premise (lokal) with the current slug
      router.push(`/lokaler/${lkl.data.attributes.slug}`);
    }
  };

  // --- Taking the name and value attributes from the input ---
  const handleInputChange = (e) => {
    // -------------- Destructure from e.target --------------
    const { name, value } = e.target;
    // -------------- Setting the name to value --------------
    setValues({ ...values, [name]: value });
  };

  // -------------- Function for uploading an image --------------
  const imageUploaded = async (e) => {
    const res = await fetch(`${API_URL}/api/premises/${id}?populate=*`);
    const data = await res.json();
    // console.log(data);

    // -------------- Setting the image preview --------------
    setImagePreview(
      data.data.attributes.image.data.attributes.formats.thumbnail.url
    );
    // -------------- Closing the Modal --------------
    setShowModal(false);
  };

  return (
    <Layout title="Redigera lokal">
      {/* h-screen w-screen  */}
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

            <div className="grid grid-cols-2 gap-y-6">
              <div className=" grid grid-cols-1 justify-items-start ">
                <h2>Bild</h2>
                {imagePreview ? (
                  <Image
                    src={imagePreview}
                    height={100}
                    width={170}
                    className="rounded-[5px]"
                  />
                ) : (
                  <div className="">
                    <Image
                      src="/images/premise-default.png"
                      height={100}
                      width={170}
                      className="rounded-[5px]"
                    />
                  </div>
                )}
              </div>

              <div className=" text-right pt-[80px] ">
                <button
                  type="submit"
                  className="inline-flex justify-center xxs:py-[4px] xxs:px-[8px] cm:py-3 cm:px-6 border border-transparent shadow text-base font-medium rounded-md text-white bg-buttonColor hover:bg-buttonHover "
                >
                  Ändra lokal
                </button>
              </div>
            </div>
          </form>

          <button
            onClick={() => setShowModal(true)}
            className="inline-flex bg-buttonShowAll hover:bg-buttonShowAllHover text-white py-[5px] px-[10px] rounded-[5px] cursor-pointer justify-center items-center text-[12px] mt-[5px] cm:w-[170px] "
          >
            <FaImage className=" mr-[5px] " /> Ladda upp bild
          </button>

          {/* -------------- Using the Modal component -------------- */}
          <Modal show={showModal} onClose={() => setShowModal(false)}>
            {/* -------------- Uploading the image -------------- */}
            <ImageUpload
              lklId={id}
              imageUploaded={imageUploaded}
              token={token}
            />
          </Modal>
        </div>

        <Link href="/konto/instrumentpanel">
          <a className="text-white hover:text-slate-300 mt-[30px] ">
            {"<"} Tillbaka
          </a>
        </Link>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params: { id }, req }) {
  const { token } = parseCookies(req);

  // -------------- Fetching all premises from strapi --------------
  const res = await fetch(`${API_URL}/api/premises/${id}?populate=*`);
  const lkl = await res.json();
  //   console.log(lkl);
  // console.log(`id = ${lkl}`);
  // console.log(lkl.data.attributes.image.data.attributes.formats.medium.url);

  // Logging the cookie which is accessible on server side
  // console.log(req.headers.cookie);
  return {
    props: {
      lkl,
      token,
    },
  };
}
