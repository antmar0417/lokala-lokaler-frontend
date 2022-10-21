import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/EventItem.module.css";

export default function LocalItem({ lkl }) {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={lkl.image ? lkl.image : "/images/lokal-default.png"}
          width={170}
          height={100}
          className="rounded-md"
        />
      </div>

      <div className={styles.info}>
        <p className=" text-[24px] font-bold">{lkl.town}</p>
        <p>{lkl.address}</p>
        <p>{`Plats för ${lkl.quantity} personer`}</p>
        <p className=" text-[20px] "></p>
        <p className=" text-[20px] ">{`Pris ${lkl.price} kr`}</p>
      </div>

      <div className={styles.link}>
        <Link href={`/`}>
          <a className="btn">Details</a>
        </Link>
      </div>
    </div>
  );
}
