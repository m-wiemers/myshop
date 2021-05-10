// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";
import { readPasswordDoc, withDatabase } from "../../server/db";

export default withDatabase(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const passwordDoc = await readPasswordDoc("Google");
    res.status(200).json(passwordDoc);
  }
);
