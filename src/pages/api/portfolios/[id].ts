import { Portfolio } from "./../../../types/portfolio";

import type { NextApiRequest, NextApiResponse } from "next";

type ResponseType = {
  portfolio: Portfolio | null;
};

const fetchPortfolios = () => {
  const rawData = require("../../../data/list-portfolio.json");
  return rawData as Portfolio[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { id } = req.query;
  const portfoliosData = fetchPortfolios();
  let portfolio = null;

  if (typeof id === "string") {
    const data = portfoliosData.find((item: any) => item?.title?.toLowerCase().replace(" ", "-") === id);

    if (data === undefined) {
      portfolio = null;
    } else {
      portfolio = data;
    }
  }
  if (portfolio === null) {
    res.status(200).json({
      portfolio: null,
    });
  } else {
    res.status(200).json({
      portfolio,
    });
  }
}
