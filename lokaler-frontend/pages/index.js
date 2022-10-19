import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";

export default function HomePage() {
  return (
    <Layout title="Hem">
      <h1 className="text-3xl bg-red-100 font-ibmRegular">Hem</h1>
    </Layout>
  );
}
