import styles from "./Product.module.css";

export type ProductProps = {
  headline: string;
  articlenumber: number;
  desciption: string;
  price: number;
  image: string;
};

function Product({
  headline,
  articlenumber,
  desciption,
  price,
  image,
}: ProductProps) {
  function enlargeNumber(number: number) {
    const num = number.toString();
    return num.padStart(5, "0");
  }

  return (
    <div className={styles.container}>
      <p className={styles.articlenumber}>
        {"Art.-Nr.: "}
        {articlenumber.toString().length < 5
          ? enlargeNumber(articlenumber)
          : articlenumber}
      </p>
      <h2 className={styles.headline}>{headline}</h2>
      <img src={image} className={styles.image} />
      <p>{desciption}</p>
      <p className={styles.price}>{price.toString().replace(".", ",")} €</p>
    </div>
  );
}

export default Product;
