import Link from "next/link";
import Image from "next/image";

export default function LocalItem({ lkl }) {
  return (
    <div className=" bg-lokacalItem flex flex-row justify-center items-center space-x-[40px] font-ibmRegular p-[13px] my-[20px] mx-[200px] rounded-[8px] shadow-3xl ">
      <div className="basis-1/3">
        <Image
          src={lkl.image ? lkl.image : "/images/lokal-default.png"}
          width={401}
          height={235}
          className="rounded-md"
        />
      </div>

      <div className="basis-1/2 ">
        <p className=" text-[24px] font-bold">{lkl.town}</p>
        <p>{lkl.address}</p>
        <p>{`Plats för ${lkl.quantity} personer`}</p>
        <p className=" text-[20px] "></p>
        <p className=" text-[20px] ">{`Pris ${lkl.price} kr`}</p>
      </div>

      <div className="inline-block bg-buttonColor hover:bg-buttonHover text-white px-[10px] py-[15px] rounded-[5px] cursor-pointer ">
        <Link href={`/`}>
          <a>Mer Info</a>
        </Link>
      </div>
    </div>
  );
}
