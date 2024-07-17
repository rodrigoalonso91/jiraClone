import { db } from "@/database";
import { EntryModel } from "@/models";
import { Entry } from "@/types";
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

type Data = 
| { message: string; }
| Entry

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  const { id } = req.query;

  if ( !mongoose.isValidObjectId(id) ) return res.status(400).json({ message: 'El id no es válido' });

  switch (req.method) {
    case 'PUT':
      return updateEntry(req, res);
    case 'GET':
      return getEntryById(req, res);
    default:
      return res.status(400).json({ message: 'Endpoint does not exist' });
  }

}

const getEntryById = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

  const { id } = req.query;

  try {
    await db.connect();
    const entry = await EntryModel.findById(id);
    await db.disconnect();

    if (!entry) {
      return res.status(404).json({ message: 'No hay entrada con ese ID: ' + id });
    }

    return res.status(200).json(entry);
  }
  catch (error: any) {
    await db.disconnect();
    console.log(error);
    return res.status(500).json({ message: 'Algo salio mal, revisar consola' });
  }
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

  const { id } = req.query;
  try {
    await db.connect();
    const entryToUpdate = await EntryModel.findById(id)

    if (!entryToUpdate) {
      await db.disconnect();
      return res.status(400).json({ message: 'No hay entrada con el ID ' + id });
    }

    const { description = entryToUpdate.description, status = entryToUpdate.status } = req.body;
    const updatedEntry = await EntryModel.findByIdAndUpdate(id, { description, status }, { runValidators: true, new: true });

    await db.disconnect();
    
    return res.status(200).json(updatedEntry!);
  }
  catch (error: any) {
    await db.disconnect();
    console.log(error);
    return res.status(500).json({ message: 'Algo salio mal, revisar consola' });
  }
}