import { createContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import mockProducts from "./mock-data";
import ProductDescription from "./components/ProductDescription";

async function fetchProductsMock() {
  return new Promise((res) => {
    setTimeout(() => {
      res(mockProducts);
    }, 1000);
  });
}
export const appContext = createContext({});
function App() {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [searchStr, setSearchStr] = useState("");
  const [productList, setProductList] = useState({
    loading: false,
    data: [],
    error: null,
  });

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);
  //need to be fixed
  useEffect(() => {
    if (cart.length <= 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  async function fetchProductList() {
    setProductList({ ...productList, loading: true });
    try {
      const productsResponse = await fetchProductsMock();
      setProductList({ data: productsResponse, loading: false, error: null });
    } catch (err) {
      setProductList({
        ...productList,
        loading: false,
        error: "Unable to fetch data. Please try again.",
      });
    }
  }

  return (
    <Router>
      <appContext.Provider
        value={{
          fetchProductList,
          cartItems: cart,
          addItem: setCart,
          productList: productList,
          setProductList,
          selectedProduct: selectedProduct,
          setSelectedProduct: setSelectedProduct,
          searchStr: searchStr,
          setSearchStr,
        }}
      >
        <div className="App">
          <Navbar />
          <div
            className="bg-dark bg-opacity-50 text-light"
            style={{
              position: "fixed",
              top: "9%",
              width: "100%",
              height: "92vh",
              overflowY: "scroll",
              paddingTop: "20px",
            }}
          >
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route
                path="product/:id"
                element={<ProductDescription />}
              ></Route>
            </Routes>
          </div>
        </div>
      </appContext.Provider>
    </Router>
  );
}

export default App;
