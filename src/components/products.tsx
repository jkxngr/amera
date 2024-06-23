"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FavoritesIcon } from "../../public/star-icon";
import { CompareIcon } from "../../public/compare-icon";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "@/redux/reducers/cartReducer";
import {
  addToFavorites,
  removeFromFavorites,
} from "@/redux/reducers/favorites";

interface ProductsPropsType {
  title: string;
  images: { image: string }[];
  price: number;
  id: number;
  quantity: number;
}

export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

export interface RootState {
  cart: CartState;
}

export interface FavItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export interface FavState {
  items: FavItem[];
}

export interface RootStateFav {
  favorites: FavState;
}
const ProductsComp: React.FC<ProductsPropsType> = ({
  title,
  images,
  price,
  id,
  quantity,
}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleAddToCart = () => {
    dispatch(
      addItem({ id, title, price, image: images[0].image, quantity: 1 })
    );
  };

  const handleRemoveFromCart = () => {
    dispatch(removeItem({ id }));
  };
  const favorites = useSelector((state: RootStateFav) => state.favorites.items);

  const handleToggleFavorite = () => {
    if (favorites.find((item) => item.id === id)) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(
        addToFavorites({
          id,
          title,
          price,
          image: images[0].image,
          quantity: 1,
        })
      );
    }
  };

  let isInCart = false;
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].id === id) {
      isInCart = true;
      break;
    }
  }

  return (
    <div>
      <div className="text-center w-[262px] relative product-card group hover:shadow-lg p-4 rounded-lg hover:scale-110 transition duration-500 cursor-pointer">
        <Link href={`/product_detail/${id}`}>
          <img src={images[0].image} alt="" width={"300px"} />
        </Link>
        <p className="text-basaltGrey text-xs">Digital, Game & Toy</p>
        <h1 className="text-sapphireBlue text-sm">{title}</h1>
        <p className="text-blackout font-bold text-lg">{price}$</p>
        <div className="absolute top-2 right-1 button-group opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            className="hidden favorite-btn group-hover:block mb-4"
            onClick={handleToggleFavorite}
          >
            <FavoritesIcon />
          </button>
          <button className="hidden compare-btn group-hover:block">
            <CompareIcon />
          </button>
        </div>
        {isMounted ? (
          isInCart ? (
            <button
              className="hidden text-carbon bg-primary rounded-3xl h-[40px] mt-4 group-hover:block absolute bottom-5 left-6 w-[220px]"
              onClick={handleRemoveFromCart}
            >
              Remove From Cart
            </button>
          ) : (
            <button
              className="hidden text-carbon bg-primary rounded-3xl h-[40px] mt-4 group-hover:block absolute bottom-5 left-6 w-[220px]"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          )
        ) : (
          <button className="hidden text-carbon bg-primary rounded-3xl h-[40px] mt-4 group-hover:block absolute bottom-5 left-6 w-[220px]">
            Loading...
          </button>
        )}
      </div>
    </div>
  );
};
export default ProductsComp;
