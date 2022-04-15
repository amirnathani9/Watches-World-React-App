import { Link } from "react-router-dom";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import "./Login.css"
export const Login = () => {
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
              Username*
              <input
                type="text"
                placeholder="Enter your username"
                className="input border-radius-1"
                required
              />
            </label>
            <label className="input-label my-4">
              Password*
              <input
                type="password"
                placeholder="Enter your password"
                className="input border-radius-1"
                required
              />
            </label>
            <div className="flex items-center">
              <label className="flex items-center font-bold my-4 letter-spacing-zero">
                <input type="checkbox" /> Remember me
              </label>
              <div
                className="forget-password letter-spacing-zero ml-8"
              >
                Forget your Password
              </div>
            </div>
            <button className="btn primary-outline-btn font-size-6 border-radius-1 py-3">
              Login
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
