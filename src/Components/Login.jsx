import React, { useContext, useState } from "react";
import { myContext } from "../Context";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Max-Cart-Logo.png";

export default function Login() {
  const nav = useNavigate();

  const { user, setUser,isLoggedIn,setIsLoggedIn } = useContext(myContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const adminEmail = "admin@gmail.com";
  const adminPass = "admin";

  function handleLogin() {
    if (!email || !password) {
      return alert("Please Fill All Fields");
    }
    if (email === adminEmail && password === adminPass) {
      nav("/adminhome");
      return;
    }

    const loggedUser = user.find(
      (item) => item.email === email && item.password === password,
    );
    if (loggedUser) {
      alert("LogIn Successfull");
      setIsLoggedIn(true)
      nav("/home");
    } else {
      return alert("Invalid Email Or Password");
    }
  }
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-slate-900 rounded-3xl shadow-2xl p-8">
        <div className="flex flex-col items-center mb-8">
          <img src={Logo} alt="Logo" className="w-36 h-28 object-contain" />

          <h1 className="text-4xl font-bold text-cyan-400 mt-2">Max Cart</h1>

          <p className="text-slate-400 mt-2 text-center">
            Login to your account to continue shopping
          </p>
        </div>

        <div className="flex flex-col justify-center gap-5">
          <input
            className="bg-slate-800 text-white px-4 py-3 rounded-xl outline-none border border-slate-700 focus:border-cyan-400"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="bg-slate-800 text-white px-4 py-3 rounded-xl outline-none border border-slate-700 focus:border-cyan-400"
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="bg-cyan-500 hover:bg-cyan-600 transition duration-300 text-white py-3 rounded-xl text-lg font-semibold shadow-lg"
          >
            Login
          </button>
          <div className="flex justify-center">
            <p className=" text-slate-300">
              Dont Have An Account{" "}
            </p>
            <a
              className="text-cyan-400 ml-2 no-underline hover:text-cyan-300 "
              href="/"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
