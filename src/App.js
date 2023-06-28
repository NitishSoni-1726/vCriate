import { createContext, useState } from "react";
import Navbar from "./components/Navbar";

export const appContext = createContext({});
function App() {
  const [cart, setCart] = useState([]);
  return (
    <appContext.Provider value={{ cartItem: cart, addItem: setCart }}>
      <div className="App">
        <Navbar />
      </div>
    </appContext.Provider>
  );
}

export default App;
