"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const Page = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://api.tripkolic.com/api/v1/task/login",
        {
          userId,
          password,
        }
      );

      if (response.data.status === true) {
        alert("Giriş başarılı!");
        router.push("/profile")
      } else {
        setError("Hatalı kullanıcı ID veya şifre.");
      }
    } catch (err) {
      setError("Sunucu hatası oluştu." + err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4">
      <Image
        src="/logo.png"
        alt="Logo"
        width={120}
        height={120}
        className="mb-4"
      />
      <h1 className="text-3xl font-bold text-orange-400 mb-6">Login</h1>

      <form onSubmit={handleLogin} className="w-full max-w-sm p-6 space-y-4">
        <div className="flex flex-col">
          <label
            htmlFor="userId"
            className="mb-1 text-sm font-medium text-gray-700"
          >
            User ID
          </label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="Enter your User ID"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-md"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="mb-1 text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-md"
          />
        </div>

        <div className="text-left text-black">
          <Link href="/forgot-password" className="text-sm hover:underline">
            Şifremi unuttum?
          </Link>
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-400 text-white font-semibold py-3 rounded-lg hover:bg-orange-500 transition-colors"
        >
          {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
        </button>

        <div className="flex flex-col items-center justify-center bg-white h-40 w-full rounded-t-2xl py-4">
          <p className="text-orange-400 font-medium text-lg mb-4">
            Register as
          </p>
          <div className="flex gap-4">
            <button onClick={()=>{router.push("register/operator")}} className="px-6 py-3 bg-teal-300 text-white font-semibold rounded-md hover:bg-blue-400 transition">
              Operator
            </button>
            <button onClick={()=>{router.push("register/seller")}} className="px-6 py-3 bg-teal-300 text-white font-semibold rounded-md hover:bg-blue-400 transition">
              Seller
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Page;
