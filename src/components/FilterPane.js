import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export const MIN_PRICE = 0;
export const MAX_PRICE = 20000;

export default function Filter({
  genderFilter,
  setSortBy,
  setGenderFilter,
  priceRange,
  setPriceRange,
}) {
  function handlePriceRangeChange(newPriceRange) {
    setPriceRange(newPriceRange);
  }

  console.log({ priceRange });
  return (
    <div
      style={{ width: 350 }}
      className="bg-dark bg-opacity-50 p-3"
      data-testid="filter-pane"
    >
      <h5 className="m-4">Sort By</h5>
      <div className="border"></div>
      <div className="d-flex flex-column">
        <button
          className="btn btn-dark m-2 mt-3 btn-sm"
          onClick={() => {
            setSortBy("priceLowToHigh");
          }}
        >
          Price Low to High
        </button>
        <button
          className="btn btn-dark m-2 btn-sm"
          onClick={() => {
            setSortBy("priceHighToLow");
          }}
        >
          Price High to Low
        </button>
        <button
          className="btn btn-dark m-2 btn-sm"
          onClick={() => {
            setSortBy("ratingLowToHigh");
          }}
        >
          Ratting Low to High
        </button>
        <button
          className="btn btn-dark m-2 btn-sm"
          onClick={() => {
            setSortBy("ratingHighToLow");
          }}
        >
          Rating High to Low
        </button>
      </div>
      <h5 className="m-4 mt-3">Filters</h5>
      <div className="border"></div>
      <div className="d-flex flex-column p-3">
        <label className="d-flex align-items-center">
          <input
            type="radio"
            value="all"
            checked={genderFilter === "all"}
            onChange={() => {
              setGenderFilter("all");
            }}
            className="me-2"
          />
          All
        </label>
        <label className="d-flex align-items-center">
          <input
            type="radio"
            value="men"
            checked={genderFilter === "men"}
            onChange={() => {
              setGenderFilter("men");
            }}
            className="me-2"
          />
          Men
        </label>
        <label className="d-flex align-items-center">
          <input
            type="radio"
            value="women"
            checked={genderFilter === "women"}
            onChange={() => {
              setGenderFilter("women");
            }}
            className="me-2"
          />
          Women
        </label>
      </div>
      <div>
        <h5 className="m-4 mt-3">Price range</h5>
        <div>
          {priceRange[0]}-{priceRange[1]}
        </div>
        <Slider
          range={true}
          min={MIN_PRICE}
          max={MAX_PRICE}
          value={priceRange}
          onChange={handlePriceRangeChange}
        />
      </div>
    </div>
  );
}
