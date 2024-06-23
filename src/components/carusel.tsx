import { Banner } from "@/service/banner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";
interface BannerType {
  image: string | undefined;
}

export const Carusel = async () => {
  const banners = await Banner();

  return (
    <div className="mx-auto max-w-full">
      <Carousel
        className="relative max-w-[90%] mx-auto xl:max-w-[1100px]"
        opts={{ loop: true }}
        // plugins={[Autoplay({ delay: 2000 })]}
      >
        <CarouselContent>
          {banners?.results?.map((banner: BannerType, index: number) => (
            <CarouselItem key={index} className="flex justify-center">
              <img
                src={banner.image}
                alt=""
                className="w-full max-w-full xs:h-[525px] s:h-auto xs:max-w-[1000px] sm:max-w-[575px] lg:max-w-[1111px] xl:max-w-[1280px] xxl:max-w-[1500px] "
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};
