import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Category } from "@/service/accordion";
import { ShopIcon } from "../../public/shop-icon";
import { DeliverIcon } from "../../public/deliver-icon";
import { PaymentIcon } from "../../public/payment-icon";
import { HelpCenterIcon } from "../../public/help-center-icon";
import { ServiceIcon } from "../../public/service-icon";
import { Carusel } from "@/components/carusel";
import { MiniBanner } from "@/components/mini-banner";
import { TopCategories } from "@/components/top-categories";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FlashDeals } from "@/components/flash-deals";
import Link from "next/link";
const Home = async () => {
  const category = await Category();
  return (
    <section className="bg-whiteSolid py-[30px]">
      <div className="container">
        <div className="flex gap-[30px] ">
          <div className="xs:block s:hidden">
            <ScrollArea className="h-[525px] p-4">
              {category?.results?.map(
                (category: {
                  children: any;
                  id: number | undefined;
                  title: string | undefined;
                }) => (
                  <Accordion
                    key={category.id}
                    type="single"
                    collapsible
                    className="w-[275px]"
                  >
                    <AccordionItem value="item-1">
                      {category.children.length ? (
                        <AccordionTrigger>{category.title}</AccordionTrigger>
                      ) : (
                        <></>
                      )}
                      <AccordionContent>
                        {category.children.map(
                          (child: {
                            id: number | undefined;
                            title: string;
                          }) => (
                            <Link
                              href={`/products/${child.id}/${child.title}`}
                              key={child.id}
                              className="block"
                            >
                              {child.title}
                            </Link>
                          )
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                )
              )}
            </ScrollArea>
          </div>
          <Carusel />
        </div>
        <div className="bg-white mt-[30px] py-[30px] px-[30px]">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <div className="flex gap-4 border-r-2 pr-[35px] items-center">
              <DeliverIcon />
              <div>
                <p className="text-blackout font-bold text-[13px]">
                  FREE DELIVERY
                </p>
                <p className="text-goshawkGrey text-[13px]">
                  For all orders over $120
                </p>
              </div>
            </div>
            <div className="flex gap-4 border-r-2 px-[35px] items-center">
              <PaymentIcon />
              <div>
                <p className="text-blackout font-bold text-[13px]">
                  Safe Payment
                </p>
                <p className="text-goshawkGrey text-[13px]">
                  100% secure payment
                </p>
              </div>
            </div>
            <div className="flex gap-4 border-r-2 px-[35px] items-center">
              <ShopIcon />
              <div>
                <p className="text-blackout font-bold text-[13px]">
                  Shop With Confidence
                </p>
                <p className="text-goshawkGrey text-[13px]">
                  If goods have problems
                </p>
              </div>
            </div>
            <div className="flex gap-4 border-r-2 px-[35px] items-center">
              <HelpCenterIcon />
              <div>
                <p className="text-blackout font-bold text-[13px]">
                  24/7 Help Center
                </p>
                <p className="text-goshawkGrey text-[13px]">
                  Dedicated 24/7 support
                </p>
              </div>
            </div>
            <div className="flex gap-4 pl-[35px] items-center">
              <ServiceIcon />
              <div>
                <p className="text-blackout font-bold text-[13px]">
                  Friendly Services
                </p>
                <p className="text-goshawkGrey text-[13px]">
                  30 day satisfaction guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[30px] mb-[50px]">
          <MiniBanner />
        </div>
        <div className="mt-[30px] mb-[50px]">
          <TopCategories />
        </div>
        <div className="mt-[30px] mb-[50px]">
          <FlashDeals />
        </div>
      </div>
    </section>
  );
};
export default Home;
