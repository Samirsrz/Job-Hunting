import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import i18n from "i18next";

const LangProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    let lang = searchParams.get("lang");
    const storedLang = localStorage.getItem("lang");

    // If there's no lang parameter in the URL, use the stored language or default to 'en'
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

    // Set the language in local storage and change i18n language
    if (lang !== storedLang) {
      localStorage.setItem("lang", lang);
    }
    i18n.changeLanguage(lang); // Switch language dynamically
  }, [location, navigate]);

  return children;
};

export default LangProvider;
