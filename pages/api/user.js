import cookie from "cookie";
import { API_URL } from "@/config/index";

// --------- Checking if the user is logged in ---------
export default async (req, res) => {
  if (req.method === "GET") {
    if (!req.headers.cookie) {
      res.status(403).json({ message: "Not Authorized" });
      return;
    }

    // ------- Parse the cookie and get the token -------
    const { token } = cookie.parse(req.headers.cookie);

    // -------- Passing the token to strapi route --------
    const strapiRes = await fetch(`${API_URL}/api/users/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const user = await strapiRes.json();

    if (strapiRes.ok) {
      res.status(200).json({ user });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};
