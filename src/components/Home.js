import React, { useContext, useEffect, useState } from "react";
import { appContext } from "../App";
import Product from "./Product";
export default function Home() {
  const { fetchProductList } = useContext(appContext);
  const {
    productList: { data, loading, error },
  } = useContext(appContext);
  const { searchStr } = useContext(appContext);
  const { setSearchStr } = useContext(appContext);
  useEffect(() => {
    fetchProductList();
    // eslint-disable-next-line
  }, []);
  console.log(error);
  let filteredProduct = [...data];
  if (searchStr) {
    const filteredProductTemp = [...filteredProduct];
    filteredProduct = [];
    for (let i = 0; i < filteredProductTemp.length; i++) {
      if (
        filteredProductTemp[i].name
          .toLowerCase()
          .includes(searchStr.toLowerCase()) ||
        filteredProductTemp[i].categoryName
          .toLowerCase()
          .includes(searchStr.toLowerCase()) ||
        filteredProductTemp[i].mainCategoryCode
          .toLowerCase()
          .includes(searchStr.toLowerCase())
      ) {
        filteredProduct.push(filteredProductTemp[i]);
      }
    }
  }

  return (
    <div>
      {loading ? (
        <div className="d-flex flex-column align-items-center justify-content-center mt-5">
          <div className="spinner-border" role="status"></div>
          <div className="mt-3">Loading Products...</div>
        </div>
      ) : (
        <div>
          {searchStr ? (
            <div
              className="d-flex align-items-center bg-dark bg-opacity-50"
              style={{ position: "sticky", top: 0 }}
            >
              <button
                className="btn btn-dark me-3 m-4 btn-lg"
                onClick={() => {
                  setSearchStr("");
                }}
              >
                <i class="fa fa-arrow-left" aria-hidden="true"></i>
              </button>
              <h3 className="m-0">Search Results For "{searchStr}"</h3>
            </div>
          ) : null}
          <div className="d-flex flex-wrap w-100 justify-content-center pt-3 pb-3">
            {filteredProduct.map((product, index) => {
              return <Product key={index} productDetail={product} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}
