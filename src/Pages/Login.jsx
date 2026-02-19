// pages/Login.jsx
import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import AuthContext from "../Context/AuthContext";

export default function Login() {
  const {SingInWithGoogleFunction , setUser ,setLoading} = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    
  }

 const handleGoogleLogin = () => { 
SingInWithGoogleFunction ()  
   .then(result => {
        const user = result.user; 
        setUser(user);
        setLoading(false);
      })
      .catch(error => {
        console.error("Google login error:", error);
      });
    }
  return (
    <section className="flex min-h-screen items-center justify-center  px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold text-default">Welcome Back</h1>
          <p className="text-default">Login to continue to The Book Haven</p>
        </div>

        {/* Form Card */}
        <div className="rounded-3xl p-8 shadow-3xl">
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium ">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            {/* Forget Password */}
            <div className="text-right">
              <span className="cursor-pointer text-sm font-medium text-indigo-600 hover:underline">
                Forgot Password?
              </span>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full rounded-full bg-indigo-700 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-800 hover:shadow-xl"
            >
              Login
            </button>
            <button onClick={handleGoogleLogin}
              className="flex items-center justify-center w-full rounded-full px-6 py-3 text-sm font-semibold  shadow-lg transition cursor-pointer"
            >
              <FaGoogle className="mr-2"/> Login With Google
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}