import { API_URL, PER_PAGE } from "@/config/index";
// -------------- Default exports --------------
import Layout from "@/components/Layout";
import PremiseItem from "@/components/PremiseItem";
import Pagination from "@/components/Pagination";

export default function PremisesPage({ lokaler, sida, total }) {
  return (
    <Layout title="Lokaler">
      <h1 className="text-[40px] text-textColor pt-[60px] text-left mx-[200px] font-ibmRegular">
        Våra Lokaler
      </h1>
      {lokaler.length === 0 && <h3>Det finns inga lokaler att vissa</h3>}

      {lokaler.map((lkl) => (
        <PremiseItem key={lkl.id} lkl={lkl} />
      ))}
      <div className="mx-[200px] pb-[60px] ">
        <Pagination sida={sida} total={total} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { sida = 1 } }) {
  // -------------- Calculate start page --------------
  const start =
    // -------------- "+page" converts it to a number --------------
    +sida === 1 // -------------- the beggining of the premises --------------
      ? 0
      : // -------------- calculate the start (current page) --------------
        (+sida - 1) * PER_PAGE;

  // -------------- Fetch premises --------------
  const res = await fetch(
    `${API_URL}/api/premises?populate=*&pagination[start]=${start}&pagination[limit]=${PER_PAGE}&sort=createdAt:desc`
  );

  const lokaler = await res.json();

  return {
    props: {
      lokaler: lokaler.data,
      sida: parseInt(sida),
      total: lokaler.meta.pagination.total,
    },
  };
}

// export async function getStaticProps() {
//   const res = await fetch(
//     `${API_URL}/api/premises?populate=*&sort=createdAt:desc`
//   );
//   // const lokaler = await res.json();
//   const premisesData = await res.json();
//   const lokaler = premisesData.data;

//   return {
//     props: { lokaler },
//     revalidate: 1,
//   };
// }
