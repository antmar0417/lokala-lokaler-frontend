import { useState } from "react";
import { API_URL } from "@/config/index";

export default function ImageUpload({ lklId, imageUploaded }) {
  // -------------- Component state --------------
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("files", image);
    formData.append("ref", "api::premise.premise");
    formData.append("refId", lklId);
    formData.append("field", "image");

    // -------------- Uploading the image to strapi --------------
    const res = await fetch(`${API_URL}/api/upload`, {
      method: "POST",
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
      body: formData,
    });

    // ---- If respons = 200 then call imageUploaded function ----
    if (res.ok) {
      imageUploaded();
    }
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
    // console.log(e.target.files[0]);
  };

  return (
    <div className="flex flex-col justify-center items-center font-ibmRegular">
      <h1 className="mb-[20px] font-bold text-[30px]">Ladda upp din bild</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 ">
        <div className=" bg-[#6ca3f4] p-[5px] w-full rounded-[5px] ">
          {/* ----- An event handler for uploading files ----- */}
          <input
            type="file"
            onChange={handleFileChange}
            className=" bg-[#f4f4f4] p-[20px] rounded-[2px]"
          />
        </div>

        <div className="flex flex-col justify-center items-center">
          <button
            type="submit"
            className="inline-flex bg-[#d21616] hover:bg-[#931616] text-white py-[5px] px-[10px] rounded-[5px] cursor-pointer justify-center items-center text-[12px] w-[140px] mt-[20px] "
          >
            Ladda upp bild
          </button>
        </div>
      </form>
    </div>
  );
}
