import { Contact } from "./../../../types/contact";

import type { NextApiRequest, NextApiResponse } from "next";

import fs from "fs";
import path from 'path';

type ResponseType = {
  contacts: Contact[];
};

const fetchContacts = () => {
  const dataPath = "./src/data/list-contact.json";
  const rawData = fs.readFileSync(path.resolve(__dirname, dataPath) , "utf-8");
  return JSON.parse(rawData) as Contact[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const contactsData = fetchContacts();
  const contacts: Contact[] = contactsData.filter(
    (contact) => contact.is_active
  );
  res.status(200).json({
    contacts,
  });
}
