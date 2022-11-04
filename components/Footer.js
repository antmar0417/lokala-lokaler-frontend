import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" py-[40px] dark:bg-gray-900 text-center font-ibmRegular">
      <p className="my-[5px] text-white ">
        Copyright &copy; Lokala Lokaler 2022
      </p>
      <p className="my-[5px]">
        <Link href="/om-oss">
          <a className="text-link hover:text-linkHoverFooter ">
            Om Lokala Lokaler
          </a>
        </Link>
      </p>
    </footer>
  );
}
