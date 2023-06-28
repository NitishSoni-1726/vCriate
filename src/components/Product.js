import React from "react";
export default function (props) {
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

  return (
    <div className="text-dark">
      <div
        className="border border-light m-4 p-3 d-flex flex-column align-items-center rounded bg-black bg-opacity-25 product"
        style={{ height: "555px" }}
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
      </div>
    </div>
  );
}
