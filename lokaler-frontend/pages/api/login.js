import { API_URL } from "@/config/index";

export default async (req, res) => {
  // console.log(req.body);
  if (req.method === "POST") {
    const { identifier, password } = req.body;

    const strapiRes = await fetch(`${API_URL}/api/auth/local`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });

    const data = await strapiRes.json();

    console.log({ data });
    // res.json(data);
    if (strapiRes.ok) {
      //set cookie
      res.status(200).json({ user: data.user });
    } else {
      res
        .status(data.error.status)
        // .json({ message: data.message[0].messages[0].message });
        .json({ message: data.error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
};
