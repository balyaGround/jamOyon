import React from "react";
import Form from "../components/Form.js";
import logo from "../assets/jamoyon.png";
function Login() {
  return (
    <div className="flex w-full h-screen bg-indigo-950">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <Form />
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-yellow-500 ">
        <div className="w-60 h-60   ">
          <img src={logo} alt="logo " className="animate-bounce rounded-full"></img>
        </div>
        <div className="w-full h-1/2 absolute bg-white/10 backdrop-blur-lg bottom-0"></div>
      </div>
    </div>
  );
}

export default Login;
