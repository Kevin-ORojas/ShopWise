import React from "react";

export const Login = () => {
  return (
    <form className="flex justify-center items-center flex-col  overflow-hidden">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Login</h1>
      <div className="w-[80%] h-1/3 max-w-md p-6 border-double border-4 border-sky-500">
        <div className="mt-4">
          <input
            type="text"
            placeholder="Username"
            name="username"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
          />
        </div>
        <div className="mt-4">
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
          />
        </div>
      </div>
    </form>
  );
};
