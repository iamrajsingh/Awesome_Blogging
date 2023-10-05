import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className=" padding-x py-5 z-10 w-full bg-bg-color absolute">
      <div className="flex justify-between items-center max-container">
        <Container>
          <nav className="flex">
            <div className="mr-4 ">
              <Link to="/">
                <Logo />
              </Link>
            </div>
            <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden pr-2">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      className="inline-block px-6 py-2 duration-[500] hover:bg-blue-100 hover:shadow-md rounded-full text-white font-bold text-md font-montserrat hover:text-black"
                      onClick={() => navigate(item.slug)}
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </nav>
        </Container>
      </div>
    </header>
  );
};

export default Header;
