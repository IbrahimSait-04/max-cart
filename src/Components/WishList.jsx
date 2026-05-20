import React, { useContext } from "react";
import { myContext } from "../Context";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Navbar from "./Navbar";

export default function WishList() {

  const nav = useNavigate();
  const { wishList, setWishlist } = useContext(myContext);

  function handleRemove(item) {
    const updatedWishList = wishList.filter((prod) => prod.id !== item.id);

    setWishlist(updatedWishList);
  }
    function handleHome(){
    nav("/home")
  }

  console.log(wishList);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
    <div className="text-center py-10">
      <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">
        WishLists
      </h2>

      <div className="flex flex-wrap justify-center gap-8 px-4 md:px-10 pb-16">
        {wishList.length > 0 ? (
          wishList.map((item) => (
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
                <Link to={`/Products/${item.id}`} className="no-underline">
                  <Card.Title className="text-2xl font-bold text-cyan-400 mb-3">
                    {item.name}
                  </Card.Title>
                </Link>
                <Card.Text className="text-xl font-semibold text-slate-300">
                  ₹ {item.price}
                </Card.Text>
                <div className="flex items-center justify-center gap-4 mt-6 flex-wrap">
                  <Button variant="primary" onClick={() => handleRemove(item)}>
                    Remove
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center w-full py-20">
            <h1 className="text-3xl md:text-5xl font-bold text-slate-400 text-center">
              Your Wishlist is Empty🩷!
            </h1>
                        <button onClick={handleHome} className='mt-10 bg-cyan-500 hover:bg-cyan-600 transition duration-300 px-8 py-3 rounded-xl text-lg font-semibold shadow-lg'>Go To Home</button>

          </div>
        )}
      </div>
    </div>
    </div>
  );
}
