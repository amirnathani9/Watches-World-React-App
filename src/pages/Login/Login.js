import { Link } from "react-router-dom";
import { useState } from "react";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import "./Login.css";
export const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  console.log(user);
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
            <label className="input-label my-4">
              Password*
              <input
                type="password"
                placeholder="Enter your password"
                className="input border-radius-1"
                required
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </label>
            <div className="flex items-center">
              <label className="flex items-center font-bold my-4 letter-spacing-zero">
                <input type="checkbox" /> Remember me
              </label>
              <div className="forget-password letter-spacing-zero ml-8">
                Forget your Password
              </div>
            </div>
            <button type="submit" className="btn primary-outline-btn font-size-5 border-radius-1 py-2">
              Login
            </button>
            <button type="button" className="btn secondary-btn font-size-4 border-radius-1 py-2">
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
