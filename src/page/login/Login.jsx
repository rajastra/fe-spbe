import { useState } from "react";
import "../../assets/style/login.css";
import log from "../../assets/image/login.png";
// import goggleImg from "../../assets/image/google.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { message } from "antd";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const URL = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const data = {
        email,
        password,
      };
      const response = await axios.post(`${URL}/api/v1/auth/login`, data);
      Cookies.set("token", response.data?.data?.access_token, { expires: 1 });
      Cookies.set("email", email, { expires: 1 });
      Cookies.set('role', response.data?.data?.user.role, { expires: 1 });
      Cookies.set('id', response.data?.data?.user._id, { expires: 1 });
      Cookies.set('name', response.data?.data?.user.first_name, { expires: 1 });
      message.success(response.data?.message);
      navigate("/");
    } catch (error) {
      let msg = error?.response?.data?.message || "Login Failed";
      message.error(msg);
    }
    setLoading(false);
  };

  return (
    <form>
      <section id="hero">
        <section className="container-fluid min-vh-100">
          <div className="row">
            <div
              className="image col-md-6 col-sm-3 d-none d-md-block vh-100 bg-image"
              style={{
                backgroundImage: `url(${log})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="col-md-6 px-4 d-grid">
              <h2 className="login d-flex align-items-end py-2">Login</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Masukkan Email"
                    required
                    value={email}
                    disabled={loading}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Masukkan Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                  />
                </div>
                <div className="container" id="email_wrapper">
                  <div className="row">
                    <div className="col-lg-12 mb-3">
                      <div
                        className="d-flex justify-content-end"
                        id="forgotPasswordLink"
                      >
                        <a href="">forgot password?</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="button container-fluid">
                  <div className="row">
                    <button
                      className="btn btn-primary"
                      type="button"
                      disabled={loading}
                      onClick={handleSubmit}
                    >
                      {loading && (
                        <span
                          className="spinner-border spinner-border-sm"
                          aria-hidden="true"
                        ></span>
                      )}
                      <span role="status">
                        {" "}
                        {loading ? "Loading..." : "Login"}
                      </span>
                    </button>
                  </div>
                  {/* <span className="d-flex justify-content-center py-2">or</span>
                  <div className="row">
                    <button className="btn btn-close-white border-primary border-2 col-lg-12">
                      <img src={goggleImg} alt="Google Logo" />
                      Log in with Google
                    </button>
                  </div> */}
                  <div className="line_border_bottom"></div>
                  <div className="signup row">
                    <span className="col-lg-12 px-lg-2">
                      No account yet?
                      <Link to="/register"> Sign Up</Link>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </section>
    </form>
  );
}

export default Login;
