import React from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    const result = false;

    if (result) {
      //
      navigate("/products");
    } else {
      console.log(false);
    }
  };
  return (
    <div>
      <button
        className="py-2 px-4 rounded-md bg-purple-700 text-white"
        onClick={handleSubmit}
      >
        login
      </button>
    </div>
  );
}
