import React, { useContext, useState } from "react";
import { Form, Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const [error, setError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    setError("");
    const form = event.target;
    const name = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.value;

    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      )
    ) {
      setError(
        "Password must be 8 characters and at least one uppercase letter, one lowercase letter, one number and one special character"
      );
    }
    if ((name, email, password)) {
      createUser(name, email, password, image)
        .then((result) => {
          const createdUser = result.user;
          console.log(createdUser);
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
                type="checkbox"
                name="accept-condition"
                className="checkbox"
              />
              <span>Accept Terms & Condition</span>
            </div>
            <p className="text-red-700 text-center">{error}</p>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
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
