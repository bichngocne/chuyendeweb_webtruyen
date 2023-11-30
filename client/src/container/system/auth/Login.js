import React from "react";

import backgroundAnime from '../../../assets/images/background-anime.jpg'
import { LoginForm } from "../../../components/auth";
const Login = () => {
  return (
    <div className="min-h-screen flex items-center min-w-full justify-center bg-cover align-middle " style={{ backgroundImage: `url(${backgroundAnime})` }}>
      <LoginForm />
    </div>
  );
};

export default Login;
