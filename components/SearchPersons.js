import { useState } from "react";
import { useRouter } from "next/router";

export default function SearchPrice() {
  const [term, setTerm] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/lokaler/sortera-antal-personer?term=${term}`);
    setTerm("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Ange max antal personer"
          className=" xxs:w-[250px] xxs:h-[35px] md:w-[450px] md:h-[45px] p-[5px] border-gray-700 border-[1px] rounded-[5px] focus:outline-none focus:ring focus:ring-link"
        />
      </form>
    </div>
  );
}
