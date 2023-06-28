import React, { useContext, useEffect } from "react";
import { appContext } from "../App";
export default function Home() {
  const { fetchProductList } = useContext(appContext);
  const { productList } = useContext(appContext);
  useEffect(() => {
    fetchProductList();
  }, []);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
