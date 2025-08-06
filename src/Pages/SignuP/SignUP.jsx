import React, { useState, useContext } from "react";
import { AuthContext } from "../../contextProvider/AuthProvider";
import { useForm } from "react-hook-form"; 

import { Link } from "react-router-dom";

const SignUP = () => {
    const [error, setError] = useState(""); 
  const {
    register,
    handleSubmit,
    watch,
    formState:{errors}
  } = useForm();

  const onSubmit = (data) => 
    {console.log(data);};

   console.log(watch("example")) //

 

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Create an Account</h1>
          <p className="py-6">
            Join us today and unlock access to more features!
          </p>
        </div>

        <div className="card bg-base-100 md:w-1/2 max-w-sm shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="label">Name</label>
              <input
                type="text"
               {...register("name" ,{required:true})}
                placeholder="Full Name"
                className="input input-bordered w-full"
                required
              />
                 {errors.name && <span>This field is required</span>}

              <label className="label">Email</label>
              <input
                type="email"
              {...register("email" ,{required:true})}
                placeholder="Email"
                className="input input-bordered w-full"
                required
              />
                 {errors.email && <span>This field is required</span>}
                

              <label className="label">Password</label>
              <input
                type="password"
               {...register("password")}
                placeholder="Password"
                className="input input-bordered w-full"
                required
              />

              <label className="label">Confirm Password</label>
              <input
                type="password"
               {...register("confirm")}
                placeholder="Confirm Password"
                className="input input-bordered w-full"
                required
              />

              {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}

              <input
                type="submit"
                value="Sign Up"
                className="btn btn-primary mt-4 w-full"
              />
            </form>

            <p className="mt-2 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="link link-hover text-blue-600">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
