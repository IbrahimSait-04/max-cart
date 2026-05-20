import React, { useContext } from 'react'
import productsData from './products'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import { myContext } from '../Context';


export default function ProductView() {
    const{cart,setCart}=useContext(myContext)
    const{wishList,setWishlist}=useContext(myContext)
  

  const { id } = useParams();
  console.log(id);

  const products = productsData.find((prod) => prod.id ===Number(id));
  console.log(products);

  if(!products){
    return <h2>No Product Found </h2>
  }

     function handleAddToCart(product){
    if(cart.includes(product)){
      alert("Product already added to cart!")
    }
    else{
      setCart([...cart,product])
    }
  }

  function handleAddTowishList(prod){
    if(wishList.includes(prod)){
     alert("Product is already in wishlist")
    }
    else{
      setWishlist([...wishList,prod])
      alert("item added to wishlist")
    }
  }

  console.log(cart);
  console.log(wishList);
  

  return (
    <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
      <h1 className='mb-4'>Product View</h1>
    <CardGroup>
      <Card style={{width: '32rem'}} className='shadow'>
        <Card.Img variant="top" src={products.img} style={{ height: "300px",objectFit: "cover"
        }} />
        <Card.Body>
          <Card.Title>{products.name}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <Card.Text>Price: ₹{products.price}</Card.Text>
          <Card.Text>Brand: {products.brand}</Card.Text>
          <Card.Text>About This Product: <br />{products.description}</Card.Text>
           <Button variant="primary" onClick={()=>handleAddToCart(products)}>Add To Cart</Button>
              
              <svg onClick={()=>handleAddTowishList(products)}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-star"
                viewBox="0 0 16 16"
              >
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
              </svg>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
  )
}
