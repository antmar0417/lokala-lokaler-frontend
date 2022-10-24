import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { API_URL } from "@/config/index";
import PremiseItem from "@/components/PremiseItem";
import qs from "qs";
import Link from "next/link";

export default function SearchPage({ lokaler }) {
  const router = useRouter();

  return (
    <Layout title="Search Results">
      <div className=" mt-[40px] min-h-[680px] ">
        <Link href="/lokaler">
          <a className="text-link ml-[200px] ">{"<"} Tillbaka</a>
        </Link>
        <h1 className=" text-[36px] ml-[200px] ">
          Resultat för {router.query.term}
        </h1>
        {lokaler.length === 0 && <h3>Det finns inga lokaler att vissa</h3>}

        {lokaler.map((lkl) => (
          <PremiseItem key={lkl.id} lkl={lkl} />
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify(
    {
      filters: {
        $or: [
          { title: { $containsi: term } },
          { town: { $containsi: term } },
          { price: { $containsi: term } },
          { quantity: { $containsi: term } },
        ],
      },
    },
    {
      encode: false,
    }
  );

  const res = await fetch(`${API_URL}/api/premises?${query}&populate=*`);
  const json = await res.json();
  const lokaler = json.data;

  return { props: { lokaler } };
}
