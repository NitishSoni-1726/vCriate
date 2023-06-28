import { createContext, useState } from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import mockProducts from "./mock-data";

async function fetchProductsMock() {
  return new Promise((res) => {
    setTimeout(() => {
      res(mockProducts);
    }, 100);
  });
}

export const appContext = createContext({});
function App() {
  const [cart, setCart] = useState([]);
  const [productList, setProductList] = useState({
    loading: false,
    data: [],
    error: null,
  });
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
          fetchProductList: fetchProductList,
          cartItem: cart,
          addItem: setCart,
          productList: productList,
          setProductList: setProductList,
        }}
      >
        <div className="App">
          <Navbar />
          <div
            className="bg-black bg-opacity-75 text-light"
            style={{
              position: "fixed",
              top: "11%",
              width: "100%",
              height: "90vh",
              overflowY: "scroll",
              paddingTop: "20px",
            }}
          >
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
            </Routes>
          </div>
        </div>
      </appContext.Provider>
    </Router>
  );
}

export default App;
