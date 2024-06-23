import React from "react";
import { GetProductById } from "@/service/getProductById";
import ProductsComp  from "@/components/products";
interface Params {
  params: { productId: { id: number | undefined; title: string }[] };
}


const Products = async ({ params }: Params) => {
  const products = await GetProductById(Number(params.productId[0]));

  return (
    <div className="container gap-6 grid grid-cols-5 my-5 lg:grid-cols-5 xs:grid-cols-4 xm:grid-cols-3 sm:grid-cols-2 s:grid-cols-1">
      {products?.results?.map((product, index) => (
        <ProductsComp {...product} key={index}   price={Number(product.price)}/>
      ))}
    </div>
  );
};
export default Products;
