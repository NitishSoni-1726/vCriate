import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { appContext } from "../App";
export default function (props) {
  const { setSelectedProduct } = useContext(appContext);
  let costPrice;
  let discount;
  if (props.productDetail.discountedPrice === undefined) {
    costPrice = props.productDetail.actualPrice.formattedValue;
    discount = 0;
  } else {
    costPrice = props.productDetail.discountedPrice.formattedValue;
    discount =
      (props.productDetail.discountedPrice.value /
        props.productDetail.actualPrice.value) *
      100;
    discount = Math.round(discount);
  }
  function handleSelect() {
    setSelectedProduct(props.productDetail);
  }

  return (
    <div className="text-dark">
      <Link
        to={`/product/${props.productDetail.code}`}
        className="border border-light m-4 p-3 d-flex flex-column align-items-center rounded bg-success bg-opacity-25 product"
        style={{ height: "555px", textDecoration: "none" }}
      >
        <img
          src={props.productDetail.image}
          style={{ width: "330px", height: "330px", border: "2px solid black" }}
          className="rounded"
        ></img>
        <h4 className="text-center mt-3 text-light" style={{ width: "330px" }}>
          {props.productDetail.name}
        </h4>
        <h6
          className="text-light"
          style={{
            margin: "0",
            padding: "0",
          }}
        >
          By{" "}
          <span className="text-danger">{props.productDetail.brandName}</span>
        </h6>
        <div className="mt-4 bg-light bg-opacity-75 w-100 p-3">
          <h5
            className="text-center text-danger"
            style={{ textDecoration: "line-through" }}
          >
            {props.productDetail.actualPrice.formattedValue}
          </h5>
          <h5 className="text-center text-success">
            {costPrice} ({discount + "% off"})
          </h5>
        </div>
      </Link>
    </div>
  );
}
