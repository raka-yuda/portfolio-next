import { Portfolio } from "../../../types/portfolio";

import type { NextApiRequest, NextApiResponse } from "next";

import fs from "fs";
import path from 'path';

type ResponseType = {
  portfolios: Portfolio[];
};

const fetchPortfolios = () => {
  const dataPath = "./src/data/list-portfolio.json";
  
  const dirRelativeToPublicFolder = '/data/list-portfolio.json'
  const dir = path.resolve('./src', dirRelativeToPublicFolder);

  const rawData = fs.readFileSync(dir);
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
