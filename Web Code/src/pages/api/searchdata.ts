import type { NextApiRequest, NextApiResponse } from "next";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/utils/db";
import { type Washroom } from "@/types/washroom";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { search } = req.body as {
      search: string;
    };
    if (!search) {
      res.status(400).json({ message: "Missing Search" });
      return;
    } else {
      const allDocs = await getDocs(collection(db, "washrooms_hygenie"));
      const allWashroomsWithId = allDocs.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as Washroom[];
      const filteredWashrooms = allWashroomsWithId.filter((washroom) => {
        return washroom.title.toLowerCase().includes(search.toLowerCase());
      });
      res.status(200).json(filteredWashrooms);
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
