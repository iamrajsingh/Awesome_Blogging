import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
      navigate('/');
    });
  };

  return (
    <button
      className="inline-block px-6 py-2 duration-[500] hover:bg-blue-100 hover:shadow-lg rounded-full text-white font-bold text-md font-montserrat hover:text-black"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
