import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm";
import UpdateProductForm from "./components/UpdateProductForm";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data.products);
        dispatch({ type: "SET_PRODUCTS", payload: data.products });
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [dispatch]);

  return (
    <div>
      <h1>React Redux Project</h1>
      <ProductList />
      <AddProductForm />
      <UpdateProductForm />
    </div>
  );
};

export default App;
