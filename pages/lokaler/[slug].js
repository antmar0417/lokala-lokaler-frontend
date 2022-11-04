import { API_URL } from "@/config/index";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// default exports
import Link from "next/link";
import Layout from "@/components/Layout";
import Image from "next/image";

export default function PremisePage({ lkl }) {
  // Using the router
  const router = useRouter();

  // await is allowed in async functions
  // const deletePremise = async () => {
  //   // console.log("delete");
  //   if (confirm("Är du säker?")) {
  //     // DELETE rquest to Strapi
  //     const res = await fetch(`${API_URL}/api/premises/${lkl.id}`, {
  //       method: "DELETE",
  //     });

  //     const data = await res.json();

  //     if (!res.ok) {
  //       // if something goes wrong should have a message
  //       toast.error(data.messages);
  //     } else {
  //       // Redirect to the premises page
  //       router.push("/lokaler");
  //     }
  //   }
  // };

  if (lkl !== undefined) {
    const { attributes } = lkl;

    return (
      <Layout title="Lokal">
        <div className="relative pt-[40px] mb-4 font-ibmRegular">
          <div className=" flex flex-row justify-center items-center ">
            <ToastContainer hideProgressBar={false} pauseOnHover />

            <div className=" w-[750px] text-left">
              <h3 className="text-[25px] mb-[20px]">{attributes.title}</h3>
            </div>

            {/* <div className="mb-[20px] flex flex-row justify-center items-center ">
              <Link href={`/lokaler/redigera/${lkl.id}`}>
                <a className="flex flex-row justify-center items-center text-link">
                  {" "}
                  <FaPencilAlt className="  " /> Ändra lokal
                </a>
              </Link>
              <Link href="#">
                <a
                  className="ml-[20px] text-red-600 flex flex-row justify-center items-center "
                  onClick={deletePremise}
                >
                  <FaTimes /> Ta bort lokal
                </a>
              </Link>
            </div> */}
          </div>

          <div className=" flex flex-row justify-center items-center">
            <Image
              className=" rounded-lg "
              alt={attributes.name}
              src={
                attributes.image && attributes.image.data
                  ? attributes.image.data.attributes.formats.small.url
                  : "/images/premise-default.png"
              }
              width={960}
              height={600}
            />
          </div>

          <div className=" flex flex-row justify-center items-center">
            <div className=" w-[960px] mt-[40px] flex flex-col justify-center items-left ">
              <p className=" text-[24px] font-bold">Address</p>
              <p>{attributes.address}</p>

              <p className=" text-[24px] font-bold">Plats för</p>
              <p>{`${attributes.quantity} personer`}</p>

              <p className=" text-[24px] font-bold">Pris</p>
              <p>{`${attributes.price} kr`}</p>

              <Link href="/lokaler">
                <a className="text-link mt-[30px] ">{"<"} Tillbaka</a>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

// export async function getServerSideProps({ query: { slug } }) {
//   const res = await fetch(`${API_URL}/api/lokaler/${slug}`);
//   const lokaler = await res.json();

//   return {
//     props: {
//       lkl: lokaler[0],
//     },
//   };
// }

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/premises?populate=*`);
  const premisesData = await res.json();
  const lokaler = premisesData.data;

  const paths = lokaler.map((lkl) => ({
    params: { slug: `${lkl.slug}` }, // slug must be passed as a String
  }));
  return {
    paths,
    fallback: true, // false points to 404
  };
}

export async function getStaticProps(
  // params coming from getStaticPaths
  { params: { slug } }
) {
  const res = await fetch(
    `${API_URL}/api/premises?filters[slug]slug=${slug}&populate=*`
  );

  const premisesData = await res.json();
  const lokaler = await premisesData.data;

  return {
    props: { lkl: lokaler[0] },
    revalidate: 1,
  };
}