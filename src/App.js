import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Components/Register";
import { myContext } from "./Context";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Products from "./Components/Products.jsx";
import productsData from "./Components/products.js";
import ProductView from "./Components/ProductView.jsx";
import CartPage from "./Components/CartPage.jsx";
import WishList from "./Components/WishList.jsx";
import AdminPage from "./Components/AdminPage.jsx";
import ProductManagement from "./Components/ProductManagement.jsx";
import UserList from "./Components/UserList.jsx";
import UserProfile from "./Components/UserProfile.jsx";

function App() {
  const [user, setUser] = useState([]);

  const [pdata, setPdata] = useState(productsData);
  const [cart,setCart]=useState([])

  const [wishList,setWishlist]=useState([])

  const [isLoggedIn,setIsLoggedIn]=useState(false)

  const[isBanned,setIsBanned]=useState(false)

  console.log(productsData);
  console.log("ban fro app",isBanned);
  

  const val = { user, setUser,cart,setCart , wishList,setWishlist,pdata, setPdata,isLoggedIn,setIsLoggedIn, isBanned,setIsBanned};
  return (
    <div>
      <myContext.Provider value={val}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Register  />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/products" element={<Products products={pdata} />} />
            <Route
              path="/Products/:id"
              element={<ProductView products={pdata} />}
            />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/adminhome" element={<AdminPage />} />
            <Route path="/userlist" element={<UserList />} />
            <Route path="/adminproduct" element={<ProductManagement products={pdata}  />} />
          </Routes>
        </BrowserRouter>
      </myContext.Provider>
    </div>
  );
}

export default App;
