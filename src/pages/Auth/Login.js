import md5 from "md5";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData.entries());

    console.log(obj);
    if (obj["email"] == "admin@gmail.com" && obj["password"] == "123123123") {
      localStorage.setItem("token", md5(md5("billingcaresolutions")));
      navigate("/allBlogs");
    } else {
      setMsg("Invalid Credentials");
    }
  };
  return (
    <>
      <div class="h-screen flex justify-center items-center">
        <div class="flex flex-col md:flex-row w-4/5 bg-white rounded-xl md:p-20  justify-between items-center">
          <img
            src="/assets/Logo billingcaresolutions.com.svg"
            alt="Billing Care Solutions"
            class="w-2/3 md:w-1/3 h-auto"
          />
          <div class="hidden md:flex w-[0.5px] h-96 bg-[#c60001]"></div>
          <form
            method="POST"
            class="md:w-1/2 flex flex-col gap-3 pb-10 md:pb-0"
            onSubmit={handleSubmit}
          >
            <h1 class="text-lg font-bold leading-tight tracking-tight text-secondary md:text-xl">
              Sign in to your account
            </h1>
            {msg == "Invalid Credentials" ? (
              <>
                <div className="w-full bg-red-400 text-center p-3 text-white rounded-lg">
                  {msg}
                </div>
              </>
            ) : (
              <></>
            )}
            <div>
              <label
                for="email"
                class="block mb-2 text-xs font-medium text-secondary "
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-secondary sm:text-xs rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                placeholder="name@billingcaresolutions.com"
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-xs font-medium text-secondary "
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-secondary sm:text-xs rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                required=""
              />
            </div>
            <div class="flex flex-col md:flex-row justify-between gap-3">
              <button
                type="submit"
                class="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xs px-5 py-2.5 text-center"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
