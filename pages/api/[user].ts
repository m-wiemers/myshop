// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";
import { readPasswordDoc, withDatabase } from "../../server/db";

export default withDatabase(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const user = "Google";
    const passwordDoc = await readPasswordDoc(`${user}`);
    res.status(200).json(passwordDoc);
  }
);
