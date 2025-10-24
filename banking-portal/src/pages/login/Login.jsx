import React, { useState } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import usersStore from "../../store/usersStore";
import * as Yup from "yup";
import Loader from "react-js-loader";
function Login() {
  const navigate = useNavigate();
  const { users, setCurrentUser } = usersStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const[showpassword, setShowpassword] = useState(false)
  // Here is Proper validation with Yup
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be 6 digits")
      .required("Password is required"),
  });

  function viewHandler(){
    setShowpassword(!showpassword)
  }

  async function loginHandler(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await loginSchema.validate({ email, password }, { abortEarly: false });
      setErrors({});

      const isValidation = users.find(
        (u) => u.email === email && u.password === password
      );
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
    }finally {
      setLoading(false); // Stop loading
    }
  }

  return (
    <>
      <div className="bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-500 w-full min-h-screen flex items-center justify-center">
        <div
          className=" w-full max-w-[500px]     
    sm:max-w-[450px] 
    md:max-w-[400px] 
    lg:max-w-[420px] 
    xl:max-w-[450px]
    2xl:max-w-[480px]

    h-auto min-h-[350px]         
    sm:min-h-[400px] 
    md:min-h-[420px] 
    lg:min-h-[440px] 
    xl:min-h-[460px] 
    2xl:min-h-[480px] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl flex flex-col items-center p-6"
        >
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
            {loading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "20px 0",
                }}
              >
                <Loader
                  type="spinner-cub"
                  bgColor={"#152259"}
                  color={"#152259"}
                  size={100}
                />
              </div>
            ) : (
              <>
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
            <div className="w-full h-auto relative">
              <FontAwesomeIcon
              icon={showpassword? faEye: faEyeSlash}
              className="text-md shadow-2xl text-white absolute top-4.5 right-4 cursor-pointer"
              onClick={viewHandler}
            />
              <Input
              type={showpassword ? "text": "password"}
              placeholder="Enter your password"
              className="bg-white/20 text-white placeholder-gray-300"
              onchange={(e) => setPassword(e.target.value)}
            />
            </div>
            {errors.password && (
              <p className="text-red-400 text-xs">{errors.password}</p>
            )}
            {errors.auth && (
              <p className="text-red-400 text-xs">{errors.auth}</p>
            )}
              </>
            )}

           
          </div>

          <div className="w-full flex flex-col items-center mt-5">
            <Button
              className="w-[80%] bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg shadow-md transition-all duration-300"
              text={loading ? "Please wait..." : "Sign In"}
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
