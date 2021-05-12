import { useEffect, useState } from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Product from "../components/product/Product";
import { checkUserState, ProductsDoc } from "../server/db";
import styles from "../styles/Products.module.css";
import { getProducts } from "../utils/api";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const password = "irgendwas";
  const { user } = context.query;
  const userState = await checkUserState(user.toString(), password);

  return { props: { userState } };
};

export default function Products({
  userState,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [products, setProducts] = useState<ProductsDoc[]>([]);

  useEffect(() => {
    if (userState) {
      getProducts().then(setProducts);
    }
  });

  if (!products) {
    return <div>Loading... or you have no access!</div>;
  }

  const productsList = products.map((product) => (
    <Product
      key={product.articlenumber}
      articlenumber={product.articlenumber}
      headline={product.headline}
      desciption={product.desciption}
      price={product.price}
      image={product.image}
    />
  ));

  return (
    <div className={styles.container}>
      <main className={styles.main}>{productsList}</main>
    </div>
  );
}
