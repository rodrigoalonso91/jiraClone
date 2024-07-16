import { db, seedData } from "@/database";
import { EntryModel } from "@/models";
import { Entry } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

type Data = 
| { message: string; }
| Entry[]

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  switch (req.method) {
    case 'GET':
      return getEntries(res);
    default:
      return res.status(400).json({ message: 'Endpoint does not exist' });
  }

}

const getEntries = async (res: NextApiResponse<Data>) => {
  await db.connect();
  const entries = await EntryModel.find().sort({ createdAt: 'ascending' });
  await db.disconnect();
  res.status(200).json(entries);
}