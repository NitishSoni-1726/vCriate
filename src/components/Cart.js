import React, { useContext } from "react";
import { appContext } from "../App";
import CartItem from "./CartItem";
export default function Cart() {
  const { cartItem } = useContext(appContext);
  console.log(cartItem);
  let total = 0;
  let actualTotal = 0;
  for (let i = 0; i < cartItem?.length || 0; i++) {
    if (cartItem[i].discountedPrice === undefined) {
      total = total + cartItem[i].actualPrice.value * cartItem[i].quantity;
    } else {
      total = total + cartItem[i].discountedPrice.value * cartItem[i].quantity;
    }
    actualTotal =
      actualTotal + cartItem[i].actualPrice.value * cartItem[i].quantity;
  }
  return (
    <div className="p-3">
      <div className="bg-secondary bg-opacity-25 rounded border p-4">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h1 className="m-0 p-0 ms-3">Shopping Cart</h1>
          <h3 className="m-0 p-0 me-3">Price</h3>
        </div>
        <div className="w-100 border"></div>
        <div className="mt-3">
          {cartItem.map((item, index) => {
            return <CartItem item={item} index={index} />;
          })}
        </div>
        <div className="d-flex justify-content-end">
          <h5 className="text-end">Actual Total : </h5>
          <h5
            className="me-3 text-end"
            style={{
              marginLeft: "30px",
              textDecoration: "line-through",
              width: "100px",
            }}
          >
            {" "}
            ₹ {actualTotal}
          </h5>
        </div>
        <div className="d-flex justify-content-end">
          <h5 className="text-end">Your Savings : </h5>
          <h5
            className="me-3 text-end"
            style={{ marginLeft: "30px", width: "100px" }}
          >
            {" "}
            - ₹ {actualTotal - total}
          </h5>
        </div>
        <div className="border"></div>
        <div className="d-flex justify-content-end mt-2">
          <h4 className="text-end">Total : </h4>
          <h4
            className="me-3 text-end"
            style={{ marginLeft: "30px", width: "100px" }}
          >
            {" "}
            ₹ {total}
          </h4>
        </div>
      </div>
    </div>
  );
}
