"use client";
import React, { useState, useEffect } from "react";
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
import {
  removeItem,
  incrementQuantity,
  decrementQuantity,
} from "@/redux/reducers/cartReducer";
import { RootState } from "@/components/products";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeItem({ id }));
  };

  const handleIncrement = (id: number) => {
    dispatch(incrementQuantity({ id }));
  };

  const handleDecrement = (id: number) => {
    dispatch(decrementQuantity({ id }));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  if (!isClient) {
    return (
      <div className="container">
        <h2>Cart</h2>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <Table>
          <TableCaption>A list of items in your cart.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]"></TableHead>
              <TableHead></TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="">Quantity</TableHead>
              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cartItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">
                  <button onClick={() => handleRemoveFromCart(item.id)}>
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
                <TableCell className="text-right ">
                  <div className="s:flex ">
                    <button
                      className="w-[30px] h-[35px] bg-green-400 p-2  rounded-lg"
                      onClick={() => handleIncrement(item.id)}
                    >
                      +
                    </button>
                    <span className="w-[30px] h-[35px]  p-2  rounded-lg">
                      {item.quantity}
                    </span>
                    <button
                      className="w-[30px] h-[35px] bg-red-400 p-2  rounded-lg"
                      onClick={() => handleDecrement(item.id)}
                    >
                      -
                    </button>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  {item.price * item.quantity}$
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={5} className="text-right">
                Total
              </TableCell>
              <TableCell className="text-right w-[200px]">
                {calculateTotalPrice()}$
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      )}
    </div>
  );
};

export default Cart;
