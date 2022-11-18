import { useRouter } from "next/router";
// -------------- Default exports --------------
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroImage from "./HeroImage";

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Navbar />

      {/* Hero image shows only on homepage */}
      {router.pathname === "/" && <HeroImage />}
      <div className="">{children}</div>
      <Footer />
    </>
  );
}

// Default props
Layout.defaultProps = {
  title: "Lokala Lokaler | Hitta din lokal",
  description: "Hitta din lokal som passar dig bäst",
  keywords: "lokaler, lokal, hitta, stora, rymliga",
};
