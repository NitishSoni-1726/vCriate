import { createContext, useState } from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

export const appContext = createContext({});
function App() {
  const [cart, setCart] = useState([]);
  const [productList, setProductList] = useState([]);
  async function fetchProductList() {
    const reponse = await fetch("https://fakestoreapi.com/products");
    const productList = await reponse.json();
    setProductList(await productList);
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
