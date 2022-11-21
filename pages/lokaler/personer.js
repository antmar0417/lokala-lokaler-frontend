import { API_URL, PER_PAGE } from "@/config/index";
// -------------- Default exports --------------
import Layout from "@/components/Layout";
import PremiseItem from "@/components/PremiseItem";
import Pagination from "@/components/Pagination";
import SearchPersons from "@/components/SearchPersons";
import DropDown from "@/components/DropDown";

export default function PremisesPage({ lokaler, sida, total }) {
  return (
    <Layout title="Ange Max Antal Personer">
      <div className="bg-backgroundColor min-h-[90vh] xss:pb-[40px] md:pb-[80px]">
        <div className="w-full flex xxs:flex-col md:flex-row pt-[50px] justify-center items-center">
          <SearchPersons />
          <DropDown />
        </div>

        <h1 className="xs:text-[24px] md:text-[40px] text-white pt-[60px] text-left xxs:mx-[20px] bcm:mx-[40px] lg:mx-[100px] xl:mx-[200px] font-ibmRegular">
          Våra Lokaler
        </h1>
        {lokaler.length === 0 && <h3>Det finns inga lokaler att vissa</h3>}

        {lokaler.map((lkl) => (
          <PremiseItem key={lkl.id} lkl={lkl} />
        ))}
        <div className="xs:mx-[20px] bcm:mx-[40px] lg:mx-[100px] xl:mx-[200px] pb-[60px] ">
          <Pagination sida={sida} total={total} />
        </div>
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
