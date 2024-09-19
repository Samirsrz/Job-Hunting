import { NavLink } from "react-router-dom";
import Login from "../../pages/Login/Login";

const SearchBar = () => (
  <button className="py-2 px-2 md:px-4 rounded-full bg-white/20 hover:bg-white/40 hover:scale-105 md:rounded-md font-semibold">
    <span className="hidden md:inline md:mr-1">Search now</span>🔍
  </button>
);
const links = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Jobs",
    link: "/jobs",
  },
  {
    title: "Categories",
    link: "/categories",
  },
  {
    title: "Employers",
    link: "/employers",
  },
  {
    title: "About Us",
    link: "/about",
  },
  {
    title: "Sign Up",
    link: "/signup",
  },
];
const Navbar = () => {
  return (
    <div id="sidebar" className="navbar bg-primary text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
          >
            {links.map(({ title, link }, idx) => (
              <li key={idx}>
                <NavLink to={link}>{title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-semibold">Job Hunting</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links.map(({ title, link }, idx) => (
            <li key={idx}>
              <NavLink to={link}>{title}</NavLink>
            </li>
          ))}

          {/* login btn  */}
          <button
            className=""
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Sign In
          </button>
          {/* end login btn */}
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <div>
          <SearchBar />
        </div>
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>

      <Login></Login>
    </div>
  );
};

export default Navbar;
