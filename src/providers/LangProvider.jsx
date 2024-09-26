import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const LangProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    let lang = searchParams.get("lang");
    const storedLang = localStorage.getItem("lang");

    if (!lang) {
      lang = storedLang || "en";
      searchParams.set("lang", lang);
      navigate(
        {
          pathname: location.pathname,
          search: searchParams.toString(),
        },
        { replace: true }
      );
    }
  }, [location, navigate]);

  return children;
};

export default LangProvider;
