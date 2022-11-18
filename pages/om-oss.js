import Layout from "@/components/Layout";
import ContactContent from "@/components/ContactContent";

export default function AboutPage(props) {
  return (
    <Layout title="Om Lokaler">
      <div className=" pt-[40px] min-h-[90vh] pb-[80px] bg-backgroundColor font-ibmRegular">
        <div className="flex flex-col justify-left xs:text-[16px] md:text-[30px] items-left xxs:px-[20px] bcm:px-[200px] text-white">
          <p className=" mb-[40px] ">Hej,</p>
          <p>Vi heter Elvira Persson och Kevin Aho.</p>
          <ContactContent
            text="Kontakt Elvira"
            email="elvira.persson10@gmail.com"
            phone="0738392976"
          />

          <ContactContent
            text="Kontakt Kevin"
            email="kevinaho1@hotmail.com"
            phone="0725130444"
          />
        </div>
      </div>
    </Layout>
  );
}
