import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Login = () => {
  const navigate = useNavigate();
  const { authInfo } = useContext(AuthContext);
  const { signInUser, signInWithGoogle } = authInfo;

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("Logging in with", email, password);

    // Use signInUser from context to log in the user
    signInUser(email, password)
      .then((userCredential) => {
        // Logged in successfully
        const user = userCredential.user;
        console.log("Logged in user:", user);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.error("Error logging in user:", error);
      });
  };

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input"
                    placeholder="Password"
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
                <p>
                  New to this website? Please{" "}
                  <Link to="/register" className="text-blue-600">
                    Register
                  </Link>
                  .
                </p>
                <button onClick={handleGoogleSignIn} className="btn btn-accent">
                  Google
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
