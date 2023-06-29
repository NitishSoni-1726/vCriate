import React, { useContext, useEffect, useState } from "react";
import { appContext } from "../App";
import Product from "./Product";
export default function Home() {
  const { fetchProductList } = useContext(appContext);
  const [priceHighToLow, setPriceHighToLow] = useState(false);
  const [priceLowToHigh, setPriceLowToHigh] = useState(false);
  const [ratingHighToLow, setRatingHighToLow] = useState(false);
  const [ratingLowToHigh, setRatingLowhToHigh] = useState(false);
  const [womenFilter, setWomenFilter] = useState(false);
  const [menFilter, setMenFilter] = useState(false);
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
  function handlePriceHighToLow() {
    setPriceHighToLow(true);
    setPriceLowToHigh(false);
    setRatingHighToLow(false);
    setRatingLowhToHigh(false);
  }
  function handlePriceLowToHigh() {
    setPriceHighToLow(false);
    setPriceLowToHigh(true);
    setRatingHighToLow(false);
    setRatingLowhToHigh(false);
  }
  function handleRatingHighToLow() {
    setPriceHighToLow(false);
    setPriceLowToHigh(false);
    setRatingHighToLow(true);
    setRatingLowhToHigh(false);
  }
  function handleRatingLowtoHigh() {
    setPriceHighToLow(false);
    setPriceLowToHigh(false);
    setRatingHighToLow(false);
    setRatingLowhToHigh(true);
  }
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
  if (womenFilter) {
    filteredProduct = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].categoryName === "Ladies") {
        filteredProduct.push(data[i]);
      }
    }
  }
  if (menFilter) {
    filteredProduct = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].categoryName === "Men") {
        filteredProduct.push(data[i]);
      }
    }
  }
  if (priceHighToLow) {
    for (let i = 1; i < filteredProduct.length; i++) {
      for (let j = 0; j < i; j++) {
        if (
          filteredProduct[i].actualPrice.value >
          filteredProduct[j].actualPrice.value
        ) {
          let x = filteredProduct[i];
          filteredProduct[i] = filteredProduct[j];
          filteredProduct[j] = x;
        }
      }
    }
  }
  if (priceLowToHigh) {
    for (let i = 1; i < filteredProduct.length; i++) {
      for (let j = 0; j < i; j++) {
        if (
          filteredProduct[i].actualPrice.value <
          filteredProduct[j].actualPrice.value
        ) {
          let x = filteredProduct[i];
          filteredProduct[i] = filteredProduct[j];
          filteredProduct[j] = x;
        }
      }
    }
  }
  if (ratingHighToLow) {
    for (let i = 1; i < filteredProduct.length; i++) {
      for (let j = 0; j < i; j++) {
        if (filteredProduct[i].ratting > filteredProduct[j].ratting) {
          let x = filteredProduct[i];
          filteredProduct[i] = filteredProduct[j];
          filteredProduct[j] = x;
        }
      }
    }
  }
  if (ratingLowToHigh) {
    for (let i = 1; i < filteredProduct.length; i++) {
      for (let j = 0; j < i; j++) {
        if (filteredProduct[i].ratting < filteredProduct[j].ratting) {
          let x = filteredProduct[i];
          filteredProduct[i] = filteredProduct[j];
          filteredProduct[j] = x;
        }
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
        <div className="d-flex">
          <div style={{ width: "20%" }} className="bg-dark bg-opacity-50">
            <h4 className="m-4">Sort By</h4>
            <div className="border"></div>
            <div className="d-flex flex-column">
              <button
                className="btn btn-dark m-2 mt-3"
                onClick={handlePriceLowToHigh}
              >
                Price Low to High
              </button>
              <button
                className="btn btn-dark m-2"
                onClick={handlePriceHighToLow}
              >
                Price High to Low
              </button>
              <button
                className="btn btn-dark m-2"
                onClick={handleRatingLowtoHigh}
              >
                Ratting Low to High
              </button>
              <button
                className="btn btn-dark m-2"
                onClick={handleRatingHighToLow}
              >
                Rating High to Low
              </button>
            </div>
            <h4 className="m-4 mt-3">Filters</h4>
            <div className="border"></div>
            <div className="d-flex flex-column p-3">
              <div
                class="btn-group m-2"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <input
                  type="radio"
                  class="btn-check"
                  name="btnradio"
                  id="btnradio1"
                  autocomplete="off"
                  onClick={() => {
                    setMenFilter(false);
                    setWomenFilter(false);
                  }}
                />
                <label class="btn btn-outline-dark" for="btnradio1">
                  All
                </label>
              </div>
              <div
                class="btn-group m-2"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <input
                  type="radio"
                  class="btn-check"
                  name="btnradio"
                  id="btnradio2"
                  autocomplete="off"
                  onClick={() => {
                    setMenFilter(true);
                    setWomenFilter(false);
                  }}
                />
                <label class="btn btn-outline-dark" for="btnradio2">
                  Men
                </label>
              </div>
              <div
                class="btn-group m-2"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <input
                  type="radio"
                  class="btn-check"
                  name="btnradio"
                  id="btnradio3"
                  autocomplete="off"
                  onClick={() => {
                    setWomenFilter(true);
                    setMenFilter(false);
                  }}
                />
                <label class="btn btn-outline-dark" for="btnradio3">
                  Women
                </label>
              </div>
            </div>
          </div>
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
                {filteredProduct.map((product, index) => {
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
