import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = ({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.post(
        "/api/auth/register",
        {
          username,
          email,
          password,
        },
        config
      );

      localStorage.setItem("authToken", data.token);

      history.push("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div>
      <div className="signup-form">
        <form method="post" action="/register" className="form-horizontal">
          <div className="col-xs-8 col-xs-offset-4">
            <h2>Sign Up</h2>
          </div>
          <div className="form-group">
            <label className="control-label col-xs-4">Username</label>
            <div className="col-xs-8">
              <input
                type="text"
                className="form-control"
                name="username"
                required="required"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-xs-4">Email Address</label>
            <div className="col-xs-8">
              <input
                type="email"
                className="form-control"
                name="email"
                required="required"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-xs-4">Password</label>
            <div className="col-xs-8">
              <input
                type="password"
                className="form-control"
                name="password"
                required="required"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-xs-4">Confirm Password</label>
            <div className="col-xs-8">
              <input
                type="password"
                className="form-control"
                name="confirm_password"
                required="required"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-8 col-xs-offset-4">
              <button type="submit" className="btn btn-primary btn-lg">
                Sign Up
              </button>
            </div>
          </div>
        </form>
        <div className="text-center">
          Already have an account? <a href="./Login.js">Login here</a>
        </div>
      </div>
    </div>
  );
};
export default Register;
