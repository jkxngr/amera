"use client";
import { FavItem, RootStateFav } from "@/components/products";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { removeFromFavorites } from "@/redux/reducers/favorites";
import { addItem } from "@/redux/reducers/cartReducer";

const LikePage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootStateFav) => state.favorites.items);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleAddToCart = (item: FavItem) => {
    dispatch(addItem(item));
    dispatch(removeFromFavorites(item.id));
  };
  const handleRemoveFromFavorites = (item: FavItem) => {
    dispatch(removeFromFavorites(item.id));
  };
  if (!isClient) {
    return null;
  }

  return (
    <div className="container">
      <Table>
        <TableCaption>A list of items in your cart.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]"></TableHead>
            <TableHead></TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-right">Stock Status </TableHead>
            <TableHead className="text-right">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {favorites.map((item:FavItem) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">
                <button onClick={() => handleRemoveFromFavorites(item)}>
                  x
                </button>
              </TableCell>
              <TableCell>
                <img
                  src={item.image}
                  alt={item.title}
                  width={"100px"}
                  height={"100px"}
                />
              </TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.price}$</TableCell>

              <TableCell className="text-right text-green-500 font-medium">In stock </TableCell>
              <TableCell className="text-right">
                <button onClick={() => handleAddToCart(item)}>
                  Add To Cart
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LikePage;
