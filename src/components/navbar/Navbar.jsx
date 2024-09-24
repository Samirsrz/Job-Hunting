import { Link, NavLink } from "react-router-dom";
import Login from "../../pages/Login/Login";
import useAuth from "../../hooks/useAuth";
import { CiDark, CiLight } from "react-icons/ci";
import { HiOutlineLogout } from "react-icons/hi";
import { FiLogIn } from "react-icons/fi";
import { useEffect, useState } from "react";

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
];
const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setIsDarkMode(storedTheme === "dark");

    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode);
  };

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
        </ul>
      </div>
      <div className="navbar-end flex items-center">
        <div>
          <SearchBar />
        </div>
        <div className="mx-2">
          <button
            onClick={toggleDarkMode}
            className="btn m-1 ml-0 text-3xl btn-ghost dark:hover:bg-gray-500 p-2 rounded-full"
          >
            {isDarkMode ? <CiDark /> : <CiLight />}
          </button>
        </div>
        {user ? (
          <>
            <div className="dropdown dropdown-end">
              <img
                tabIndex={0}
                role="button"
                src={user?.photoURL}
                className="w-10 lg:w-12 aspect-square object-center mr-2 md:mr-4 rounded-full ring-4 ring-sky-500 dark:ring-gray-400"
              />
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-4 bg-gradient-to-br from-green-50  dark:from-gray-700 via-pink-50 dark:via-gray-800 to-sky-50 dark:to-gray-700 dark:text-white dark:border-gray-500"
              >
                <span className="mx-4 mt-2 font-bold">{user?.displayName}</span>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <button
                  className="btn btn-sm text-xs p-0 bg-white dark:bg-gray-500 dark:border-gray-400 dark:text-white"
                  onClick={logOut}
                >
                  Logout <HiOutlineLogout />
                </button>
              </ul>
            </div>
          </>
        ) : (
          <div className="hidden md:flex gap-2">
            <NavLink
              to="/signup"
              className="btn bg-white dark:bg-gray-500 dark:border-gray-400 dark:text-white"
            >
              Join Us <FiLogIn />
            </NavLink>
          </div>
        )}
      </div>
      <Login></Login>
    </div>
  );
};

export default Navbar;
