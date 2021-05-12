import type { NextApiRequest, NextApiResponse } from "next";
import { readProductsDoc, withDatabase } from "../../../server/db";

export default withDatabase(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const passwordDoc = await readProductsDoc();
    res.status(200).json(passwordDoc);
  }
);
