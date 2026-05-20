import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { myContext } from "../Context";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AdminNav from "./AdminNav";
import "../Style/CreateProduct.css"

export default function ProductManagement({ products }) {
  const [editIndex, setEditIndex] = useState(-1);
  const { pdata, setPdata } = useContext(myContext);
  const nav = useNavigate();

  function handleRemove(id) {
    const updatedProducts = pdata.filter((item) => item.id !== id);
    setPdata(updatedProducts);
  }

  function handleEdit(id) {
    const product = pdata.find((item) => item.id === id);

    setName(product.name);
    setBrand(product.brand);
    setType(product.type);
    setDescription(product.description);
    setPrice(product.price);
    setImg(product.img);

    setEditIndex(id);
  }

  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  function handleproduct() {
    if (!img || !name || !brand || !type || !description || !price) {
      return alert("Fill All Details To Add Product");
    }
    if (editIndex === -1) {
      const newProduct = {
        id: pdata.length + 1,

        img,
        name,
        brand,
        type,
        description,
        price,
      };

      setPdata([...pdata, newProduct]);

      alert("Product Added Successfully");

      setImg("");
      setName("");
      setBrand("");
      setType("");
      setDescription("");
      setPrice("");
    } else {
      const updatedProduct = {
        id: editIndex,
        img,
        name,
        brand,
        type,
        description,
        price,
      };
      const updatedProducts = pdata.map((item) =>
        item.id === editIndex ? updatedProduct : item,
      );
      setPdata(updatedProducts);

      setEditIndex(-1);

      setImg("");
      setName("");
      setBrand("");
      setType("");
      setDescription("");
      setPrice("");
    }
  }

  console.log(pdata);

  return (
    <div className="min-h-screen bg-gray-800">
      <AdminNav />
      <div className="min-h-screen bg-gray-800">
        <h1 className="text-center text-white  bg-gray-800 mt-5">Product Management</h1>
      <div className="create">
        <div className="create-product-container">
          <div className="create-product-box">
            <h2>Add Product</h2>

            <div className="product-form">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
              <input
                type="text"
                placeholder="Type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
              <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <input
                type="number"
                name=""
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <input
                type="text"
                placeholder="Paste Image URL Here"
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
              <button onClick={handleproduct}>
                {editIndex === -1 ? "Add Product" : "Update Product"}
              </button>
            </div>
          </div>
        </div>
        <div className="min-h-screen bg-gray-800 text-white border-b-4">
        <div className="text-center py-10">
          <h1 className="mb-10">Edit & Remove</h1>
          <div className="d-flex flex-wrap gap-3">
            {products.map((item) => (
              <Card
                style={{
                  width: "18rem",
                  height: "30rem",
                  backgroundColor: "#D3D3D3",
                }}
                key={item.id}
              >
                <Card.Img
                  variant="top"
                  src={item.img}
                  style={{ height: "280px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>

                  <Card.Text>₹ {item.price}</Card.Text>
                  <div className="d-flex gap-3">
                    <Button
                      style={{ backgroundColor: "#24A0ED" }}
                      variant="primary"
                      onClick={() => handleEdit(item.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      style={{ backgroundColor: "#D22B2B" }}
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
}
