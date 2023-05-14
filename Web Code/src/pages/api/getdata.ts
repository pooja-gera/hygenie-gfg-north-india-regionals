import type { NextApiRequest, NextApiResponse } from "next";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/utils/db";
import { type Washroom } from "@/types/washroom";
import { calculateDistance } from "@/utils/distance";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { longitude, latitude } = req.body as {
      longitude: number;
      latitude: number;
    };
    if (!longitude || !latitude) {
      res.status(400).json({ message: "Missing latitude or logitude" });
      return;
    } else {
      const allDocs = await getDocs(collection(db, "washrooms_hygenie"));
      const allWashroomsWithId = allDocs.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as Washroom[];
      const washroomsWithIn1Km = allWashroomsWithId.filter((washroom) => {
        const distance = calculateDistance(
          latitude,
          longitude,
          washroom.location.latitude,
          washroom.location.longitude
        );
        return distance <= 1;
      });
      // fetch isSafe, isClean, txt from external api
      const baseUrl = "https://rgaurisha.yaga.cf/predict";
      const promises = washroomsWithIn1Km.map((washroom) => {
        return axios.get<{
          isClean: string;
          isSafe: string;
          txt: string;
        }>(baseUrl + "/" + String(washroom.reviews));
      });
      const responses = await Promise.all(promises);
      const washroomsWithSentimentAnalysis = washroomsWithIn1Km.map(
        (washroom, index) => ({
          ...washroom,
          isClean: responses[index]?.data.isClean,
          isSafe: responses[index]?.data.isSafe,
          txt: responses[index]?.data.txt,
        })
      );
      res.status(200).json(washroomsWithSentimentAnalysis);
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
