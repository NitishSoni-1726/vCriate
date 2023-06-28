import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import mockProducts from "../mock-data";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { appContext } from "../App";

async function productDetailsApi(id) {
  return new Promise((res) => {
    setTimeout(() => {
      const product = mockProducts.find((item) => item.code == id);
      res(product);
    }, 1000);
  });
}

export default function ProductDescription() {
  const [item, setItem] = useState({ loading: false, data: null, error: null });
  const [addedToCart, setAddedToCart] = useState(false);
  const { addItem } = useContext(appContext);
  const { cartItem } = useContext(appContext);
  const { id } = useParams();

  useEffect(() => {
    async function _fetchProductDetails() {
      setItem({ ...item, loading: true });
      const productDetails = await productDetailsApi(id);
      setItem({ loading: false, error: null, data: productDetails });
    }
    _fetchProductDetails();
  }, []);
  useEffect(() => {
    if (item.data) {
      for (let i = 0; i < cartItem.length; i++) {
        if (cartItem[i].code === item.data.code) {
          setAddedToCart(true);
        }
      }
    }
  }, [item]);

  let price;
  let discountPercentage;
  if (item.data) {
    if (item.data.discountedPrice === undefined) {
      price = item.data.actualPrice.value;
      discountPercentage = 0;
    } else {
      price = item.data.discountedPrice.value;
      discountPercentage =
        (item.data.discountedPrice.value / item.data.actualPrice.value) * 100;
      discountPercentage = Math.round(discountPercentage);
    }
  }
  function handleAddToCart() {
    const cart = cartItem.concat([item.data]);
    addItem(cart);
    setAddedToCart(true);
  }
  function handleRemoveFromCart() {
    const index = cartItem.indexOf(item.data);
    let cart = [];
    for (let i = 0; i < cartItem.length; i++) {
      if (i !== index) {
        cart.push(cartItem[i]);
      }
    }
    addItem(cart);
    setAddedToCart(false);
  }

  return (
    <div className="p-4 d-flex justify-content-center">
      {item.loading ? (
        <div className="d-flex flex-column align-items-center justify-content-center mt-5">
          <div className="spinner-border" role="status"></div>
          <div className="mt-3">Loading Product...</div>
        </div>
      ) : item.data ? (
        <div className="w-100 bg-success bg-opacity-25 border rounded p-4 d-flex">
          <div className="d-flex flex-wrap">
            <div style={{ maxWidth: 450 }}>
              <ImageGallery
                items={item.data.galleryImages.map((image) => ({
                  original: image.image,
                  thumbnail: image.image,
                }))}
                showPlayButton={false}
                thumbnailPosition="left"
                showNav={false}
              />
            </div>
            <div className="p-3">
              <h1>{item.data.name}</h1>
              <h3>
                By <span className="text-danger">{item.data.brandName}</span>
              </h3>
              <h4>For {item.data.categoryName}</h4>
              <div className="d-flex align-items-center">
                <h3>₹ {price}</h3>
                <h5
                  className="ms-3 text-warning"
                  style={{ textDecoration: "line-through" }}
                >
                  ₹ {item.data.actualPrice.value}
                </h5>
                <h5 className="ms-3">{"(" + discountPercentage + "% off)"}</h5>
              </div>
              <div className="mt-4 d-flex justify-content-between w-100">
                {addedToCart ? (
                  <button
                    className="btn btn-danger btn-lg d-flex align-items-center"
                    onClick={() => {
                      handleRemoveFromCart();
                    }}
                  >
                    <i className="fa fa-shopping-cart me-1"></i>Remove From Cart
                  </button>
                ) : (
                  <button
                    className="btn btn-warning btn-lg d-flex align-items-center"
                    onClick={() => {
                      handleAddToCart();
                    }}
                  >
                    <i className="fa fa-shopping-cart me-1"></i>Add To Cart
                  </button>
                )}
                <button className="ms-3 btn btn-success btn-lg">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
