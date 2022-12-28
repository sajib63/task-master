import React, { useContext } from "react";
import { toast } from "react-hot-toast";

import {  FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../UserContext/UseContext";

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const navigate=useNavigate();

  const loginButon = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password).then((result) => {
      toast.success("successfully login");
      navigate('/')
      form.reset();
    })
    .catch(error=> {
      toast.error(error.message)
    })
  };

  const google=()=>{
    googleLogin()
    .then(result=>{
      toast.success('successfully login')
      navigate('/')
    })
  }
  return (
    <div className="overflow-hidden shadow-xl p-5 lg:w-4/12 mx-auto lg:my-16 rounded ">
      <form onSubmit={loginButon} className="">
        <h1 className="text-sm md:text-3xl font-bold text-center my-4">
          Login
        </h1>

        <input
          type="email"
          name="email"
          id=""
          className="w-full rounded border my-6"
          placeholder="Your Email"
          required
        />

        <br />

        <input
          type="password"
          name="password"
          id=""
          className="w-full rounded border"
          placeholder="Your Password"
          required
        />

        <div className="items-center justify-center text-center flex my-4">
          <input
            type="submit"
            className="btn border md:w-6/12  rounded p-2 border-green-400 hover:bg-green-400 duration-500"
            value="Register"
          />
        </div>
      </form>

      <fieldset className="border-t border-gray-400">
        <legend className="mx-auto px-4 text-2xl">Or</legend>
      </fieldset>

      <div className="flex gap-6 justify-center items-center my-4">
        <button onClick={google} className="btn p-4 rounded-full border border-green-400">
          <FaGoogle></FaGoogle>
        </button>
       
      </div>

      <p className="text-center">
        {" "}
        <Link to="/register" className="text-green-400">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
