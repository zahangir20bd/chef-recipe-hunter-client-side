import React, { useContext, useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [accept, setAccept] = useState(false);

  const handleAccept = (event) => {
    setAccept(event.target.checked);
  };
  // Registration new user handler
  const handleRegister = (event) => {
    event.preventDefault();
    setError("");
    const form = event.target;
    const name = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.value;

    // Check Password, Password must be 8 characters and at least one uppercase letter, one lowercase letter, one number and one special character
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      )
    ) {
      setError(
        "Password must be 8 characters and at least one uppercase letter, one lowercase letter, one number and one special character"
      );
      return;
    }

    // if name, email, and password is true then create a user and redirect to Home page
    if ((name, email, password)) {
      createUser(name, email, password, image)
        .then((result) => {
          const createdUser = result.user;
          navigate("/");
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200 rounded-xl">
      <Form onSubmit={handleRegister} className="hero-content">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Register Here!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="username"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
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
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                className="input input-bordered"
              />
            </div>
            <div className=" flex items-center gap-2">
              <input
                onClick={handleAccept}
                type="checkbox"
                name="accept-condition"
                className="checkbox"
              />
              <span>
                Accept <Link className="text-primary">Terms & Condition</Link>
              </span>
            </div>
            <p className="text-red-700 text-center">{error}</p>
            <div className="form-control mt-6">
              <button
                type="submit"
                disabled={!accept}
                className="btn btn-primary"
              >
                Register
              </button>
            </div>
            <div>
              <span>Already have an account? Go to..</span>
              <Link className="text-primary" to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Register;
