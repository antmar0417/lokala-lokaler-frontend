import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";

export default function HomePage() {
  return (
    <Layout title="Hem">
      <div className="bg-gradient-to-b from-[#3f99d5] via-[#b5a4e8] to-orange-100 h-[600px] ">
        <h1 className="text-3xl font-ibmRegular">Hem</h1>
      </div>
    </Layout>
  );
}
