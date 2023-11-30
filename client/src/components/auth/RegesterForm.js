import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as apis from "../../apis";
const RegesterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
 const [dataRes, setDataRes] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [permission, setPermission] = useState("");
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    permission: "",
  });

  const validateUsername = () => {
    if (username.trim() === "") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        username: "Tên không được để trống",
      }));
    } else if (username.length < 6 || username.length > 15) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        username: "Tên phải có từ 6 đến 15 ký tự",
      }));
    } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        username: "Tên không được chứa ký tự đặc biệt",
      }));
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        username: "",
      }));
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email không hợp lệ",
      }));
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: "",
      }));
    }
  };

  const validatePassword = () => {
    if (password.length < 6 || password.length > 15) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        password: "Mật khẩu phải có 6 đến 15 ký tự",
      }));
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        password: "",
      }));
    }
  };

  const validatePasswordConfirmation = () => {
    if (passwordConfirmation !== password) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        passwordConfirmation: "Mật khẩu xác nhận không khớp",
      }));
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        passwordConfirmation: "",
      }));
    }
  };
  const validatePermission = () => {
    if (permission.trim() === "") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        permission: "Vui lòng chọn quyền",
      }));
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        permission: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Kiểm tra lỗi trước khi thực hiện hành động
    validateUsername();
    validateEmail();
    validatePassword();
    validatePasswordConfirmation();
    validatePermission();
    if (!Object.values(formErrors).some((error) => error !== "")) {

    setDataRes({username, email, password, permission});
    if(dataRes){

      const fetchData = async () => {
        // Các tác vụ khởi tạo hoặc fetch dữ liệu ở đây
          try {
            // Call the regis ration function and wait for the result
            const registrationResult = await apis.register(dataRes);
            console.log(registrationResult);
            // Check the registration result and perform actions accordingly
            if (registrationResult.success === true ) {
              // Registration successful
              alert("Đăng ký thành công .");
              console.log("User details:", registrationResult);
              navigate("/login");
              // You can also perform additional actions here
            } else {
              // Registration failed
              alert("email hoặc tên đăng nhập đã tồn tại.");        
              // Handle the failure, show an error message, etc.
            }
          } catch (error) {
            // Handle any errors that occur during the registration process
            console.error("Error during registration:", error);
          }
      };
          
      fetchData();
    }
    }
    }

  return (
    <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-sm sm:rounded-lg">
      <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
        Register
      </h1>
      <form onSubmit={handleSubmit} method="GET">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 undefined"
          >
            Name
          </label>
          <div className="flex flex-col items-start">
            <input
              type="text"
              name="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onBlur={validateUsername}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {formErrors.username && (
              <p className="text-sm text-red-500 mt-1">{formErrors.username}</p>
            )}
          </div>
        </div>
        <div className="mt-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 undefined"
          >
            Email
          </label>
          <div className="flex flex-col items-start">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {formErrors.email && (
              <p className="text-sm text-red-500 mt-1">{formErrors.email}</p>
            )}
          </div>
        </div>
        <div className="mt-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 undefined"
          >
            Password
          </label>
          <div className="flex flex-col items-start">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={validatePassword}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {formErrors.password && (
              <p className="text-sm text-red-500 mt-1">{formErrors.password}</p>
            )}
          </div>
        </div>
        <div className="mt-4">
          <label
            htmlFor="password_confirmation"
            className="block text-sm font-medium text-gray-700 undefined"
          >
            Confirm Password
          </label>
          <div className="flex flex-col items-start">
            <input
              type="password"
              name="password_confirmation"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              onBlur={validatePasswordConfirmation}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {formErrors.passwordConfirmation && (
              <p className="text-sm text-red-500 mt-1">
                {formErrors.passwordConfirmation}
              </p>
            )}
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p>Choose permissions :</p>
          <div className="flex items-center">
            <input
              type="radio"
              id="reader"
              checked={permission === "1"}
              value="1"
              onChange={(e) => setPermission(e.target.value)}
              className="hidden"
            />
            <label
              htmlFor="reader"
              className={`text-gray-700 cursor-pointer relative flex items-center ${
                permission === "1" ? "text-blue-500" : ""
              }`}
            >
              <div className="w-5 h-5 border border-gray-400 rounded-md mr-2 flex items-center justify-center">
                {permission === "1" && (
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                )}
              </div>
              Reader
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="poster"
              checked={permission === "2"}
              value="2"
              onChange={(e) => setPermission(e.target.value)}
              className="hidden"
            />
            <label
              htmlFor="poster"
              className={`text-gray-700 cursor-pointer relative flex items-center ${
                permission === "2" ? "text-blue-500" : ""
              }`}
            >
              <div className="w-5 h-5 border border-gray-400 rounded-md mr-2 flex items-center justify-center">
                {permission === "2" && (
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                )}
              </div>
              Poster
            </label>
          </div>
        </div>
        {formErrors.permission && (
          <p className="text-sm text-red-500 mt-1">{formErrors.permission}</p>
        )}
        <div className="flex items-center mt-4">
          <button
            type="submit"
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
          >
            Register
          </button>
        </div>
      </form>
      <div className="mt-8 text-xs font-light text-center text-gray-700">
        Already have an account?{" "}
        <span>
          <Link className="text-purple-600 hover:underline" to="/login">
            Log in
          </Link>
        </span>
      </div>
    </div>
  );
};
export default RegesterForm;
