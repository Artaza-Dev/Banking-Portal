import React, { useState } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns, faEye, faEyeSlash  } from "@fortawesome/free-solid-svg-icons";
import userStore from "../../store/usersStore";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Loader from "react-js-loader";
function Signup() {
  const navigate = useNavigate();
  const { registerUser, users } = userStore();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const[showpassword, setShowpassword] = useState(false)

  const signupSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  
  function viewHandler(){
    setShowpassword(!showpassword)
  }


  async function signupHandler(e) {
    e.preventDefault();
    setLoading(true); // Start loading first
    try {
       await new Promise((resolve) => setTimeout(resolve, 2000));
      await signupSchema.validate(
        { username, email, phone, password },
        { abortEarly: false }
      );

      const existingUser = users.find((user) => user.email === email);
      if (existingUser) {
        setErrors({
          email: "This email is already registered. Please log in.",
        });
        setLoading(false);
        setTimeout(() => setErrors({}), 3000);
        return;
      }

      const data = { username, email, phone, password, balance: 0 };
      await registerUser(data);

      // Reset fields
      setUsername("");
      setEmail("");
      setPhone("");
      setPassword("");

      navigate("/");
    } catch (err) {
      const validationErrors = {};
      if (err.inner && err.inner.length > 0) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
      } else {
        validationErrors[err.path] = err.message;
      }
      setErrors(validationErrors);
      setTimeout(() => setErrors({}), 3000);
    } finally {
      setLoading(false); // Stop loading
    }
  }

  return (
    <>
      <div className="bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-500 w-full min-h-screen flex items-center justify-center p-4">
        <div
          className="
    w-full max-w-[500px]     
    sm:max-w-[450px] 
    md:max-w-[400px] 
    lg:max-w-[420px] 
    xl:max-w-[450px]
    2xl:max-w-[480px]

    h-auto min-h-[450px]         
    sm:min-h-[500px] 
    md:min-h-[520px] 
    lg:min-h-[540px] 
    xl:min-h-[560px] 
    2xl:min-h-[580px]

    bg-white/10 backdrop-blur-md border border-white/20 
    rounded-2xl shadow-2xl 
    flex flex-col items-center p-6
  "
        >
          <div className="w-full flex flex-col items-center pt-4">
            <FontAwesomeIcon
              icon={faBuildingColumns}
              className="text-5xl sm:text-6xl text-white mb-2 shadow-2xl"
            />
            <p className="text-2xl sm:text-3xl font-semibold text-white tracking-wide">
              Welcome Back
            </p>
            <p className="text-xs sm:text-sm text-gray-200 mt-1">
              Sign in to your account
            </p>
          </div>

          <div className="w-full mt-4 space-y-3">
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
                  value={username}
                  placeholder="Enter your username"
                  className="bg-white/20 text-white placeholder-gray-300"
                  onchange={(e) => setUsername(e.target.value)}
                />
                {errors.username && (
                  <p className="text-sm text-red-400">{errors.username}</p>
                )}
                <Input
                  type="email"
                  value={email}
                  placeholder="Enter your email"
                  className="bg-white/20 text-white placeholder-gray-300"
                  onchange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <p className="text-sm text-red-400">{errors.email}</p>
                )}
                <Input
                  type="tel"
                  value={phone}
                  placeholder="Enter your phone no"
                  className="bg-white/20 text-white placeholder-gray-300"
                  onchange={(e) => setPhone(e.target.value)}
                />
                {errors.phone && (
                  <p className="text-sm text-red-400">{errors.phone}</p>
                )}
                <div className="w-full h-auto relative">
                  <FontAwesomeIcon
                    icon={showpassword ? faEye : faEyeSlash}
                    className="text-md shadow-2xl text-white absolute top-4.5 right-4 cursor-pointer"
                    onClick={viewHandler}
                  />
                  <Input
                    type={showpassword ? "text" : "password"}
                    value={password}
                    placeholder="Enter your password"
                    className="bg-white/20 text-white placeholder-gray-300"
                    onchange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {errors.password && (
                  <p className="text-sm text-red-400">{errors.password}</p>
                )}
              </>
            )}
          </div>

          <div className="w-full flex flex-col items-center mt-5">
            <Button
              className="w-[80%] bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg shadow-md transition-all duration-300"
              text={loading ? "Please wait..." : "Sign Up"}
              onclick={signupHandler}
            />
            <p className="text-white text-xs sm:text-sm mt-2">
              Do you have an account?{" "}
              <NavLink
                to="/"
                className="text-indigo-300 cursor-pointer hover:text-zinc-800"
              >
                Sign In
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
