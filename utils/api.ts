import { PasswordDoc, ProductsDoc } from "../server/db";

async function fetchURL<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

export async function getPasswordDoc(name: string): Promise<PasswordDoc> {
  return await fetchURL<PasswordDoc>(`/api/${name}`);
}

export async function getPasswordDocs(): Promise<PasswordDoc> {
  return await fetchURL<PasswordDoc>("api/users");
}

export async function getProducts(): Promise<ProductsDoc[]> {
  return await fetchURL<ProductsDoc[]>("/api/products");
}
