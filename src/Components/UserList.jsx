import React, { useContext } from "react";
import { myContext } from "../Context";
import AdminNav from "./AdminNav";

export default function UserList() {
  const { user, setUser, isBanned, setIsBanned ,isLoggedIn,setIsLoggedIn } = useContext(myContext);
  console.log(user);

  function handleBan() {
     if(!isLoggedIn){
      return alert("Please Login ")
    }
    if (isBanned === false) {
      setIsBanned(true);
      alert("User Banned");
    } else {
      setIsBanned(false);
      alert("User UnBanned");
    }
  }

  console.log(user, "Is Banned :", isBanned);

  return (
    <div className="min-h-screen bg-gray-800 text-gray-400">
      <AdminNav />
      <h1>User Lists</h1>
      <div className="text-white text-center">
        {user.map((item, index) => (
          <div key={index}>
            <h2>{item.name}</h2>
            <p>{item.email}</p>
            <button
              onClick={handleBan}
              className={`px-4 py-2 rounded-md text-sm font-medium text-white ${
                isBanned
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-red-500 hover:bg-red-600"
              }`}
            >
              {isBanned ? "UnBan" : "Ban"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
