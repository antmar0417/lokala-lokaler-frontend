// import { parseCookies } from "@/helpers/index";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { API_URL } from "@/config/index";
// default exports
import Layout from "@/components/Layout";
import Link from "next/link";

export default function AddLocalsPage() {
  const [values, setValues] = useState({
    title: "",
    town: "",
    address: "",
    price: "",
    quantity: "",
    description: "",
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);

    const hasEmptyFields = Object.values(values).some(
      (element) => element === ""
    );

    if (hasEmptyFields) {
      toast.error("Var vänligen sriv in i alla fält");
    }

    const res = await fetch(`${API_URL}/api/lokaler`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
      // body: JSON.stringify(values),
      body: JSON.stringify({ data: values }),
    });

    if (!res.ok) {
      toast.error("Something Went Wrong");
    } else {
      const evt = await res.json();
      router.push(`/lokaler/${evt.slug}`);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <Layout title="Lägg till lokal">
      <h1>Lägg Till Lokal</h1>
    </Layout>
  );
}
