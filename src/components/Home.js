import React, { useContext, useEffect, useState } from "react";
import { appContext } from "../App";
import Product from "./Product";
import FilterPane, { MIN_PRICE, MAX_PRICE } from "./FilterPane";

export default function Home() {
  const { fetchProductList } = useContext(appContext);
  // Values for sortBy - 'none', 'priceHighToLow', 'priceLowToHigh', 'ratingLowToHigh', 'ratingHighToLow'
  const [sortBy, setSortBy] = useState("none");
  // It can take 'all', 'men' and 'women' as it's value
  const [genderFilter, setGenderFilter] = useState("all");
  const [priceRange, setPriceRange] = useState([MIN_PRICE, MAX_PRICE]);
  const {
    productList: { data, loading, error },
  } = useContext(appContext);
  const { searchStr } = useContext(appContext);
  const { setSearchStr } = useContext(appContext);
  useEffect(() => {
    fetchProductList();
  }, [fetchProductList]);

  console.log(error);
  let filteredProducts = [...data];
  if (searchStr) {
    const filteredProductTemp = [...filteredProducts];
    filteredProducts = [];
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
        filteredProducts.push(filteredProductTemp[i]);
      }
    }
  }
  if (genderFilter === "women") {
    filteredProducts = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].categoryName === "Ladies") {
        filteredProducts.push(data[i]);
      }
    }
  } else if (genderFilter === "men") {
    filteredProducts = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].categoryName === "Men") {
        filteredProducts.push(data[i]);
      }
    }
  }
  if (sortBy === "priceHighToLow") {
    for (let i = 1; i < filteredProducts.length; i++) {
      for (let j = 0; j < i; j++) {
        if (
          filteredProducts[i].actualPrice.value >
          filteredProducts[j].actualPrice.value
        ) {
          let x = filteredProducts[i];
          filteredProducts[i] = filteredProducts[j];
          filteredProducts[j] = x;
        }
      }
    }
  }
  if (sortBy === "priceLowToHigh") {
    for (let i = 1; i < filteredProducts.length; i++) {
      for (let j = 0; j < i; j++) {
        if (
          filteredProducts[i].actualPrice.value <
          filteredProducts[j].actualPrice.value
        ) {
          let x = filteredProducts[i];
          filteredProducts[i] = filteredProducts[j];
          filteredProducts[j] = x;
        }
      }
    }
  }
  if (sortBy === "ratingHighToLow") {
    for (let i = 1; i < filteredProducts.length; i++) {
      for (let j = 0; j < i; j++) {
        if (filteredProducts[i].ratting > filteredProducts[j].ratting) {
          let x = filteredProducts[i];
          filteredProducts[i] = filteredProducts[j];
          filteredProducts[j] = x;
        }
      }
    }
  }
  if (sortBy === "ratingLowToHigh") {
    for (let i = 1; i < filteredProducts.length; i++) {
      for (let j = 0; j < i; j++) {
        if (filteredProducts[i].ratting < filteredProducts[j].ratting) {
          let x = filteredProducts[i];
          filteredProducts[i] = filteredProducts[j];
          filteredProducts[j] = x;
        }
      }
    }
  }
  // filter by price range
  filteredProducts = filteredProducts.filter(
    (product) =>
      product.actualPrice.value >= priceRange[0] &&
      product.actualPrice.value <= priceRange[1]
  );
  return (
    <div>
      {loading ? (
        <div className="d-flex flex-column align-items-center justify-content-center mt-5">
          <div className="spinner-border" role="status"></div>
          <div className="mt-3">Loading Products...</div>
        </div>
      ) : (
        <div className="d-flex">
          <FilterPane
            genderFilter={genderFilter}
            setGenderFilter={setGenderFilter}
            setSortBy={setSortBy}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
          <div style={{ width: "80%", height: "89vh", overflowY: "scroll" }}>
            <div className="mt-4">
              {searchStr ? (
                <div className="d-flex align-items-center bg-dark bg-opacity-50">
                  <button
                    className="btn btn-dark me-3 m-4 btn-lg"
                    onClick={() => {
                      setSearchStr("");
                    }}
                  >
                    <i className="fa fa-arrow-left" aria-hidden="true"></i>
                  </button>
                  <h5 className="m-0">Search Results For "{searchStr}"</h5>
                </div>
              ) : null}
              <div className="d-flex flex-wrap w-100 justify-content-center pt-3 pb-3">
                {filteredProducts.map((product, index) => {
                  return <Product key={index} productDetail={product} />;
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
