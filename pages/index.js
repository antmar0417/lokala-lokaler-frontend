// This is the Home Page and will show 3 premises
import { API_URL } from "@/config/index";
// -------------- Default exports --------------
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import PremiseItem from "@/components/PremiseItem";
import Link from "next/link";

export default function HomePage({ lokaler }) {
  return (
    <Layout title="Hem">
      <div className="bg-backgroundColor min-h-[90vh] pb-[80px]">
        <h1 className="xs:text-[24px] md:text-[40px] text-white pt-[60px] text-left xxs:mx-[20px] bcm:mx-[40px] lg:mx-[100px] xl:mx-[200px] font-ibmRegular">
          Senaste Lokaler
        </h1>
        {lokaler.length === 0 && <h3>Det finns inga lokaler att vissa</h3>}
        {lokaler.map((lkl) => (
          <PremiseItem key={lkl.id} lkl={lkl} />
        ))}

        {lokaler.length > 0 && (
          <Link href="/lokaler">
            <button className="inline-block bg-buttonShowAll hover:bg-buttonShowAllHover text-white px-[10px] py-[10px] rounded-[5px] cursor-pointer xs:mx-[20px] bcm:mx-[40px] lg:mx-[100px] xl:mx-[200px] mt-[10px] ">
              <a>Visa Alla</a>
            </button>
          </Link>
        )}
      </div>
    </Layout>
  );
}

// Updates on page will not show on page
export async function getStaticProps() {
  // Fetching data from API and sorting it by created at date and limit the premises to 3
  const res = await fetch(
    `${API_URL}/api/premises?populate=*&pagination[pageSize]=3&sort=createdAt:desc`
  );
  // const lokaler = await res.json();
  const json = await res.json();
  const lokaler = json.data;

  return {
    props: { lokaler },
    // If the data has changed
    // If it does not find it will make request again within 1 sec
    revalidate: 1,
  };
}
