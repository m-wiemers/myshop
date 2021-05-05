import { Collection, Db, MongoClient } from "mongodb";

let client: MongoClient = null;
let db: Db = null;

export type PasswordDoc = {
  name: string;
  password: string;
};

export type Product = {
  _id: string;
  headline: string;
  articlenumber: number;
  desciption: string;
  price: number;
  image: string;
};

export async function connectDB(url: string, dbName: string) {
  client = await MongoClient.connect(url, { useUnifiedTopology: true });
  db = client.db(dbName);
}

export function getCollection<T>(collectionName: string): Collection<T> {
  return db.collection<T>(collectionName);
}

export function closeDB() {
  client.close();
}

export async function readPasswordDoc(
  passwordName: string
): Promise<PasswordDoc | null> {
  const passwordCollection = await getCollection<PasswordDoc>("users");
  const passwordDoc = await passwordCollection.findOne({
    password: passwordName,
  });
  if (!passwordDoc) {
    return null;
  }
  return {
    name: passwordDoc.name,
    password: passwordDoc.password,
  };
}
