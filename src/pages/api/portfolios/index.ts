import { Portfolio } from "../../../types/portfolio";

import type { NextApiRequest, NextApiResponse } from "next";

import fs from "fs";
import path from 'path';

type ResponseType = {
  portfolios: Portfolio[];
};

const fetchPortfolios = () => {
  const dataPath = "./src/data/list-portfolio.json";
  const rawData = fs.readFileSync(path.resolve(__dirname, dataPath), "utf-8");
  return JSON.parse(rawData) as Portfolio[];
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
