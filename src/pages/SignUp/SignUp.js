import { Link } from "react-router-dom";
import "./SignUp.css";
export function SignUp() {
  return (
    <>
      <section className="signup-section section-center flex justify-center items-center">
        <div className="signup-main-container flex flex-col items-center border-radius-2">
          <h1 className="section-heading font-bold border-radius-1 p-2 my-2">
            Signup
          </h1>
          <form>
            <label className="input-label my-2">
              First Name*
              <input
                type="text"
                placeholder="Enter your first name"
                className="input border-radius-1"
                required
              />
            </label>
            <label className="input-label my-2">
              Last Name*
              <input
                type="text"
                placeholder="Enter your last name"
                className="input border-radius-1"
                required
              />
            </label>
            <label className="input-label my-2">
              Email*
              <input
                type="email"
                placeholder="Enter your email"
                className="input border-radius-1"
                required
              />
            </label>
            <label className="input-label my-2">
              Password*
              <input
                type="password"
                placeholder="Enter your password"
                className="input border-radius-1"
                required
              />
            </label>
            <label className="input-label my-2">
              Confirm Password*
              <input
                type="password"
                placeholder="Enter your password again"
                className="input border-radius-1"
                required
              />
            </label>
            <label className="flex items-center font-bold my-4 letter-spacing-zero">
              <input type="checkbox" /> I accept all the Terms & Conditions
            </label>
            <button className="btn primary-outline-btn font-size-6 border-radius-1 py-3">
              Signup
            </button>
          </form>
          <Link to="/login" className="new-account-btn">
            Already have an account{" "}
            <i className="fas fa-long-arrow-alt-right mx-1"></i>
          </Link>
        </div>
      </section>
    </>
  );
}
