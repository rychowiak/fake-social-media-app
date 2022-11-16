import "./login.scss";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>LOREM IPSUM.</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            libero inventore molestiae officia dolore perspiciatis ut.
          </p>
          <span>Don't have an account yet?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <p>Login</p>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
