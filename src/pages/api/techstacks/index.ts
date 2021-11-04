import { Techstack } from "../../../types/techstack";

import type { NextApiRequest, NextApiResponse } from "next";

import fs from "fs";
import path from "path";

type ResponseType = {
  techstacks: Techstack[];
};

const fetchTechstacks = () => {
  const dataPath = "./src/data/list-techstack.json";
  const rawData = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(rawData) as Techstack[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const techstacksData = fetchTechstacks();
  res.status(200).json({
    techstacks: techstacksData,
  });
}
