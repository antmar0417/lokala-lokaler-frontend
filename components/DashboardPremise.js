import Link from "next/link";
import { FaPencilAlt, FaTimes } from "react-icons/fa";

export default function DashboardEvent({ lkl, handleDelete }) {
  return (
    <div className="bg-premiseItem flex flex-row justify-center items-center space-x-[40px] font-ibmRegular p-[13px] my-[20px] mx-[200px] h-[120px] rounded-[8px] shadow-3xl ">
      <h4 className="basis-2/3">
        <Link href={`/lokaler/${lkl.slug}`}>
          <a className=" text-[24px] font-bold">{lkl.title}</a>
        </Link>
      </h4>
      <Link href={`/lokaler/redigera/${lkl.id}`}>
        <a className="flex flex-row justify-center items-center bg-buttonShowAll hover:bg-buttonShowAllHover text-white px-[10px] w-[100px] py-[6px] rounded-[5px] cursor-pointer ml-[20px] text-[12px]">
          <FaPencilAlt className=" mr-[5px] " /> <span>Ändra Lokal</span>
        </a>
      </Link>
      <a
        href="#"
        className="flex flex-row justify-center items-center bg-[#c70000] hover:bg-[#881616] text-white px-[10px] w-[100px] py-[6px] rounded-[5px] cursor-pointer ml-[20px] text-[12px]"
        onClick={() => handleDelete(lkl.id)}
      >
        <FaTimes className=" mr-[5px] " /> <span>Ta bort</span>
      </a>
    </div>
  );
}
