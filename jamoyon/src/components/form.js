import React from "react";

function Form() {
  return (
    <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-200 ">
      <h1 className="text-5xl text-yellow-600 font-semibold text-center"> JamOyon Store</h1>
      <h1 className="text-5xl text-yellow-600 font-semibold text-center mt-1">Welcome</h1>
      <p className="text-lg text-yellow-800 font-medium mt-4">please enter your Username & Password </p>

      <div className="mt-6 ">
        <div>
          <label className="text-lg font-medium text-yellow-600">Username</label>
          <input className="w-full border-2 border-gray-200 rounded-xl p-4 mt-1 bg-transparent" placeholder="Enter Your Username" />
        </div>
        <div>
          <label className="text-lg font-medium text-yellow-600">Password</label>
          <input className="w-full border-2 border-gray-200 rounded-xl p-4 mt-1 bg-transparent" placeholder="Enter Your Password" />
        </div>

        <div className="mt-8 flex flex-col gap-y-4">
          <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all bg-yellow-500 text-sky-950 text-lg font-bold rounded-xl border-2 border-gray-200 py-3 ">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
