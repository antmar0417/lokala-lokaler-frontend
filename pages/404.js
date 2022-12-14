import Link from "next/link";
import Layout from "@/components/Layout";

export default function NotFoundPage() {
  return (
    <Layout title="Sidan kunde inte hittas">
      <div className="font-ibmRegular h-screen w-full flex flex-col justify-center items-center bg-backgroundColor">
        <h1 className="text-[120px] font-extrabold text-white tracking-widest">
          404
        </h1>
        <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
          Sidan du letar efter kan tyvärr inte hittas
        </div>

        <Link href="/">
          <button className="mt-5">
            {" "}
            <a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
              <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0 rounded-lg"></span>

              <span className="relative block px-8 py-3 bg-[#1A2238] border border-current rounded-lg">
                Tillbaka Till Hem
              </span>
            </a>
          </button>
        </Link>
      </div>
    </Layout>
  );
}
