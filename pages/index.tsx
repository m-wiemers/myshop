import Product from "../components/product/Product";
import styles from "../styles/Home.module.css";

export default function Home() {
  const exampeProducts = [
    {
      headline: "Schuhe",
      articlenumber: 14,
      desciption: "lorem ipsum",
      price: 14.95,
      image: "./example.jpg",
    },
    {
      headline: "Schuhe",
      articlenumber: 16,
      desciption: "lorem ipsum",
      price: 14.95,
      image: "./example.jpg",
    },
    {
      headline: "Schuhe",
      articlenumber: 19,
      desciption: "lorem ipsum",
      price: 14.95,
      image: "./example.jpg",
    },
    {
      headline: "Schuhe",
      articlenumber: 2,
      desciption: "lorem ipsum",
      price: 14.95,
      image: "./example.jpg",
    },
  ];

  const products = exampeProducts.map((product) => (
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
      <main className={styles.main}>{products}</main>
    </div>
  );
}
