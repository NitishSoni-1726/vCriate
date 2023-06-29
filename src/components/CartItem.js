import React, { useContext } from "react";
import { appContext } from "../App";
export default function CartItem(props) {
  const addButton = React.createRef();
  const removeButtton = React.createRef();
  const { addItem } = useContext(appContext);
  let discountedPrice = 0;
  if (props.item.discountedPrice === undefined) {
    discountedPrice = props.item.actualPrice.value;
  } else {
    discountedPrice = props.item.discountedPrice.value;
  }
  const { cartItems } = useContext(appContext);
  function handleDecrease() {
    if (cartItems[props.index].quantity === 1) {
      removeButtton.current.setAttribute = ("disabled", true);
    } else {
      cartItems[props.index].quantity = cartItems[props.index].quantity - 1;
      addItem([...cartItems]);
    }
  }
  function handleIncrease() {
    if (cartItems[props.index].quantity === 10) {
      addButton.current.setAttribute = ("disabled", true);
    } else {
      cartItems[props.index].quantity = cartItems[props.index].quantity + 1;
      addItem([...cartItems]);
    }
  }
  function handleDelete() {
    let cart = [];
    for (let i = 0; i < cartItems.length; i++) {
      if (i !== props.index) {
        cart.push(cartItems[i]);
      }
    }
    addItem(cart);
  }
  console.log(cartItems[props.index]);
  return (
    <div className="mt-2 bg-light p-3 bg-opacity-50" data-testid="cart-item">
      <div className="d-flex flex-wrap justify-content-between">
        <div className="d-flex flex-wrap align-items-center">
          <img
            className="ms-3"
            src={props.item.image}
            style={{ width: "200px", height: "200px" }}
          ></img>
          <div>
            <h3 className="m-0 ms-3 mt-2 text-dark">{props.item.name}</h3>
            <h4 className="m-0 ms-3 text-dark">
              By <span className="text-danger">{props.item.brandName}</span>
            </h4>
            <h6 className="ms-3 mt-2 text-dark" style={{ maxWidth: "500px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              quidem itaque ipsam accusantium natus. Porro eligendi, incidunt
              laborum iste facilis officia sunt, dolores labore animi asperiores
              odio illo! Mollitia, quas!
            </h6>
            <div className="d-flex align-items-center">
              <div className="d-flex ms-3 align-items-center">
                <h6 className="m-0 p-0 me-2 text-dark">Quantiy</h6>
                <button
                  data-testid="decrease-butoon"
                  className="m-0 btn btn-dark btn-sm"
                  onClick={handleDecrease}
                  ref={removeButtton}
                >
                  -
                </button>
                <h6
                  data-testid="quantity-display"
                  className="m-0 ms-2 me-2 text-dark bg-light ps-2 pe-2 pt-1 pb-1"
                >
                  {cartItems[props.index].quantity}
                </h6>
                <button
                  data-testid="increase-quantity"
                  className="m-0 btn btn-dark btn-sm"
                  onClick={handleIncrease}
                  ref={addButton}
                >
                  +
                </button>
              </div>
              <button
                data-testid="delete-item-from-cart"
                className="btn btn-danger btn-sm ms-2"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center mt-3">
          <h5
            className="text-danger"
            style={{ textDecoration: "line-through" }}
          >
            ₹ {props.item.actualPrice.value * cartItems[props.index].quantity}
          </h5>
          <h4
            className="me-3 text-end text-success"
            style={{ marginLeft: "40px", width: "100px" }}
          >
            ₹ {discountedPrice * cartItems[props.index].quantity}
          </h4>
        </div>
      </div>
    </div>
  );
}
