import { API_URL } from "@/config/index";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// -------------- Default exports --------------
import Link from "next/link";
import Layout from "@/components/Layout";
import Image from "next/image";
import PremiseMap from "@/components/PremiseMap";

export default function PremisePage({ lkl }) {
  // Using the router
  const router = useRouter();

  if (lkl !== undefined) {
    const { attributes } = lkl;
    // User premise email
    const sendEmailTo = `mailto:${attributes.user.data.attributes.email}`;
    const callTo = `tel:${attributes.user.data.attributes.phone}`;

    return (
      <Layout title="Lokal">
        <div className="min-h-[90vh] xxs:pb-[40px] md:pb-[80px] relative pt-[40px] xxs:px-[40px] bcm:px-[0px]  font-ibmRegular bg-backgroundColor">
          <div className=" flex flex-row justify-center items-center ">
            <ToastContainer hideProgressBar={false} pauseOnHover />

            <div className=" flex flex-row justify-left items-left w-[860px]">
              <h3 className="xs:text-[24px] md:text-[40px] text-white mb-[20px]">
                {attributes.title}
              </h3>
            </div>
          </div>

          <div className=" flex flex-row justify-center items-center">
            <Image
              className="rounded-lg object-cover"
              alt={attributes.name}
              src={
                attributes.image && attributes.image.data
                  ? attributes.image.data.attributes.formats.small.url
                  : "/images/premise-default.png"
              }
              width={860}
              height={500}
            />
          </div>

          <div className="flex flex-row justify-center items-center text-white">
            <div className="xxs:w-[194px] md:w-[860px] mt-[40px] flex flex-col justify-left items-left">
              <p className="text-[24px] font-bold">Beskrivning</p>
              <p>{attributes.description}</p>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center text-white">
            <div className="w-[860px] bg-red-500 mt-[40px] flex xxs:flex-col xxs:items-center xxs:justify-center md:flex-row md:items-start md:justify-between text-white">
              <div className=" xxs:w-[198px] flex flex-col ">
                <p className=" text-[24px] font-bold">Address</p>
                <p>{attributes.address}</p>

                <p className=" text-[24px] font-bold">Plats för</p>
                <p>{`${attributes.quantity} personer`}</p>

                <p className=" text-[24px] font-bold">Pris</p>
                <p>{`${attributes.price} kr`}</p>
              </div>

              <div className="flex flex-col ">
                <p className=" text-[24px] font-bold">Kontakt</p>

                <p>
                  E-postadress:{" "}
                  <Link
                    href={sendEmailTo}
                    passHref
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <a
                      target="_blank"
                      className="hover:text-slate-300 cursor-pointer"
                    >
                      {" "}
                      {attributes.user.data.attributes.email}
                    </a>
                  </Link>
                </p>

                <p>
                  Mobil:{" "}
                  <Link
                    href={callTo}
                    passHref
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <a
                      target="_blank"
                      className="hover:text-slate-300 cursor-pointer"
                    >
                      {" "}
                      {attributes.user.data.attributes.phone}
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className=" mt-[40px] flex flex-col justify-center items-center text-white">
            <PremiseMap lkl={lkl} />
            <Link href="/lokaler">
              <a className=" mt-[30px] hover:text-slate-300 ">{"<"} Tillbaka</a>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(
    `${API_URL}/api/premises?filters[slug]slug=${slug}&populate=*`
  );

  const premisesData = await res.json();
  const lokaler = await premisesData.data;

  return {
    props: { lkl: lokaler[0] },
  };
}
