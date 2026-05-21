import React, { useContext } from "react";
import Logo from "../assets/Max-Cart-Logo.png";
import { myContext } from "../Context";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function AdminNav() {
  const nav = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(myContext);

  function handleLogin() {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      alert("Logged Out Successfully");
    } else {
      nav("/login");
    }
  }

  return (
    <div className="w-full bg-slate-900 shadow-lg px-4 md:px-10 py-4 flex flex-col lg:flex-row items-center justify-between gap-6">
      <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
        <img src={Logo} alt="Logo" className="h-20 w-28 object-contain" />

        <h1 className="text-3xl md:text-4xl font-bold text-cyan-400">
          Max Cart
        </h1>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 text-white text-base sm:text-lg font-medium">
        <Link
          className="no-underline hover:text-cyan-400 transition duration-300"
          to={"/adminhome"}
        >
          Home
        </Link>
        <Link
          className="no-underline hover:text-cyan-400 transition duration-300"
          to={"/adminproduct"}
        >
          Product Management
        </Link>
         <Link
          className="no-underline hover:text-cyan-400 transition duration-300"
          to={"/userlist"}
        >
         UserLists
        </Link>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 text-white text-base sm:text-lg font-medium">

        <button onClick={handleLogin}>
          {isLoggedIn ? "Log out" : "Log In"}
        </button>
      </div>
    </div>
  );
}
