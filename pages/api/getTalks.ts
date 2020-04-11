import talks from "./data/talks.json";

export default (req, res) => {
  res.status(200).json(talks);
};
