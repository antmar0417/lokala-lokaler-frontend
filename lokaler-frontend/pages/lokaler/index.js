import Layout from "@/components/Layout";
import PremiseItem from "@/components/PremiseItem";
import { API_URL } from "@/config/index";

export default function PremisesPage({ lokaler }) {
  return (
    <Layout title="Home Page">
      <h1 className="text-[40px] text-textColor pt-[60px] text-left mx-[200px] font-ibmRegular">
        Våra Lokaler
      </h1>
      {lokaler.length === 0 && <h3>Det finns inga lokaler att vissa</h3>}

      {lokaler.map((lkl) => (
        <PremiseItem key={lkl.id} lkl={lkl} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/lokaler`);
  const lokaler = await res.json();

  return {
    props: { lokaler },
    revalidate: 1,
  };
}
