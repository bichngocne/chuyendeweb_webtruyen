import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as apis from "../../apis";
const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({
    username: "",
    password: "",
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
  const validatePassword = () => {
    if (password.trim() === "") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        password: "Mật khẩu không được để trống",
      }));
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        password: "",
      }));
    }
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
      e.preventDefault();
    if (!Object.values(formErrors).some((error) => error !== "")) {
      try {
        const response = await apis.login(username, password);
        if (response.success === true) {
          alert("Đăng nhập thành công .");
          console.log(response.user.id_role);
          if (response.user.id_role === 1) {
            console.log(response.user.id_role); // In ra giá trị của id_role
            navigate("/reader");
          } else if (response.user.id_role === 2) {
            navigate("/management-story");
          } else if (response.user.id_role === 3){
            navigate("/admin/list-story-admin");
          }else{
            alert("hết cứu");
          }
          // Đăng nhập thành công
          setIsLoggedIn(true);
        } else {
          // Đăng nhập không thành công
          alert("Tài khoản hoặc mật khẩu không đúng !!");
        }
      } catch (error) {
        // Xử lý lỗi nếu có
        console.error("Error during login:", error.message);
      }
    }
  };
  return (
    <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-sm">
      <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
        Sign in
      </h1>
      <form className="mt-6" onSubmit={handleSubmit} method="POST">
        <div className="mb-2">
          <label
            htmlFor="Username"
            className="block text-sm font-semibold text-gray-800"
          >
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onBlur={validateUsername}
            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          {formErrors.username && (
            <p className="text-sm text-red-500 mt-1">{formErrors.username}</p>
          )}
        </div>

        <div className="mb-2">
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-gray-800"
          >
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validatePassword}
            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          {formErrors.password && (
            <p className="text-sm text-red-500 mt-1">{formErrors.password}</p>
          )}
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
          >
            Login
          </button>
        </div>
      </form>
      <p className="mt-8 text-xs font-light text-center text-gray-700">
        {" "}
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-medium text-purple-600 hover:underline"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};
export default LoginForm;
