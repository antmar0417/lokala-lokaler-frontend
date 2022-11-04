import Link from "next/link";
import Image from "next/image";

export default function PremiseItem({ lkl }) {
  const { attributes } = lkl;

  return (
    <div className=" bg-premiseItem xs:flex xs:flex-col md:grid md:grid-cols-3 justify-center items-center space-x-[40px] font-ibmRegular p-[13px] my-[40px]  xs:mx-[20px] bcm:mx-[40px] lg:mx-[100px] xl:mx-[200px] rounded-[8px] shadow-3xl ">
      {/* xs:grid-rows-1 */}

      <div className=" xs:text-center">
        <Image
          alt={attributes.name}
          src={
            attributes.image && attributes.image.data
              ? attributes.image.data.attributes.formats.thumbnail.url
              : "/images/premise-default.png"
          }
          width={401}
          height={235}
          className="rounded-md"
        />
      </div>

      <div className="xs:mt-[10px] md:mt-0 xs:pr-[40px] md:pr-[0px] ">
        <p className="cm:text-[24px] font-bold">{attributes.town}</p>
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
        <p className=" cm:text-[20px] ">{`Pris ${attributes.price} kr`}</p>
      </div>

      <div className="xs:mt-[10px] md:mt-[0px] xs:pr-[40px] md:pr-[0px] md:justify-self-end">
        <Link href={`/lokaler/${attributes.slug}`}>
          <button className="inline-block bg-buttonColor hover:bg-buttonHover  text-white px-[10px] py-[15px] rounded-[5px] cursor-pointer ">
            <a>Mer Info</a>
          </button>
        </Link>
      </div>
    </div>
  );
}
