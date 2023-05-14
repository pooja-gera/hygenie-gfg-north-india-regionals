import type { NextApiRequest, NextApiResponse } from "next";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "@/utils/db";
import { type Washroom } from "@/types/washroom";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id, review } = req.body as {
      id: string;
      review: string;
    };
    if (!id || !review) {
      res.status(400).json({ message: "Missing Search" });
      return;
    } else {
      const docRef = doc(db, "washrooms_hygenie", id);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        res.status(400).json({ message: "No such document!" });
        return;
      } else {
        const washroom = docSnap.data() as Washroom;
        if (!washroom.reviews) {
          washroom.reviews = [];
        }
        const newReviews = [review, ...washroom.reviews];
        await setDoc(docRef, { ...washroom, reviews: newReviews });
        res.status(200).json({ message: "Review Added" });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
