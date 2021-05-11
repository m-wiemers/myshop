import type { NextApiRequest, NextApiResponse } from "next";
import { readProductsDoc } from "../../../server/db";

export default async function getProductDoc(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const results = await readProductsDoc();

  const products = results.map((product) => {
    return {
      name: product.headline,
      articlenumber: product.articlenumber,
      desrciption: product.desciption,
      price: product.price,
      image: product.image,
    };
  });
  res.status(200).json(products);
}
