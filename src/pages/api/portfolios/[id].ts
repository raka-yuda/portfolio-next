import { Portfolio } from "./../../../types/portfolio";

import type { NextApiRequest, NextApiResponse } from "next";

import fs from "fs";

type ResponseType = {
  portfolio: Portfolio | "";
};

const fetchPortfolios = () => {
  const dataPath = "./src/data/list-portfolio.json";
  const rawData = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(rawData) as Portfolio[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { id } = req.query;
  const restaurantData = fetchPortfolios();
  let portfolio = null;

  if (typeof id === "string") {
    const data = restaurantData[parseInt(id)];
    if (data === undefined) {
      portfolio = null;
    } else {
      portfolio = data;
    }
  }
  if (portfolio === null) {
    res.status(200).json({
      portfolio: "",
    });
  } else {
    res.status(200).json({
      portfolio,
    });
  }
}
