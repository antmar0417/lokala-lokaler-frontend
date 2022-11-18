import Link from "next/link";

export default function ContactContent({ email, phone, text }) {
  const sendEmailTo = `mailto:${email}`;
  const callTo = `tel:${phone}`;

  return (
    <div className="flex flex-col mt-[40px] font-ibmRegular">
      <p className=" xs:text-[16px] md:text-[30px]  font-bold">{text}</p>

      <p>
        E-postadress:{" "}
        <Link
          href={sendEmailTo}
          passHref
          smooth={true}
          offset={50}
          duration={500}
        >
          <a target="_blank" className="hover:text-slate-300 cursor-pointer">
            {" "}
            {email}
          </a>
        </Link>
      </p>

      <p>
        Mobil:{" "}
        <Link href={callTo} passHref smooth={true} offset={50} duration={500}>
          <a target="_blank" className="hover:text-slate-300 cursor-pointer">
            {" "}
            {phone}
          </a>
        </Link>
      </p>
    </div>
  );
}
