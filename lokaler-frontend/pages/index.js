// This is the Home Page and will show 3 premises
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import PremiseItem from "@/components/PremiseItem";
import Link from "next/link";

export default function HomePage({ lokaler }) {
  // console.log(lokaler);
  return (
    <Layout title="Hem">
      <div className="bg-backgroundColor min-h-[980px] ">
        <h1 className="text-[40px] text-textColor pt-[60px] text-left mx-[200px] font-ibmRegular">
          Senaste Lokaler
        </h1>
        {lokaler.length === 0 && <h3>Det finns inga lokaler att vissa</h3>}
        {lokaler.map((lkl) => (
          <PremiseItem key={lkl.id} lkl={lkl} />
        ))}

        {lokaler.length > 0 && (
          <Link href="/lokaler">
            <button className="inline-block bg-buttonShowAll hover:bg-buttonShowAllHover text-white px-[10px] py-[10px] rounded-[5px] cursor-pointer ml-[200px] mt-[10px] ">
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
    `${API_URL}/api/premises?populate=*&pagination[pageSize]=3&sort=createdAt:asc`
  );
  // const lokaler = await res.json();
  const json = await res.json();
  const lokaler = json.data;

  return {
    // props: { lokaler: lokaler.slice(0, 3) },
    props: { lokaler },
    // If the data has changed
    // If it does not find it will make request again within 1 sec
    revalidate: 1,
  };
}
