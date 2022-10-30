import { parseCookies } from "@/helpers/index";
import { useRouter } from "next/router";
import { API_URL } from "@/config/index";
// -------------- Default exports --------------
import Layout from "@/components/Layout";
import DashboardPremise from "@/components/DashboardPremise";

export default function DashboardPage({ premises, token }) {
  // ------------ logging the premises ------------
  // console.log(premises);
  const router = useRouter();

  const deletePremise = async (id) => {
    // ------------ logging the premise id ------------
    // console.log(id);

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
    <Layout title="Instrumentfodral">
      <div className="">
        <h1 className="text-[40px] text-textColor pt-[60px] text-left mx-[200px] font-ibmRegular">
          Mina Lokaler
        </h1>

        {premises.map((lkl) => (
          <DashboardPremise
            key={lkl.id}
            lkl={lkl}
            handleDelete={deletePremise}
          />

          // <h1 key={lkl.id} lkl={lkl}>
          //   {lkl.title}
          // </h1>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  // Logging the token
  // console.log(token);

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
