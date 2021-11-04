import { Contact } from "./../../../types/contact";

import type { NextApiRequest, NextApiResponse } from "next";

type ResponseType = {
  contacts: Contact[];
};

const fetchContacts = () => {
  const rawData = require("../../../data/list-contact.json");
  return rawData as Contact[];
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
