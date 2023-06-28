import { createContext, useState } from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const appContext = createContext({});
function App() {
  const [cart, setCart] = useState([]);
  const [productList, setProductList] = useState([]);
  return (
    <Router>
      <appContext.Provider
        value={{
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
              <Route path="/cart" element={<Cart />}></Route>
            </Routes>
          </div>
        </div>
      </appContext.Provider>
    </Router>
  );
}

export default App;
