import React, { useState, useContext } from "react";
import { AuthContext } from "../../contextProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";

const SignUP = () => {
  const { createuser, uPdateProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    // ✅ Password confirmation check
    if (data.password !== data.confirm) {
      setError("Passwords do not match!");
      return;
    }

    createuser(data.email, data.password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log("Firebase user created:", loggedInUser);

        // ✅ update profile
        uPdateProfile(data.name, data.PhotoURL)
          .then(() => {
            console.log("User profile updated");

            const userInfo = {
              name: data.name,
              email: data.email,
              photoURL: data.PhotoURL,
            };

            // ✅ save user in MongoDB
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(userInfo),
            })
              .then((res) => res.json())
              .then((dbRes) => {
                if (dbRes.insertedId) {
                  console.log("✅ User added to MongoDB", dbRes);
                } else {
                  console.log("⚠ User already exists in MongoDB");
                }
                reset();
               navigate("/login");
              })
              .catch((err) =>
                console.error("❌ Error saving user to MongoDB:", err)
              );
          })
          .catch((error) => console.log("❌ Profile update error:", error));
      })
      .catch((error) => {
        console.log("❌ Firebase signup error:", error);
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
          {/* Left side content */}
          <div className="text-center w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Create an Account</h1>
            <p className="py-6">
              Join us today and unlock access to more features!
            </p>
          </div>

          {/* Signup Form */}
          <div className="card bg-base-100 md:w-1/2 max-w-sm shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name */}
                <label className="label">Name</label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Full Name"
                  className="input input-bordered w-full"
                />
                {errors.name && <span>This field is required</span>}

                {/* Email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Email"
                  className="input input-bordered w-full"
                />
                {errors.email && <span>This field is required</span>}

                {/* Photo URL */}
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  {...register("PhotoURL", { required: true })}
                  placeholder="Paste your photo URL"
                  className="input input-bordered w-full"
                />
                {errors.PhotoURL && <span>This field is required</span>}

                {/* Password */}
                <label className="label">Password</label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="Password"
                  className="input input-bordered w-full"
                />
                {errors.password && <span>This field is required</span>}

                {/* Confirm Password */}
                <label className="label">Confirm Password</label>
                <input
                  type="password"
                  {...register("confirm", { required: true })}
                  placeholder="Confirm Password"
                  className="input input-bordered w-full"
                />
                {errors.confirm && <span>This field is required</span>}

                {/* Error display */}
                {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}

                {/* Submit Button */}
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn btn-primary mt-4 w-full"
                />
              </form>

              <p className="mt-2 text-sm p-4">
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
