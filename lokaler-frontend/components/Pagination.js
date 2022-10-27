import Link from "next/link";
import { PER_PAGE } from "@/config/index";

export default function Pagination({ sida, total }) {
  const lastPage = Math.ceil(total / PER_PAGE);

  return (
    <>
      {/* -------------- Button to Previous Page -------------- */}
      {sida < lastPage && (
        <Link href={`/lokaler?sida=${sida + 1}`}>
          <a className="inline-flex bg-buttonShowAll hover:bg-buttonShowAllHover text-white py-[5px] px-[10px] rounded-[5px] cursor-pointer justify-center items-center text-[12px] mt-[5px] w-[140px] float-right">
            Nästa {"->"}
          </a>
        </Link>
      )}
      {/* -------------- Button to Next Page -------------- */}
      {sida > 1 && (
        <Link href={`/lokaler?sida=${sida - 1}`}>
          <a className="inline-flex bg-buttonShowAll hover:bg-buttonShowAllHover text-white py-[5px] px-[10px] rounded-[5px] cursor-pointer justify-center items-center text-[12px] mt-[5px] w-[140px] ">
            {"<-"} Föregående
          </a>
        </Link>
      )}
    </>
  );
}
