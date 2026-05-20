import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { myContext } from "../Context";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Products({ products }) {


  const nav = useNavigate();
  const { cart, setCart,isLoggedIn,setIsLoggedIn } = useContext(myContext);
  const { wishList, setWishlist } = useContext(myContext);

  function handleAddTocart(product) {

    if(!isLoggedIn){
      return alert("Please Login")
    }

    if (cart.includes(product)) {
      alert("Product already added to cart!");
    }
    else {
      setCart([...cart, product]);
      alert("Item added To Cart")
    }

  }

  function handleAddTowishList(prod) {

    if(!isLoggedIn){
      return alert("Please Login")
      nav("/login")
      
    }
    if (wishList.includes(prod)) {
      alert("Product is already in wishlist");
    }

    else {
      setWishlist([...wishList, prod]);
      alert("Item added to wishlist");
    }

  }

  console.log(cart);
  console.log(wishList);

  return (
    <div className='min-h-screen bg-slate-950 text-white'>

      <Navbar />

      <div className='flex flex-col items-center py-10'>

        <h1 className='text-5xl font-bold text-cyan-400 mb-4'>
          Product Page
        </h1>

        <div className='flex gap-8 text-lg font-medium'>

          <Link
            to={"/cart"}
            className='no-underline text-white hover:text-cyan-400 transition duration-300'
          >
            Cart
          </Link>

          <Link
            to={"/wishlist"}
            className='no-underline text-white hover:text-cyan-400 transition duration-300'
          >
            Wishlist
          </Link>

        </div>

      </div>

      
      <div className='flex flex-wrap justify-center gap-8 px-8 pb-16'>

        {products.map((item) => (

          <Card
            key={item.id}
            className='border-0 rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition duration-300'
            style={{
              width: "19rem",
              backgroundColor: "#1e293b",
              color: "white"
            }}
          >

            <Card.Img
              variant="top"
              src={item.img}
              style={{
                height: "300px",
                objectFit: "cover"
              }}
            />

            <Card.Body className='flex flex-col justify-between'>

              <div>

                <Link
                  to={`/Products/${item.id}`}
                  className='no-underline'
                >

                  <Card.Title
                    className='text-2xl font-bold text-cyan-400 mb-3'
                  >
                    {item.name}
                  </Card.Title>

                </Link>

                <Card.Text className='text-xl text-slate-300 font-semibold'>
                  ₹ {item.price}
                </Card.Text>

              </div>


              <div className='flex items-center justify-between mt-6'>

                <Button
                  variant="primary"
                  onClick={() => handleAddTocart(item)}
                  className='px-4 py-2 rounded-xl font-semibold'
                >
               {isLoggedIn ? "Add To Cart" : "Login To Continue"}
                </Button>

                <svg
                  onClick={() => handleAddTowishList(item)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="white"
                  className="cursor-pointer hover:fill-yellow-400 transition duration-300"
                  viewBox="0 0 16 16"
                >

                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />

                </svg>

              </div>

            </Card.Body>

          </Card>

        ))}

      </div>
        <Footer />
    </div>
  );
}