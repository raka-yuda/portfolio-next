import { Portfolio } from "../../../types/portfolio";

import type { NextApiRequest, NextApiResponse } from "next";

import fs from "fs";
import path from "path";

type ResponseType = {
  portfolios: Portfolio[];
};

const fetchPortfolios = () => {
  const dataPath = "./src/data/list-portfolio.json";
  const rawData = require("../../../data/list-portfolio.json");

  return rawData as Portfolio[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const restaurantData = fetchPortfolios();
  res.status(200).json({
    portfolios: restaurantData,
  });
}
