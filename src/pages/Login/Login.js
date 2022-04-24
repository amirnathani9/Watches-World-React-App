import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import "./Login.css";
import axios from "axios";
import { useAuth } from "../../contexts";
export const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { authDispatch } = useAuth();

  const [hidePass, sethidePass] = useState(true);

  const showHide = () => {
    hidePass ? sethidePass(false) : sethidePass(true);
  };

  const loginButtonHandler = async (e, userData) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", userData);
      const { foundUser: user, encodedToken } = response.data;
      if (response.status === 200) {
        authDispatch({
          type: "AUTH_SUCCESS",
          payload: { user, encodedToken, isAuth: true },
        });
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("encodedToken", encodedToken);
        localStorage.setItem("isAuth", true);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  };

  useDocumentTitle("Login - Watches World");
  return (
    <>
      <section className="login-section section-center flex justify-center items-center">
        <div className="login-main-container flex flex-col items-center border-radius-2">
          <h1 className="section-heading font-bold border-radius-1 p-2 my-4">
            Login
          </h1>
          <form>
            <label className="input-label my-4">
              Email*
              <input
                type="email"
                placeholder="Enter your E-Mail"
                className="input border-radius-1"
                required
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </label>
            <label className="input-label my-4 relative">
              Password*
              <input
                type={hidePass ? "password" : "text"}
                placeholder="Enter your password"
                className="input border-radius-1"
                required
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              ></input>
              <i
                className={`${
                  hidePass ? "fa fa-eye" : "fa fa-eye-slash"
                } pointer absolute show-hide-btn`}
                aria-hidden="true"
                onClick={showHide}
              ></i>
            </label>

            <div className="flex items-center">
              <label className="flex items-center font-bold my-4 letter-spacing-zero">
                <input type="checkbox" /> Remember me
              </label>
              <div className="forget-password letter-spacing-zero ml-8">
                Forget your Password
              </div>
            </div>
            <button
              type="submit"
              className="btn primary-outline-btn font-size-5 border-radius-1 py-2"
              onClick={(e) =>
                loginButtonHandler(e, {
                  email: user.email,
                  password: user.password,
                })
              }
            >
              Login
            </button>
            <button
              type="button"
              className="btn secondary-btn font-size-4 border-radius-1 py-2"
              onClick={(e) =>
                loginButtonHandler(e, {
                  email: "aamirnathani@gmail.com",
                  password: "aamir",
                })
              }
            >
              Guest Login
            </button>
          </form>
          <Link to="/signup" className="new-account-btn">
            Create New Account
            <i className="fas fa-long-arrow-alt-right mx-1"></i>
          </Link>
        </div>
      </section>
    </>
  );
};
