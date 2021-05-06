import { Collection, Db, MongoClient } from "mongodb";
import CryptoJS from "crypto-js";

let client: MongoClient = null;
let db: Db = null;

export type PasswordDoc = {
  name: string;
  password: string;
};

export async function connectDB(url: string, dbName: string) {
  client = await MongoClient.connect(url, { useUnifiedTopology: true });
  db = client.db(dbName);
}

export function getCollection<T>(collectionName: string): Collection<T> {
  return db.collection<T>(collectionName);
}

export async function closeDB() {
  client.close();
}

export async function readPasswordDoc(
  passwordName: string
): Promise<PasswordDoc | null> {
  const passwordCollection = await getCollection<PasswordDoc>("passwords");
  const passwordDoc = await passwordCollection.findOne({ name: passwordName });
  if (!passwordDoc) {
    return null;
  }
  return {
    name: passwordDoc.name,
    password: decryptPassword(passwordDoc.password),
  };
}

export function decryptPassword(ciphertext: string) {
  const bytes = CryptoJS.AES.decrypt(
    ciphertext,
    process.env.CRYPTO_MASTER_PASSWORD
  );
  return bytes.toString(CryptoJS.enc.Utf8);
}
