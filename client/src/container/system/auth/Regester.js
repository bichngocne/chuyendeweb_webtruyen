import React from "react";

import backgroundAnime from '../../../assets/images/background-anime.jpg'
import { RegesterForm } from "../../../components/auth";
const Regester = () => {
  return (
    <div className="min-h-screen flex items-center min-w-full justify-center bg-cover align-middle " style={{ backgroundImage: `url(${backgroundAnime})` }}>
      <RegesterForm />
    </div>
  );
};

export default Regester;
