import { parseCookies } from "@/helpers/index";
import { useRouter } from "next/router";
import { API_URL } from "@/config/index";
// default exports
import Layout from "@/components/Layout";

export default function DashboardPage({ premises, token }) {
  // ------------ logging the premises ------------
  // console.log(premises);
  const router = useRouter();

  const deletePremise = async (id) => {
    if (confirm("Är du säker?")) {
      const res = await fetch(`${API_URL}/api/premises/${lkl.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
      } else {
        router.reload();
      }
    }
  };

  return (
    <Layout title="Instrumentfodral">
      <div className="">
        <h1>Instrumentfodral</h1>
        <h3>Mina Lokaler</h3>

        {premises.map((lkl) => (
          <h1 key={lkl.id} lkl={lkl}>
            {lkl.title}
          </h1>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  // Logging the token
  console.log(token);

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
