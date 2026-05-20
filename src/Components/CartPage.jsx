import React, { useContext } from "react";
import { myContext } from "../Context";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Navbar from "./Navbar";

export default function CartPage() {

  const nav = useNavigate();
  const { cart, setCart } = useContext(myContext);

  function handleRemove(product) {
    if (window.confirm("Are you sure?")) {
      setCart(cart.filter((item) => item.id !== product.id));
    }
  }

  function handleIncrement(productId) {
    setCart(
      cart.map((item) => {
        return item.id === productId
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item;
      }),
    );
  }

  function handleDecrement(productId) {
    setCart(
      cart.map((item) => {
        return item.id === productId && item.quantity > 1
          ? { ...item, quantity: (item.quantity || 1) - 1 }
          : item;
      }),
    );
  }

  const totalCartValue = cart.reduce(
    (total, value) => total + value.price * (value.quantity || 1),
    0,
  );


  function handleHome(){
    nav("/home")
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

     
      <div className="text-center py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">
          Cart Page
        </h1>
      </div>

      
      <div className="flex flex-wrap justify-center gap-8 px-4 md:px-10 pb-16">
        {cart.length > 0 ? (
          cart.map((item) => (
            <Card
              key={item.id}
              className="border-0 rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition duration-300"
              style={{
                width: "100%",
                maxWidth: "20rem",
                backgroundColor: "#1e293b",
                color: "white",
              }}
            >
              <Card.Img
                variant="top"
                src={item.img}
                style={{
                  height: "300px",
                  objectFit: "cover",
                }}
              />

              <Card.Body className="flex flex-col justify-between">
                <div>
                  <Link to={`/Products/${item.id}`} className="no-underline">
                    <Card.Title className="text-2xl font-bold text-cyan-400 mb-3">
                      {item.name}
                    </Card.Title>
                  </Link>

                  <Card.Text className="text-xl font-semibold text-slate-300">
                    ₹ {item.price * (item.quantity || 1)}
                  </Card.Text>
                </div>

              
                <div className="flex items-center justify-center gap-4 mt-6 flex-wrap">
                  <Button
                    variant="primary"
                    onClick={() => handleIncrement(item.id)}
                    className="px-3 py-2 rounded-xl"
                  >
                    +
                  </Button>

                  <p className="text-xl font-bold m-0">{item.quantity || 1}</p>

                  <Button
                    variant="primary"
                    onClick={() => handleDecrement(item.id)}
                    className="px-3 py-2 rounded-xl"
                  >
                    -
                  </Button>
                </div>

               
                <div className="mt-5 text-center">
                  <Button
                    variant="danger"
                    onClick={() => handleRemove(item)}
                    className="px-5 py-2 rounded-xl font-semibold"
                  >
                    Remove
                  </Button>
                </div>
              </Card.Body>
            </Card>
            
          ))
        ) : (
          <div className="flex flex-col items-center justify-center w-full py-20">
            <h1 className="text-3xl md:text-5xl font-bold text-slate-400 text-center">
              Your Cart is Empty 🛒
            </h1>

            <button onClick={handleHome} className='mt-10 bg-cyan-500 hover:bg-cyan-600 transition duration-300 px-8 py-3 rounded-xl text-lg font-semibold shadow-lg'>Go To Home</button>
          </div>
        )}
      </div>

    
      {cart.length > 0 && (
        <div className="text-center pb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
            Total: ₹ {totalCartValue}
          </h2>
        </div>
      )}
    </div>
  );
}
