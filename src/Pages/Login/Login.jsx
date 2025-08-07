import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect } from "react";
import { useState, useContext } from "react";
// ✅ CORRECT
import { AuthContext } from "../../contextProvider/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useLocation } from 'react-router-dom';

const Login = () => {
  const [disabled, setdisable] = useState(true);
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'



  const { signwithemailPassword } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log("Email:", email);
    console.log("Password:", password);

    signwithemailPassword(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "Login Successfull",
        showClass: {
          popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
        },
        hideClass: {
          popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
        },
      });
      navigate(from,{replace:true})
    });
  };
  const validatecaP = (e) => {
    const user_caPtcha_value = e.target.value;
    if (validateCaptcha(user_caPtcha_value)) {
      setdisable(false);
    } else {
      setdisable(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* Left Side Text */}
          <div className="text-center w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>

          {/* Right Side Form */}
          <div className="card bg-base-100 md:w-1/2 max-w-sm  shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin} className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="Email"
                  name="email"
                  required
                />

                <label className="label">Password</label>
                <input
                  type="password"
                  className="input input-bordered w-full"
                  placeholder="Password"
                  name="password"
                  required
                />

                <div className="mt-2">
                  <a className="link link-hover">Forgot password?</a>
                </div>
                {/** caPtach */}
                <div>
                  <label className="label">
                    {" "}
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    onBlur={validatecaP}
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="CaP"
                    name="CaP"
                    required
                  />
                </div>

                <input
                  disabled={disabled}
                  className="btn btn-neutral mt-4 w-full hover:bg-amber-600"
                  type="submit"
                  value="Login"
                />
              </form>
              <h5>
                <small>
                  New Here? <Link to="/signuP"> Create an Account</Link>
                </small>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
