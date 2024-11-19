import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedOut } from "@/redux/features/auth/authSlice";
import { useTranslation } from "react-i18next";

// language
function Language({ active, handleActive }) {
  const { i18n } = useTranslation();
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState(router.locale || "en");

  useEffect(() => {
    // Kiểm tra ngôn ngữ lưu trong localStorage
    const savedLanguage = localStorage.getItem("language") || "en";
    if (savedLanguage !== currentLang) {
      i18n.changeLanguage(savedLanguage);
      setCurrentLang(savedLanguage);
      router.push(router.pathname, router.asPath, { locale: savedLanguage });
    }
  }, [currentLang, i18n, router]);

  const changeLanguage = (lang) => {
    if (lang !== currentLang) {
      i18n.changeLanguage(lang);
      localStorage.setItem("language", lang);
      setCurrentLang(lang);
      router.push(router.pathname, router.asPath, { locale: lang });
    }
  };

  return (
    <div className="tp-header-top-menu-item tp-header-lang">
      <span
        onClick={() => handleActive("lang")}
        className="tp-header-lang-toggle"
        id="tp-header-lang-toggle"
      >
        {currentLang === "en" ? "English" : "Vietnamese"}
      </span>
      <ul className={active === "lang" ? "tp-lang-list-open" : ""}>
        <li onClick={() => changeLanguage("vi")}>
          <a className={currentLang === "vi" ? "active" : ""}>Vietnamese</a>
        </li>
        <li onClick={() => changeLanguage("en")}>
          <a className={currentLang === "en" ? "active" : ""}>English</a>
        </li>
      </ul>
    </div>
  );
}
// currency
function Currency({ active, handleActive }) {
  return (
    <div className="tp-header-top-menu-item tp-header-currency">
      <span
        onClick={() => handleActive("currency")}
        className="tp-header-currency-toggle"
        id="tp-header-currency-toggle"
      >
        USD
      </span>
      <ul className={active === "currency" ? "tp-currency-list-open" : ""}>
        <li>
          <a href="#">USD</a>
        </li>
        <li>
          <a href="#">VND</a>
        </li>
      </ul>
    </div>
  );
}

// setting
function ProfileSetting({ active, handleActive }) {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  const { t } = useTranslation();
  // handle logout
  const handleLogout = () => {
    dispatch(userLoggedOut());
    router.push("/");
  };
  return (
    <div className="tp-header-top-menu-item tp-header-setting">
      <span
        onClick={() => handleActive("setting")}
        className="tp-header-setting-toggle"
        id="tp-header-setting-toggle"
      >
        {t("setting.setting")}
      </span>
      <ul className={active === "setting" ? "tp-setting-list-open" : ""}>
        {user?.name ? (
          <>
            <li>
              <a onClick={handleLogout} className="cursor-pointer">
                {t("setting.logout")}
              </a>
            </li>
            <li>
              <Link href="/profile">{t("setting.profile")}</Link>
            </li>
          </>
        ) : (
          <Link href="/login" className="cursor-pointer">
            {t("setting.login")}
          </Link>
        )}
      </ul>
    </div>
  );
}

const HeaderTopRight = () => {
  const [active, setIsActive] = useState("");
  // handle active
  const handleActive = (type) => {
    if (type === active) {
      setIsActive("");
    } else {
      setIsActive(type);
    }
  };
  return (
    <div className="tp-header-top-menu d-flex align-items-center justify-content-end">
      <Language active={active} handleActive={handleActive} />
      <Currency active={active} handleActive={handleActive} />
      <ProfileSetting active={active} handleActive={handleActive} />
    </div>
  );
};

export default HeaderTopRight;
