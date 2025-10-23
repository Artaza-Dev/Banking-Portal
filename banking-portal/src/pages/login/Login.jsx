import React, { useState } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import usersStore from "../../store/usersStore";
import * as Yup from "yup";
function Login() {
 const navigate = useNavigate();
  const { users, setCurrentUser } = usersStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
 // Here is Proper validation with Yup
  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Please enter a valid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  async function loginHandler(e) {
    e.preventDefault();
    
    try {
      await loginSchema.validate({ email, password }, { abortEarly: false });
      setErrors({});

      const isValidation = users.find((u) => u.email === email && u.password === password);
      if (isValidation) {
        setCurrentUser(isValidation);
        localStorage.setItem("isAuthenticated", "true");

        // Clear inputs (optional) THEN navigate
        setEmail("");
        setPassword("");

        navigate("/dashboard");
      } else {
        setErrors({ auth: "Email or password is incorrect" });
      }
    } catch (err) {
      // This code show each field error separatly
      const validationErrors = {};
      if (err.inner && err.inner.length > 0) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
      } else {
        validationErrors[err.path] = err.message;
      }
      setErrors(validationErrors);
    }
  }

  return (
    <>
      <div className="bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-500 w-full min-h-screen flex items-center justify-center">
        <div className="w-[90%] sm:w-[50%] md:w-[35%] h-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl flex flex-col items-center p-6">
          <div className="w-full flex flex-col items-center pt-4">
            <FontAwesomeIcon
              icon={faBuildingColumns}
              className="text-6xl text-white mb-3 shadow-2xl"
            />
            <p className="text-3xl font-semibold text-white tracking-wide">
              Welcome Back
            </p>
            <p className="text-sm text-gray-200 mt-1">
              Sign in to your account
            </p>
          </div>

          <div className="w-full px-1 mt-5 space-y-4">
            <Input
              type="text"
              placeholder="Enter your email"
              className="bg-white/20 text-white placeholder-gray-300"
              onchange={(e) => setEmail(e.target.value)}
            />
            {/* This line show specific error related to its field */}
            {errors.email && (
              <p className="text-red-400 text-xs">{errors.email}</p>
            )}
            <Input
              type="password"
              placeholder="Enter your password"
              className="bg-white/20 text-white placeholder-gray-300"
              onchange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-red-400 text-xs">{errors.password}</p>
            )}
          </div>

          <div className="w-full flex flex-col items-center mt-5">
            <Button
              className="w-[80%] bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg shadow-md transition-all duration-300"
              text="Sign In"
              onclick={loginHandler}
            />

            <p className="text-white text-sm mt-3  hover:text-white">
              Don't have an account?{" "}
              <NavLink to="/signup" className="text-indigo-300 cursor-pointer">
                Sign Up
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
