import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import mockProducts from "../mock-data";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { appContext } from "../App";
import Product from "./Product";

async function productDetailsApi(id) {
  return new Promise((res) => {
    setTimeout(() => {
      // eslint-disable-next-line
      const product = mockProducts.find((item) => item.code == id);
      res(product);
    }, 1000);
  });
}

export default function ProductDescription() {
  const [item, setItem] = useState({ loading: false, data: null, error: null });
  const { addItem } = useContext(appContext);
  const { cartItems, fetchProductList } = useContext(appContext);
  const { id } = useParams();
  const {
    productList: { data, loading, error },
  } = useContext(appContext);

  useEffect(() => {
    async function _fetchProductDetails() {
      setItem({ ...item, loading: true });
      const productDetails = await productDetailsApi(id);
      setItem({ loading: false, error: null, data: productDetails });
    }
    _fetchProductDetails();
    fetchProductList();
  }, [id]);

  const addedToCart = cartItems.find((item) => item.code == id);

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
    item.data.quantity = 1;
    const cart = cartItems.concat([item.data]);
    addItem(cart);
  }
  function handleRemoveFromCart() {
    const index = cartItems.indexOf(item.data);
    let cart = [];
    for (let i = 0; i < cartItems.length; i++) {
      if (i !== index) {
        cart.push(cartItems[i]);
      }
    }
    addItem(cart);
  }

  return (
    <div className="p-4 d-flex justify-content-center">
      {item.loading ? (
        <div className="d-flex flex-column align-items-center justify-content-center mt-5">
          <div className="spinner-border" role="status"></div>
          <div className="mt-3">Loading Product...</div>
        </div>
      ) : item.data ? (
        <div className="w-100 bg-light bg-opacity-50 rounded p-4">
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
                infinite={true}
                autoPlay={true}
                useBrowserFullscreen={false}
              />
            </div>
            <div className="p-3">
              <h1 className="text-danger">{item.data.name}</h1>
              <h4 className="text-dark">
                By <span className="text-danger">{item.data.brandName}</span>
              </h4>
              <h6 className="text-dark">For {item.data.categoryName}</h6>
              <div className="d-flex align-items-center">
                <h3
                  className="text-success rounded p-2"
                  style={{ fontWeight: "800" }}
                >
                  ₹ {price}
                </h3>
                <h5
                  className="ms-3 text-danger rounded p-2"
                  style={{ textDecoration: "line-through" }}
                >
                  ₹ {item.data.actualPrice.value}
                </h5>
                <h5 className="ms-3 text-dark">
                  {"(" + discountPercentage + "% off)"}
                </h5>
              </div>
              <div className="text-light mt-2">
                <div
                  className="bg-success p-1 rounded d-flex justify-content-center align-items-center"
                  style={{ maxWidth: "70px" }}
                >
                  <i className="fa fa-star"></i> {item.data.ratting.toFixed(1)}
                </div>
              </div>
              <div className="mt-4 d-flex w-100">
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
              <div className="mt-3 text-dark" style={{ maxWidth: "800px" }}>
                <h4>Product Description</h4>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquam totam id ducimus culpa error cum, debitis molestiae
                officia corrupti quasi animi sequi iusto alias itaque similique
                nulla ab temporibus consequatur est, iure ipsa! Odio velit
                reprehenderit incidunt accusamus inventore magnam adipisci
                repellendus deleniti! Adipisci sapiente sed alias corrupti
                explicabo quo rerum reiciendis? Quo eveniet autem accusamus
                aspernatur magni qui aperiam quod, accusantium quia voluptatum
                perspiciatis quibusdam nam, rerum, velit nulla?
              </div>
            </div>
          </div>
          <h3 className="mt-5 p-4 bg-dark bg-opacity-50 text-center">
            More Products For {item.data.categoryName}
          </h3>
          <div className="d-flex flex-wrap w-100 mt-2 justify-content-center">
            {loading ? (
              <div className="d-flex flex-column align-items-center justify-content-center mt-5">
                <div className="spinner-border" role="status"></div>
                <div className="mt-3">Loading Products...</div>
              </div>
            ) : (
              data.map((product, index) => {
                if (product.categoryName === item.data.categoryName) {
                  return <Product key={index} productDetail={product} />;
                }
              })
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
