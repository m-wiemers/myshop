import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Product, { ProductProps } from "./Product";

export default {
  title: "Common/Product",
  component: Product,
} as Meta;

const Template: Story<ProductProps> = (args) => <Product {...args} />;

export const Schuhe = Template.bind({});
Schuhe.args = {
  headline: "Noname Kinder-Schuhe",
  articlenumber: 14,
  desciption: "Schuhe aus Leder, mit Schnürsenkeln in rot",
  price: 14.95,
  image: "/example.jpg",
};
