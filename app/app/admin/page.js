"use client";

import { useState } from "react";

export default function AdminLogin() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    if (
      username === "admin" &&
      password === "admin123"
    ) {

      localStorage.setItem(
        "adminLoggedIn",
        "true"
      );

      window.location.href =
        "/admin/dashboard";

    } else {

      alert("Invalid Credentials");

    }

  };

  return (

    <div className="min-h-screen bg-black flex items-center justify-center">

      <form
        onSubmit={handleLogin}
        className="bg-gray-900 p-8 rounded-xl w-full max-w-md"
      >

        <h1 className="text-3xl text-yellow-500 font-bold mb-6 text-center">
          Admin Login
        </h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          className="w-full p-4 mb-4 rounded-lg bg-black text-white border border-gray-700"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full p-4 mb-4 rounded-lg bg-black text-white border border-gray-700"
        />

        <button
          type="submit"
          className="w-full bg-yellow-500 text-black py-3 rounded-lg font-bold"
        >
          Login
        </button>

      </form>

    </div>

  );

}