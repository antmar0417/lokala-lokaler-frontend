const { lokaler } = require("./data.json");

export default (req, res) => {
  const lkl = lokaler.filter((lk) => lk.slug === req.query.slug);

  if (req.method === "GET") {
    res.status(200).json(lkl);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
};
