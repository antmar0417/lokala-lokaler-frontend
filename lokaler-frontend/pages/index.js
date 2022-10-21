import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import LocalItem from "@/components/LocalItem";

export default function HomePage({ lokaler }) {
  // console.log(lokaler);
  return (
    <Layout title="Hem">
      <div className="bg-gradient-to-b from-[#3f99d5] via-[#b5a4e8] to-orange-100 min-h-[860px] ">
        <h1 className="text-[40px] text-white pt-[60px] text-left mx-[200px] font-ibmRegular">
          Våra Lokaler
        </h1>
        {lokaler.length === 0 && <h3>Det finns inga lokaler att vissa</h3>}
        {lokaler.map((lkl) => (
          <LocalItem key={lkl.id} lkl={lkl} />
          // <h3 key={lkl.id}>{lkl.title}</h3>
        ))}
      </div>
    </Layout>
  );
}

// Updates on page will not show on page
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/lokaler`);
  const lokaler = await res.json();

  return {
    props: { lokaler },
    // If the data has changed
    // If it does not find it will make request again within 1 sec
    revalidate: 1,
  };
}
