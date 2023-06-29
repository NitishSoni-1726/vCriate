import React, { useContext } from "react";
import { appContext } from "../App";
import CartItem from "./CartItem";
export default function Cart() {
  const { cartItems } = useContext(appContext);
  console.log(cartItems);
  let total = 0;
  let actualTotal = 0;
  for (let i = 0; i < cartItems?.length || 0; i++) {
    if (cartItems[i].discountedPrice === undefined) {
      total = total + cartItems[i].actualPrice.value * cartItems[i].quantity;
    } else {
      total =
        total + cartItems[i].discountedPrice.value * cartItems[i].quantity;
    }
    actualTotal =
      actualTotal + cartItems[i].actualPrice.value * cartItems[i].quantity;
  }
  return (
    <div>
      {cartItems.length !== 0 ? (
        <div className="p-3">
          <div className="bg-secondary bg-opacity-25 rounded p-4">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h1 className="m-0 p-0 ms-3">Shopping Cart</h1>
              <h3 className="m-0 p-0 me-3">Price</h3>
            </div>
            <div className="w-100 border"></div>
            <div className="mt-3">
              {cartItems.map((item, index) => {
                return <CartItem item={item} index={index} />;
              })}
            </div>
            <div className="d-flex justify-content-end mt-4">
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
              <h6 className="text-end">Delivery Charges : </h6>
              <h6
                className="me-3 text-end"
                style={{ marginLeft: "30px", width: "100px" }}
              >
                FREE
              </h6>
            </div>
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
          {cartItems.length !== 0 ? (
            <div
              className="d-flex justify-content-end mt-4 mb-4 p-4 bg-dark bg-opacity-25"
              style={{ position: "sticky", bottom: 0, right: 0 }}
            >
              <button className="btn btn-warning btn-lg">Place Order</button>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="d-flex flex-column align-items-center justify-content-center p-5 bg-dark bg-opacity-25 m-4">
          <h1 className="align-self-start">Shopping Cart</h1>
          <div className="border w-100"></div>
          <h3 className="mt-4 p-4">Your Cart is Empty</h3>
        </div>
      )}
    </div>
  );
}
