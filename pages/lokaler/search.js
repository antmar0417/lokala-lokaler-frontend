import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { API_URL } from "@/config/index";
import PremiseItem from "@/components/PremiseItem";
import qs from "qs";
import Link from "next/link";

export default function SearchPage({ lokaler }) {
  const router = useRouter();

  return (
    <Layout title="Sök Resultat">
      <div className=" pt-[40px] min-h-[90vh] pb-[80px] bg-backgroundColor">
        <div className="flex flex-col justify-center items-center text-white">
          <h1 className=" xxs:text-[24px] md:text-[36px]  ">
            Resultat för {router.query.term}
          </h1>
        </div>
        {lokaler.length === 0 && (
          <div className="flex flex-row justify-center items-center text-white">
            <h3 className="xxs:text-[24px] md:text-[36px] mt-[180px] ">
              Det finns inga lokaler att vissa
            </h3>
          </div>
        )}

        {lokaler.map((lkl) => (
          <PremiseItem key={lkl.id} lkl={lkl} />
        ))}

        <div className="flex flex-row justify-center items-center text-white">
          <Link href="/lokaler">
            <a className=" mt-[40px] ">{"<"} Tillbaka</a>
          </Link>
        </div>
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
