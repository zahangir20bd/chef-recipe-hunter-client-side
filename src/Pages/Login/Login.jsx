import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div>
        <div className="hero min-h-screen bg-base-200 rounded-xl">
          <div className="hero-content flex-col lg:flex-row-reverse lg:justify-between">
            <div className="text-center lg:text-left ">
              <h1 className="text-2xl font-bold mb-5 ">Continue With</h1>
              <button className="btn btn-outline btn-primary w-full mb-2">
                <FaGoogle className="me-1" />
                <span>Login With Google</span>
              </button>
              <button className="btn btn-outline btn-primary w-full">
                <FaGithub className="me-1" />
                <span>Login With GitHub</span>
              </button>
              <p className="py-6"></p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <div>
                  <span>New to here? Go to..</span>
                  <Link className="text-primary" to="/register">
                    {" "}
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
