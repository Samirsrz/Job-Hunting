import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { HiOutlineLogout } from "react-icons/hi";
import { FiLogIn } from "react-icons/fi";
import { useEffect, useState } from "react";
import Lang from "../../libs/Lang";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useSavedJobs } from "../../RTK/features/savedJobSlice";

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
    title: "About Us",
    link: "/about",
  },
];
const Navbar = () => {
  const { savedJobs } = useSavedJobs();
  const { user, logOut, loading } = useAuth();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [lang, setLang] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [loginUser, setLoginUser] = useState({});

  const axiosCommon = useAxiosCommon();

  // use theme from local storage if available or set light theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("retro");
    } else {
      setTheme("light");
    }
  };

  // set theme state in localstorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  //get user information
  useEffect(() => {
    if (!loading) {
      axiosCommon.get(`/user?email=${user?.email}`).then((res) => {
        setLoginUser(res?.data);
      });
    }
  }, [user, loading]);

  const changeLangPath = (lang) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("lang", lang);
    navigate(
      {
        pathname: location.pathname,
        search: searchParams.toString(),
      },
      { replace: true }
    );
  };

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (Lang[storedLang]) {
      setLang(storedLang);
    } else {
      setLang(Lang.EN);
    }
  }, []);

  const changeLang = () => {
    const newLang = lang === Lang.EN ? "bn" : "en";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    changeLangPath(newLang);
  };

  return (
    <div className="bg-slate-200 py-2 md:fixed z-50 w-full md:-mt-6 opacity-100 md:opacity-80">
      <div
        id="sidebar"
        className="container max-w-screen-xl m-auto navbar text-primary"
      >
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2  text-black dark:bg-gray-700 dark:text-white"
            >
              {links.map(({ title, link }, idx) => (
                <li className="dark:hover:bg-gray-500 rounded-xl" key={idx}>
                  <NavLink to={link}>{title}</NavLink>
                </li>
              ))}
              <li className="dark:hover:bg-gray-500 md:hidden">
                <NavLink
                  to="/signup"
                  className="btn btn-sm text-sm bg-white dark:bg-gray-500 dark:border-gray-400 dark:text-white"
                >
                  Join Us <FiLogIn />
                </NavLink>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="flex items-center justify-center gap-1 text-2xl font-bold"
          >
            <img
              className="rounded-full hidden md:flex"
              src="https://i.ibb.co.com/gMWTKhm/nexthire-hiring-logo.jpg"
              alt=""
            />{" "}
            Next Hire
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal space-x-3 ">
            {links.map(({ title, link }, idx) => (
              <li key={idx}>
                <NavLink className="font-semibold  text-xl mr-10 " to={link}>
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end flex items-center">
          <div className="md:mx-2 flex gap-2 md:justify-center items-center h-full">
            <div className="relative group mr-3 md:mr-0">
              <Link to="/saved-jobs">
                <button className="rounded-full hidden group-hover:inline hover:bg-white/40 py-2 px-2 text-2xl md:px-2 md:text-3xl">
                  <MdFavorite />
                </button>
              </Link>
              <button className="rounded-full group-hover:hidden  py-2 px-2 text-2xl md:px-2 md:text-3xl">
                <MdFavoriteBorder />
              </button>
              <span className="absolute right-1 top-1 bg-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                {savedJobs?.length}
              </span>
            </div>
            <button className="hidden md:flex">
              <label className="swap swap-rotate">
                <input
                  onChange={handleToggle}
                  type="checkbox"
                  className="theme-controller"
                  value="synthwave"
                />

                <svg
                  className="swap-off fill-current w-10 h-10 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                <svg
                  className="swap-on fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </button>

            <button
              onClick={changeLang}
              className="hidden md:flex mr-2 md:mr-0 px-3 rounded-full hover:bg-white/40 py-2  md:px-2 md:text-lg"
            >
              {lang === Lang.EN ? "EN" : "BN"}
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
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-4 text-black dark:bg-gray-700 dark:text-white"
                >
                  <span className="mx-4 mt-2 font-bold">
                    {user?.displayName}
                  </span>

                  {loginUser.role == "admin" && (
                    <li className="dark:hover:bg-gray-500 rounded-xl">
                      <Link to="/dashboard/adminstatictis">Dashboard</Link>
                    </li>
                  )}
                  {loginUser.role == "host" && (
                    <li className="dark:hover:bg-gray-500 rounded-xl">
                      <Link to="/dashboard/host-statistic">Dashboard</Link>
                    </li>
                  )}
                  {loginUser.role == "guest" && (
                    <li className="dark:hover:bg-gray-500 rounded-xl">
                      <Link to="/dashboard/userstatistic">Dashboard</Link>
                    </li>
                  )}

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
      </div>
    </div>
  );
};

export default Navbar;
