import type { NextApiRequest, NextApiResponse } from "next";
import sequelize from "@/lib/sequelize";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await sequelize.authenticate();
    return res.status(200).json({ success: true, message: "Database Connected ✔" });
  } catch (error:any) {
    return res.status(500).json({ success: false, error: error.message });
  }
}
