import Link from "next/link";
import { FaPencilAlt, FaTimes } from "react-icons/fa";

export default function DashboardEvent({ lkl, handleDelete }) {
  return (
    <div className=" flex xxs:flex-col bcm:flex-row justify-center items-center bcm:space-x-[40px] font-ibmRegular p-[13px] my-[20px] xxs:mx-[20px] bcm:mx-[40px] lg:mx-[100px] xl:mx-[200px] h-[120px] rounded-[8px] shadow-3xl bg-premiseItem">
      <h4 className="xl:basis-2/3">
        <Link href={`/lokaler/${lkl.slug}`}>
          <a className="lg:text-[20px] xl:text-[24px] font-bold">{lkl.title}</a>
        </Link>
      </h4>

      <div
        className="flex flex-row justify-center items-center xxs:mt-[10px]
      bcm:mt-[0px] "
      >
        <Link href={`/lokaler/redigera/${lkl.id}`}>
          <a className="flex flex-row justify-center items-center bg-buttonShowAll hover:bg-buttonShowAllHover text-white px-[10px] lg:w-[100px] py-[6px] rounded-[5px] cursor-pointer xxs:ml-[0px] bcm:ml-[20px] text-[12px]">
            <FaPencilAlt className=" mr-[5px] " />{" "}
            <span className="mr-[5px]">Ändra</span>
            <span className=" hidden lg:block "> Lokal</span>
          </a>
        </Link>

        <a
          href="#"
          className="flex flex-row justify-center items-center bg-[#c70000] hover:bg-[#881616] text-white px-[10px] lg:w-[100px] py-[6px] rounded-[5px] cursor-pointer xxs:ml-[20px]  text-[12px]"
          onClick={() => handleDelete(lkl.id)}
        >
          <FaTimes className=" mr-[5px] " /> <span>Ta bort</span>
        </a>
      </div>
    </div>
  );
}
