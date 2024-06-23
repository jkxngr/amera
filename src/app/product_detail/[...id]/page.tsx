import React from "react";
import { getProductDetail } from "@/service/getProductDetail";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Params {
  params: { id: string };
}
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProductDetail = async ({ params }: Params) => {
  const product = await getProductDetail(Number(params.id[0]));

  return (
    <div className="container xs:flex s:flex-wrap xs:flex-nowrap  gap-8 justify-center my-[50px]">
      <Carousel >
        <CarouselContent>
          {product.images.map((item, index) => (
            <CarouselItem>
              <img key={index} src={item.image} alt="" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-1" />
        <CarouselNext className="absolute left-60"/>
      </Carousel>

      <div className="max-w-[724px] ">
        <h1 className="text-blackout text-[36px] mb-4">{product.title}</h1>
        <p className="font-medium text-[28px] text-blackout mb-3">
          ${product.price}
        </p>
        <p className="text-goshawkGrey text-sm mb-5">{product.other_detail}</p>
        <button className=" text-carbon bg-primary rounded-3xl h-[40px]  mt-4 bottom-5 left-6 w-[220px] ">
          + Add To Cart
        </button>
        <div className="flex">
          <p>Categories</p>
          <p>{params.id}</p>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
