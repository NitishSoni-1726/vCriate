import React, { useContext } from "react";
import { appContext } from "../App";
export default function CartItem(props) {
  const addButton = React.createRef();
  const { addItem } = useContext(appContext);
  let discountedPrice = 0;
  if (props.item.discountedPrice === undefined) {
    discountedPrice = props.item.actualPrice.value;
  } else {
    discountedPrice = props.item.discountedPrice.value;
  }
  const { cartItem } = useContext(appContext);
  function handleDecrease() {
    if (cartItem[props.index].quantity === 0) {
      let cart = [];
      for (let i = 0; i < cartItem.length; i++) {
        if (i !== props.index) {
          cart.push(cartItem[i]);
        }
      }
      addItem(cart);
      cartItem[props.index].quantity = 0;
    } else {
      cartItem[props.index].quantity = cartItem[props.index].quantity - 1;
      addItem([...cartItem]);
    }
  }
  function handleIncrease() {
    if (cartItem[props.index].quantity === 10) {
      addButton.current.setAttribute = ("disabled", true);
    } else {
      cartItem[props.index].quantity = cartItem[props.index].quantity + 1;
      addItem([...cartItem]);
    }
  }
  console.log(cartItem[props.index]);
  return (
    <div className="mt-4">
      <div className="d-flex justify-content-between">
        <h3 className="ms-3">{props.item.name}</h3>
        <div className="d-flex align-items-center">
          <h5 style={{ textDecoration: "line-through" }}>
            ₹ {props.item.actualPrice.value * cartItem[props.index].quantity}
          </h5>
          <h4
            className="me-3 text-end"
            style={{ marginLeft: "40px", width: "100px" }}
          >
            ₹ {discountedPrice * cartItem[props.index].quantity}
          </h4>
        </div>
      </div>
      <div className="d-flex ms-3 align-items-center">
        <h4 className="m-0 p-0 me-2">Quantiy</h4>
        <button className="m-0 btn btn-dark" onClick={handleDecrease}>
          -
        </button>
        <h3 className="m-0 ms-2 me-2">{cartItem[props.index].quantity}</h3>
        <button
          className="m-0 btn btn-dark"
          onClick={handleIncrease}
          ref={addButton}
        >
          +
        </button>
      </div>
    </div>
  );
}
