import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { signIN, googleSignIn, gitHubSignIN } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  // UseLocation for redirect to the path where to go
  const from = location.state?.from?.pathname || "/";

  // Login Handler
  const handleLogin = (event) => {
    event.preventDefault();
    setError("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIN(email, password)
      .then((result) => {
        const LoggedInUser = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError("Wrong email or password. Try again...");
      });
  };

  // Login with Google Handler
  const handleGoogleSign = async () => {
    setError("");
    try {
      await googleSignIn();
      navigate(from, { replace: true });
    } catch (error) {
      setError(error.message);
    }
  };

  // Login with Github Handler
  const handleGithubSign = async () => {
    setError("");
    try {
      await gitHubSignIN();
      navigate(from, { replace: true });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200 rounded-xl">
      <div className="hero-content flex-col lg:flex-row-reverse lg:justify-between">
        <div className="text-center lg:text-left ">
          <h1 className="text-2xl font-bold mb-5 ">Continue With</h1>
          <button
            onClick={handleGoogleSign}
            className="btn btn-outline btn-primary w-full mb-2"
          >
            <FaGoogle className="me-1" />
            <span>Login With Google</span>
          </button>
          <button
            onClick={handleGithubSign}
            className="btn btn-outline btn-primary w-full"
          >
            <FaGithub className="me-1" />
            <span>Login With GitHub</span>
          </button>
          <p className="py-6"></p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <Form onSubmit={handleLogin}>
            <div className="card-body">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <p className="text-red-700 text-center">{error}</p>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
              <div>
                <span>New to here? Go to..</span>
                <Link className="text-primary" to="/register">
                  Register
                </Link>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
