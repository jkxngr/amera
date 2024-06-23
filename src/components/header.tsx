"use client";
import React, { useEffect, useState } from "react";
import { Logo } from "../../public/logo";
import { HeadphoneIcon } from "../../public/headphone-icon";
import { CartIcon } from "../../public/cart-icon";
import { FavoritesIcon } from "../../public/star-icon";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { RootState, RootStateFav } from "./products";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ProfileIcon } from "../../public/profile-icon";
import {
  Sheet,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet";
import { SearchProduct } from "./search";
import { BarsIcon } from "../../public/bars-icon";

export const Header = () => {
  const [isClient, setIsClient] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const favorites = useSelector((state: RootStateFav) => state.favorites.items);
  const { data } = useSession();
  console.log(data);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="container relative">
      <div className="sm:flex xs:justify-between py-[10px] flex-wrap sm:justify-center s:hidden">
        <h1>Welcome to Worldwide Electronics Store</h1>
        <ul className="flex">
          <li className="border-r px-[18px]">
            <a href="">My account</a>
          </li>
          <li className="border-r px-[18px]">
            <a href="">Checkout</a>
          </li>
          <li className="border-r px-[18px]">
            <a href="">Shop</a>
          </li>
          <li className="px-[18px]">
            <a href="">Wishlist</a>
          </li>
        </ul>
      </div>
      <div className="flex justify-between py-10 items-center">
        <div className="flex justify-between items-center  xs:w-[120px] s:w-[7000px]">
          <div>
            <Link href={"/"}>
              <Logo />
            </Link>
          </div>
          <div className="">
            <Sheet>
              <SheetTrigger className="xs:hidden">
                <BarsIcon />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <div className="flex items-center xl:flex s:hidden">
          <HeadphoneIcon />
          <div>
            <p className="text-[14px]">Hotline Free:</p>
            <p className="text-[14px] mt-1 font-medium">06-900-6789-00</p>
          </div>
        </div>
        <div className="relative w-full max-w-[640px]">
          <SearchProduct />
        </div>
        <div className="flex gap-10 xl:flex s:hidden">
          {data?.user ? (
            <div className="relative flex flex-col items-center">
              <Dialog>
                <DialogTrigger>
                  <div>
                    <img
                      src={String(data?.user?.image)}
                      alt={String(data?.user?.image)}
                      className="w-[30px] mx-auto"
                    />
                    {data?.user?.name}
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <div className="text-center">
                    <DialogHeader className="w-[150px] mx-auto">
                      <DialogDescription>
                        <img
                          src={String(data?.user?.image)}
                          alt={String(data?.user?.image)}
                        />
                      </DialogDescription>
                      <DialogDescription>{data?.user?.name}</DialogDescription>
                      <DialogDescription>{data?.user?.email}</DialogDescription>
                      <button onClick={() => signOut()} className="">
                        Log out
                      </button>
                    </DialogHeader>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          ) : (
            <div className="text-center">
              <ProfileIcon />
              <button onClick={() => signIn("google")}>Login</button>
            </div>
          )}
          <Link
            href={"/favorites"}
            className="relative flex flex-col items-center"
          >
            <FavoritesIcon />
            <p className="text-squant text-sm">Favorites</p>
            <span className="absolute -right-3 top-1 bg-mercury rounded-full text-center flex flex-col justify-center text-xs font-medium text-blackout w-[25px] h-[25px]">
              {isClient ? favorites.length : 0}
            </span>
          </Link>
          <Link href={"/cart"} className="relative flex flex-col items-center">
            <CartIcon />
            <p className="text-squant text-sm">My Cart</p>
            <span className="absolute -right-3 top-1 bg-primary rounded-full text-center flex flex-col justify-center text-xs font-medium text-blackout w-[25px] h-[25px]">
              {isClient ? cartItems.length : 0}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
