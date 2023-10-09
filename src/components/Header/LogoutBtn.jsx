import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

const LogoutBtn = ({design = "text-white hover:bg-blue-100 hover:shadow-lg rounded-full hover:text-black"}) => {
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
      className={`inline-block px-6 py-2 duration-[500]  ${design} font-bold text-md font-montserrat `}
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
