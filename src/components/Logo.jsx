import React from "react";

const Logo = ({ 
  className = "text-white text-3xl" }) => {
  return (
    <div className= {`font-extrabold  font-montserrat ${className}`} >
      AwesomeBlog
    </div>
  );
};

export default Logo;
