
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import {  FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../UserContext/UseContext";

const Register = () => {
  const { createUser, updateUser , googleLogin} = useContext(AuthContext);
  
  const navigate= useNavigate();

  const createUsers = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0]
    const formData = new FormData()

    formData.append('image', image)
    const url = "https://api.imgbb.com/1/upload?=600&key=7bfed1b127f1b0296e21aab609f45785"
    fetch(url, {method: 'POST', body: formData})

        .then(res => res.json())
        .then(imageData => {
         const imgUrl=imageData.data.display_url
         console.log(imgUrl);
          createUser(email, password)
          .then(data=>{
            console.log(data);
            updateUser(name, imgUrl)
            toast.success('successfully created user')
            navigate('/')
        
          })
          .catch(error=> console.log(error.message))
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
    <div className="overflow-hidden shadow-xl p-5 lg:w-4/12 mx-auto lg:my-16 rounded">
      <form onSubmit={createUsers} className="">
        <h1 className="text-sm md:text-3xl font-bold text-center my-4">
          Register
        </h1>

        <input
          type="text"
          name="name"
          id=""
          className="w-full rounded border mt-4"
          placeholder="Your Name"
          required
        />

        <br />
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

        <br />
        <input
          type="file"
          name="image"
          className="border w-full my-3 rounded"
          id=""
          required
        />

        <br />
        <div className="items-center justify-center text-center flex">
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
        Back To{" "}
        <Link to="/login" className="text-green-400">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
