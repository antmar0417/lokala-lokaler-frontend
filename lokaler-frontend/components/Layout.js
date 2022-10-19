import Head from "next/head";
import { useRouter } from "next/router";
// import Header from "./Header";
// import Footer from "./Footer";

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      {/* <Header /> */}

      {/* {router.pathname === "/" && <Showcase />} */}

      <div className="m-[60px] max-w-[960px] py-0 px-[30px]">{children}</div>
      {/* <Footer /> */}
    </div>
  );
}

Layout.defaultProps = {
  title: "Lokala Lokaler | Hitta din lokal",
  description: "Hitta din lokal som passar dig bäst",
  keywords: "lokaler, lokal, hitta, stora, rymliga",
};
