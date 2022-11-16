import "./register.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>GET STARTED.</h1>
          <p>
            Already have an account?{" "}
            <Link to="/login">
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
              <EmailOutlinedIcon />
              <input type="text" placeholder="Email address" />
            </div>
            <div>
              <LockOutlinedIcon />
              <input type="password" placeholder="Password" />
            </div>

            <div className="checkbox">
              <input type="checkbox" id="terms" />
              <label for="terms">
                I agree to platforms Terms of Service and Privacy Police
              </label>
            </div>
            <button>Register</button>
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
