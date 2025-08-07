import React, { useState, useContext } from "react";
import { AuthContext } from "../../contextProvider/AuthProvider";
import { useForm } from "react-hook-form"; 
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const SignUP = () => {
  const { createuser, uPdateProfile } = useContext(AuthContext);
  const [error, setError] = useState(""); 
   const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createuser(data.email, data.password)
      .then(result => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        uPdateProfile(data.name, data.PhotoURL)
          .then(() => {
            // Optionally reset or redirect
            console.log('user Profile info UPDate')
            reset();
            navigate('/')
          })
          .catch(error => console.log(error));
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
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
                  {...register("name", { required: true })}
                  placeholder="Full Name"
                  className="input input-bordered w-full"
                />
                {errors.name && <span>This field is required</span>}

                <label className="label">Email</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Email"
                  className="input input-bordered w-full"
                />
                {errors.email && <span>This field is required</span>}

                <label className="label">Photo URL</label>
                <input
                  type="text"
                  {...register("PhotoURL", { required: true })}
                  placeholder="Paste your photo URL"
                  className="input input-bordered w-full"
                />
                {errors.PhotoURL && <span>This field is required</span>}

                <label className="label">Password</label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="Password"
                  className="input input-bordered w-full"
                />
                {errors.password && <span>This field is required</span>}

                <label className="label">Confirm Password</label>
                <input
                  type="password"
                  {...register("confirm", { required: true })}
                  placeholder="Confirm Password"
                  className="input input-bordered w-full"
                />
                {errors.confirm && <span>This field is required</span>}

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
    </>
  );
};

export default SignUP;
