import { Collection, Db, MongoClient } from "mongodb";
import CryptoJS from "crypto-js";
import { NextApiRequest, NextApiResponse } from "next";
import { getPasswordDoc } from "../utils/api";

export type PasswordDoc = {
  name: string;
  value: string;
};

export type ProductsDoc = {
  headline: string;
  articlenumber: number;
  desciption: string;
  price: number;
  image: string;
};

let client: MongoClient = null;
let db: Db = null;

const url = process.env.MONGODB_URL;

type Handler = (req: NextApiRequest, res: NextApiResponse) => void;
export const withDatabase = (handler: Handler) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  await connectDB(url, "myshop");
  return handler(req, res);
};

export async function connectDB(url: string, dbName: string) {
  if (db) {
    return;
  }
  client = await MongoClient.connect(url, { useUnifiedTopology: true });
  db = client.db(dbName);
}

export function getCollection<T>(collectionName: string): Collection<T> {
  return db.collection<T>(collectionName);
}

export async function readPasswordDoc(
  passwordName: string
): Promise<PasswordDoc | null> {
  const passwordCollection = await getCollection<PasswordDoc>("users");
  const passwordDoc = await passwordCollection.findOne({ name: passwordName });
  if (!passwordDoc) {
    return null;
  }
  return {
    name: passwordDoc.name,
    value: passwordDoc.value,
  };
}

export async function readProductsDoc(): Promise<ProductsDoc | null> {
  const productCollection = await getCollection<ProductsDoc>("products")
    .find({})
    .toArray();
  if (!productCollection) {
    return null;
  }
  return productCollection;
}

export async function closeDB() {
  client.close();
}

export async function checkUserState(name: string, password: string) {
  const thisUser = await getPasswordDoc(name);
  if (thisUser.value === encryptPassword(password)) {
    return true;
  } else {
    return false;
  }
}

export function decryptPassword(ciphertext: string) {
  const bytes = CryptoJS.AES.decrypt(
    ciphertext,
    process.env.CRYPTO_MASTER_PASSWORD
  );
  return bytes.toString(CryptoJS.enc.Utf8);
}

export function encryptPassword(password: string) {
  return CryptoJS.AES.encrypt(
    password,
    process.env.CRYPTO_MASTER_PASSWORD
  ).toString();
}
