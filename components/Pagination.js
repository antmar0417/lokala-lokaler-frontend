import Link from "next/link";
import { PER_PAGE } from "@/config/index";

export default function Pagination({ sida, total }) {
  const lastPage = Math.ceil(total / PER_PAGE);

  return (
    <>
      <div className="mx-[200px] flex justify-center items-center font-ibmRegular ">
        <p className="bg-blue-700  px-[8px] py-[2px] rounded-[5px] text-white font-ibmRegular ">{`Sida - ${sida}`}</p>
      </div>

      {/* -------------- Button to Previous Page -------------- */}
      {sida < lastPage && (
        <Link href={`/lokaler?sida=${sida + 1}`}>
          <a className="inline-flex bg-buttonShowAll hover:bg-buttonShowAllHover text-white py-[5px] px-[10px] rounded-[5px] cursor-pointer justify-center items-center text-[12px] mt-[5px] w-[140px] float-right font-ibmRegular">
            Nästa {"->"}
          </a>
        </Link>
      )}

      {/* -------------- Button to Next Page -------------- */}
      {sida > 1 && (
        <Link href={`/lokaler?sida=${sida - 1}`}>
          <a className="inline-flex bg-buttonShowAll hover:bg-buttonShowAllHover text-white py-[5px] px-[10px] rounded-[5px] cursor-pointer justify-center items-center text-[12px] mt-[5px] w-[140px] font-ibmRegular">
            {"<-"} Föregående
          </a>
        </Link>
      )}
    </>
  );
}
