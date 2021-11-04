import { Techstack } from "../../../types/techstack";

import type { NextApiRequest, NextApiResponse } from "next";

type ResponseType = {
  techstacks: Techstack[];
};

const fetchTechstacks = () => {
  const rawData = require("../../../data/list-techstack.json");
  return rawData as Techstack[];
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
