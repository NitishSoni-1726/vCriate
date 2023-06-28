import React from "react";
export default function (props) {
  console.log(props.image);
  return (
    <img
      src={props.image.image}
      alt="..."
      style={{ width: "500px", height: "500px" }}
    ></img>
  );
}
