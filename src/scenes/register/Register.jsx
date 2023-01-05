import "./register.scss";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://socialmediaapp-production-1954.up.railway.app/api/auth/register",
        input
      );
    } catch (err) {
      setError(err.response.data);
    }
  };

  console.log(error);

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>GET STARTED.</h1>
          <p>
            Already have an account?
            <Link to="/fake-social-media-app/login">
              <button>Log in.</button>
            </Link>
          </p>
          <div>
            <button
              style={{
                backgroundColor: "#fff",
                color: "#000",
              }}
            >
              <FontAwesomeIcon icon={faGoogle} size="lg" />
              Sign up with Google
            </button>
            <button>
              <FontAwesomeIcon icon={faFacebook} size="lg" />
              Sign up with Facebook
            </button>
          </div>
          <hr data-content="or" />
          <form action="">
            <div className="email">
              <EmailOutlinedIcon sx={{ color: "black" }} />
              <input
                type="text"
                placeholder="Email address"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <LockOutlinedIcon sx={{ color: "black" }} />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="checkbox">
              <input type="checkbox" id="terms" name="terms" />
              <label htmlFor="terms">
                I agree to platforms Terms of Service and Privacy Police
              </label>
            </div>
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
        <div className="right">
          <p>Start for free & Connect.</p>
        </div>
      </div>
    </div>
  );
}

export default Register;
