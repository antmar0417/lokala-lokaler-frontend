import Link from "next/link";
import Image from "next/image";

export default function PremiseItem({ lkl }) {
  const { attributes } = lkl;

  return (
    <div className=" bg-premiseItem flex flex-row justify-center items-center space-x-[40px] font-ibmRegular p-[13px] my-[20px] mx-[200px] rounded-[8px] shadow-3xl ">
      <div className="basis-1/3">
        <Image
          alt={attributes.name}
          src={
            attributes.image
              ? attributes.image.data.attributes.formats.thumbnail.url
              : "/images/premise-default.png"
          }
          width={401}
          height={235}
          className="rounded-md"
        />
      </div>

      <div className="basis-1/2 ">
        <p className=" text-[24px] font-bold">{attributes.town}</p>
        <p>{attributes.address}</p>
        <p>{`Plats för ${attributes.quantity} personer`}</p>
        <p>
          {"Skapad den "}
          {new Date(attributes.createdAt).toLocaleDateString("sv-SE", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <p className=" text-[20px] ">{`Pris ${attributes.price} kr`}</p>
      </div>

      <Link href={`/lokaler/${attributes.slug}`}>
        <button className="inline-block bg-buttonColor hover:bg-buttonHover  text-white px-[10px] py-[15px] rounded-[5px] cursor-pointer ">
          <a>Mer Info</a>
        </button>
      </Link>
    </div>
  );
}
