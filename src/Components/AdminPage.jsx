import React, { useContext } from "react";
import AdminNav from "./AdminNav";
import { myContext } from "../Context";
import { useNavigate } from "react-router-dom";

export default function AdminPage() {

  const nav = useNavigate();

  const{user, setUser , isLoggedIn,setIsLoggedIn}=useContext(myContext)

  function handleprod(){
    if(!isLoggedIn){
      return alert("Please Login ")
    }
    nav("/adminproduct")
  }

  console.log(user);

  console.log("Login Status:", isLoggedIn);
  
  
  return (
    <div className="min-h-screen bg-gray-800 text-gray-400">
      <AdminNav />
      <div className="text-center py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">
          Admin Page
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <button onClick={handleprod} className='mt-10 bg-cyan-500 hover:bg-cyan-600 transition duration-300 px-8 py-3 rounded-xl text-lg font-semibold shadow-lg text-white'>Product Management</button>
      </div>
    </div>
  );
}
