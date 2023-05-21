import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const UpdateProductForm = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const products = useSelector((state) => {
    console.log("product list", typeof state.products, state.products);

    return state.products;
  });
  // console.log(typeof products, products);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProduct = {
      id,
      title,
      description,
      price,
      thumbnail: "https://via.placeholder.com/150"
    };

    dispatch({ type: "UPDATE_PRODUCT", payload: updatedProduct });

    setId("");
    setTitle("");
    setDescription("");
    setPrice("");
  };

  const handleSelectChange = (e) => {
    const selectedProductId = e.target.value;
    const selectedProduct = products.find(
      (product) => product.id === Number(selectedProductId)
    );

    setId(selectedProductId);
    setTitle(selectedProduct.title);
    setDescription(selectedProduct.description);
    setPrice(selectedProduct.price);
  };

  return (
    <div>
      <h2>Update Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Select Product:</label>
          <select onChange={handleSelectChange} required>
            <option value="">Select...</option>

            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateProductForm;
