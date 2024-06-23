import React from "react";
import { Product } from "@/service/product";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { RatingIcon } from "../../public/rating-icon";

export const FlashDeals = async () => {
  const product = await Product();

  return (
    <div>
      <div className="flex flex-wrap xl:flex-nowrap xl:justify-between items-center">
        <div className="">
          <h1 className="text-[23px] font-light">
            <span className="text-blackout font-medium text-[23px]">Top Flash</span> Deals
          </h1>
          <div className="flex flex-wrap xl:flex-nowrap items-center bg-white mt-7 max-w-[740px] w-full p-5">
            {product?.results.slice(0, 1).map((item) => (
              <img
                key={item.id}
                src={item.image}
                alt=""
                className="w-[280px] h-[315px] object-cover"
              />
            ))}
            <div className="ml-5">
              <p className="text-basaltGrey text-xs mb-[5px]">Game & Toy, Smart Phones</p>
              <h3 className="text-sapphireBlue font-medium text-base mb-3">Chair living room fiberglass</h3>
              <RatingIcon />
              <div className="mt-2 flex gap-1 items-center">
                <p className="text-blackout text-lg font-medium">$30.00</p>
                <p className="text-rainyGrey line-through text-sm">$45.00</p>
              </div>
              <p className="text-sm text-goshawkGrey mb-[15px] max-w-[376px]">Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. Investigationes…</p>
              <p className="text-blackout text-sm font-medium">Hurry up! Special offer:</p>
              <div className="flex space-x-2 items-center mt-2">
                <div className="text-center bg-mauimist w-[58px] h-[58px] rounded-full px-[13px] py-[9px]">
                  <p className="text-base font-medium text-blackout">420</p>
                  <p className="text-xs text-basaltGrey">DAYS</p>
                </div>
                <div className="text-center bg-mauimist w-[58px] h-[58px] rounded-full px-[13px] py-[9px]">
                  <p className="text-base font-medium text-blackout">13</p>
                  <p className="text-xs text-basaltGrey">HRS</p>
                </div>
                <div className="text-center bg-mauimist w-[58px] h-[58px] rounded-full px-[13px] py-[9px]">
                  <p className="text-base font-medium text-blackout">47</p>
                  <p className="text-xs text-basaltGrey">MINS</p>
                </div>
                <div className="text-center bg-mauimist w-[58px] h-[58px] rounded-full px-[13px] py-[9px]">
                  <p className="text-base font-medium text-blackout">5</p>
                  <p className="text-xs text-basaltGrey">SECS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-auto mt-10 xl:mt-0">
          <div className="max-w-[700px] relative">
            <h1 className="text-[23px] font-light">
              <span className="text-blackout font-medium text-[23px]">Top Flash</span> Deals
            </h1>
            <Carousel>
              <CarouselContent className="gap-4">
                {product?.results.map((item) => (
                  <CarouselItem key={item.id} className="xs:basis-1/3  flex flex-col mt-7 justify-between bg-white h-[359px] text-center max-w-[233px] p-5">
                    <img src={item.image} alt="" width={"180px"} height={"223px"} className="object-cover mx-auto" />
                    <div>
                      <p className="text-basaltGrey text-xs">Digital, Game & Toy</p>
                      <p className="text-sapphireBlue">Recliner synthetic deck chair</p>
                      <p className="text-blackout text-lg font-medium">$66.00</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute top-0 left-3/4 xl:left-[600px]" />
              <CarouselNext className="absolute top-0 right-0" />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};
