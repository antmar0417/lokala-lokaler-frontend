import { parseCookies } from "@/helpers/index";
import { useRouter } from "next/router";
import { API_URL } from "@/config/index";
// -------------- Default exports --------------
import Layout from "@/components/Layout";
import DashboardPremise from "@/components/DashboardPremise";

export default function DashboardPage({ premises, token }) {
  // ------------ logging the premises ------------
  const router = useRouter();
  const deletePremise = async (id) => {
    // ------------ logging the premise id ------------

    if (confirm("Är du säker?")) {
      const res = await fetch(`${API_URL}/api/premises/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
      } else {
        // ----------- To stay on dashboard -----------
        router.reload();
      }
    }
  };

  return (
    <Layout title="instrumentpanel">
      <div className=" bg-backgroundColor min-h-[90vh] xss:pb-[40px] md:pb-[80px]">
        <h1 className="xs:text-[24px] md:text-[40px] text-white pt-[60px] text-left xxs:mx-[20px] bcm:mx-[40px] lg:mx-[100px] xl:mx-[200px] font-ibmRegular">
          Välkommen, {premises[0].user.username}
        </h1>

        {premises.map((lkl) => (
          <DashboardPremise
            key={lkl.id}
            lkl={lkl}
            handleDelete={deletePremise}
          />
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  const res = await fetch(`${API_URL}/api/premises/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const premises = await res.json();

  return {
    props: {
      premises,
      token,
    },
  };
}
