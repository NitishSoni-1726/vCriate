import React, { useContext, useEffect } from "react";
import { appContext } from "../App";
import Product from "./Product";
export default function Home() {
  const { fetchProductList } = useContext(appContext);
  const {
    productList: { data, loading, error },
  } = useContext(appContext);
  console.log(data);
  useEffect(() => {
    fetchProductList();
  }, []);
  return (
    <div className="d-flex flex-wrap w-100 justify-content-center">
      {loading ? (
        <div>Loading...</div>
      ) : (
        data.map((product, index) => {
          return <Product key={index} productDetail={product} />;
        })
      )}
    </div>
  );
}
