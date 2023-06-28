import React, { useContext, useEffect } from "react";
import { appContext } from "../App";
import Product from "./Product";
export default function Home() {
  const { fetchProductList } = useContext(appContext);
  const {
    productList: { data, loading, error },
  } = useContext(appContext);
  useEffect(() => {
    fetchProductList();
  }, []);
  return (
    <div className="d-flex flex-wrap w-100 justify-content-center">
      {loading ? (
        <div className="d-flex flex-column align-items-center justify-content-center mt-5">
          <div className="spinner-border" role="status"></div>
          <div className="mt-3">Loading Products...</div>
        </div>
      ) : (
        data.map((product, index) => {
          return <Product key={index} productDetail={product} />;
        })
      )}
    </div>
  );
}
