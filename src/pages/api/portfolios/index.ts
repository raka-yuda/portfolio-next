import { Portfolio } from "../../../types/portfolio";

import type { NextApiRequest, NextApiResponse } from "next";

type ResponseType = {
  portfolios: Portfolio[];
};

const fetchPortfolios = () => {
  const rawData = require("../../../data/list-portfolio.json");
  return rawData as Portfolio[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const portfoliosData = fetchPortfolios();
  res.status(200).json({
    portfolios: portfoliosData,
  });
}
