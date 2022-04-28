import { Link, useNavigate } from "react-router-dom";
import { useReducer } from "react";
import "./SignUp.css";
import axios from "axios";
import { useAuth } from "../../contexts/auth-context";
import { signUpReducer } from "../../reducer";
import { usePasswordToggle } from "../../hooks/usePasswordToggle";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { useToast } from "../../hooks";

export function SignUp() {
  const initialSignUpValue = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [signUpState, signUpDispatch] = useReducer(
    signUpReducer,
    initialSignUpValue
  );
  const { firstName, lastName, email, password, confirmPassword } = signUpState;
  const { authDispatch } = useAuth();
  const navigate = useNavigate();

  const { hidePass, showHide } = usePasswordToggle();
  const { showToast } = useToast();

  const signUpBtnHandler = async (e, userData) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/signup", userData);
      const { createdUser: user, encodedToken } = response.data;
      if (response.status === 201) {
        authDispatch({
          type: "AUTH_SUCCESS",
          payload: { user, encodedToken, isAuth: true },
        });
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("encodedToken", encodedToken);
        localStorage.setItem("isAuth", true);
        showToast("Account Created Successfully!", "success");
        navigate("/");
      }
    } catch (error) {
      showToast(error.response.data.errors[0], "error");
      signUpDispatch({ type: "CLEAR" });
    }
  };

  useDocumentTitle("SignUp - Watches World");
  return (
    <>
      <section className="signup-section section-center flex justify-center items-center">
        <div className="signup-main-container flex flex-col items-center border-radius-2">
          <h1 className="section-heading font-bold border-radius-1 p-2 my-2">
            Signup
          </h1>
          <form onSubmit={(e) => signUpBtnHandler(e, signUpState)}>
            <label className="input-label my-2">
              First Name*
              <input
                type="text"
                placeholder="Enter your first name"
                className="input border-radius-1"
                value={firstName}
                required
                onChange={(e) =>
                  signUpDispatch({
                    type: "FIRST_NAME",
                    payload: e.target.value,
                  })
                }
              />
            </label>
            <label className="input-label my-2">
              Last Name*
              <input
                type="text"
                placeholder="Enter your last name"
                className="input border-radius-1"
                value={lastName}
                required
                onChange={(e) =>
                  signUpDispatch({ type: "LAST_NAME", payload: e.target.value })
                }
              />
            </label>
            <label className="input-label my-2">
              Email*
              <input
                type="email"
                placeholder="Enter your email"
                className="input border-radius-1"
                value={email}
                required
                onChange={(e) =>
                  signUpDispatch({ type: "EMAIL", payload: e.target.value })
                }
              />
            </label>
            <label className="input-label my-2 relative">
              Password*
              <input
                type={hidePass ? "password" : "text"}
                placeholder="Enter your password"
                className="input border-radius-1"
                value={password}
                required
                onChange={(e) =>
                  signUpDispatch({ type: "PASSWORD", payload: e.target.value })
                }
              />
              <i
                className={`${
                  hidePass ? "fa fa-eye" : "fa fa-eye-slash"
                } pointer absolute show-hide-btn`}
                aria-hidden="true"
                onClick={showHide}
              ></i>
            </label>
            <label className="input-label my-2">
              Confirm Password*
              <input
                type="password"
                placeholder="Enter your password again"
                className="input border-radius-1"
                value={confirmPassword}
                required
                onChange={(e) =>
                  signUpDispatch({
                    type: "CONFIRM_PASSWORD",
                    payload: e.target.value,
                  })
                }
              />
              {password !== confirmPassword && (
                <p className="password-match-alert font-size-4">
                  Password Not Match
                </p>
              )}
            </label>
            <label className="flex items-center font-bold my-4 letter-spacing-zero">
              <input type="checkbox" /> I accept all the Terms & Conditions
            </label>
            <button
              className="btn primary-outline-btn font-size-6 border-radius-1 py-3"
              disabled={password !== confirmPassword}
            >
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
