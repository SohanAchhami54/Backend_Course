import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    type: "",
  });
   const [isLoading,setIsLoading]=useState(null)
    const [error,setError]=useState(false)
    const {SignUp}=useAuth()
    const navigate=useNavigate()

     const handleSubmit=async(e)=>{
        e.preventDefault()
        setIsLoading(true)
        setError(null)

        if(!form.name || !form.email || !form.password || !form.type ) return null
        try{
             await SignUp(form)
             navigate('/login')

        }catch(error){
            console.error('Error occur while Signup',error)
        }
     } 
    
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
         {error && (
      <p className="text-red-500 text-center mb-4">Error: {error}</p>
    )}

      <form onSubmit={handleSubmit}
       className="flex flex-col gap-6 bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>

        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Enter your name"
            className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Enter your email"
            className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label htmlFor="password" className="mb-1 font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            placeholder="Enter your password"
            className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* User Type */}
        <div className="flex flex-col">
          <span className="mb-1 font-medium">User Type</span>
          <div className="flex gap-8 items-center">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="type"
                value="customer"
                checked={form.type === "customer"}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className="w-5 h-5 border rounded focus:ring-2 focus:ring-blue-400"
              />
              Customer
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="type"
                value="vendor"
                checked={form.type === "vendor"}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className="w-5 h-5 border rounded focus:ring-2 focus:ring-blue-400"
              />
              Vendor
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors mt-4"
        >
          {isLoading?'SignUp Please wait':'SignUp'}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
