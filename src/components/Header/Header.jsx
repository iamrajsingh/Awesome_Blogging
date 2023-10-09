import React, {useState} from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import menu from "../../assets/menu.svg" 
import close from "../../assets/close.svg"

const Header = () => {
  const [toggle, setToggle] = useState(false);


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
          <nav className="flex w-full">
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
                      className="inline-block px-6 active:border-1 active:border-brown py-2 duration-[500] hover:bg-blue-100 hover:shadow-md rounded-full text-white font-bold text-md font-montserrat hover:text-black"
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
        
          <div className="lg:hidden flex justify-end items-center"> 
          <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={()=> setToggle(!toggle)}/>
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-footer-color absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex flex-justify-end items-start flex-col gap-10">
            {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      className="inline-block px-6 active:border-1 active:border-brown py-2 duration-[500] hover:bg-blue-100 hover:shadow-md rounded-full text-slate-900 active:text-slate-600 font-bold text-md font-montserrat hover:text-black"
                      onClick={() => {
                        setToggle(!toggle)
                        navigate(item.slug)
                      }}
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}
              {authStatus && (
                <li className="py-2 px-3 bg-slate-200 shadow-lg rounded-3xl">
                  <LogoutBtn design="text-red-500 active:text-slate-600"/>
                </li>
              )}
        </ul>
            </div>
          </div>
      </div>
    </header>
  );
};

export default Header;
