import { useEffect, useRef, useState } from "react";
import logo from "../assets/images/logo.svg";
import routeTrade from "../assets/icons/route-trade.svg";
import routePortfolio from "../assets/icons/route-portfolio.svg";
import routeSignals from "../assets/icons/route-signals.svg";
import routeCopyTrade from "../assets/icons/route-copy-trade.svg";
import routeReferral from "../assets/icons/route-referral.svg";
import routeApi from "../assets/icons/route-api.svg";
import languageIcon from "../assets/icons/language.svg";
import { localeOptions } from "../content/homeLocales.js";
import "./Header.css";

const assets = {
  logo,
  trade: routeTrade,
  portfolio: routePortfolio,
  signals: routeSignals,
  copyTrade: routeCopyTrade,
  referral: routeReferral,
  api: routeApi,
  language: languageIcon,
};

const navItems = [
  {
    key: "trade",
    icon: assets.trade,
    className: "otx-nav-trade",
    active: false,
    href: "https://app.ortradex.com/trade",
  },
  { key: "portfolio", icon: assets.portfolio, href: "https://app.ortradex.com/portfolio" },
  { key: "signals", icon: assets.signals, href: "https://app.ortradex.com/signals" },
  { key: "copyTrade", icon: assets.copyTrade, href: "https://app.ortradex.com/copy-trade" },
  { key: "referral", icon: assets.referral, href: "https://app.ortradex.com/referral" },
  { key: "apiManagement", icon: assets.api, href: "https://app.ortradex.com/api-management" },
];

const APP_URL = "https://app.ortradex.com/";

function Header({ copy, selectedLocale, onSelectLocale }) {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const languageMenuRef = useRef(null);

  useEffect(() => {
    if (!isLanguageMenuOpen) return undefined;

    const handlePointerDown = (event) => {
      if (languageMenuRef.current?.contains(event.target)) return;
      setIsLanguageMenuOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, [isLanguageMenuOpen]);

  const handleGoToApp = () => {
    if (typeof window === "undefined") return;
    window.open(APP_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <header className="otx-header otx-header--home">
      <div className="otx-header-left">
        <a href="/" className="otx-logo" aria-label={copy.ui.goHome}>
          <img className="otx-logo-img" src={assets.logo} alt="OrTradeX" />
        </a>

        <nav className="otx-nav" aria-label={copy.ui.primaryNav}>
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${item.className ?? ""} otx-nav-item${item.active ? " is-active" : ""}`}
            >
              <span className="otx-nav-icon" aria-hidden="true">
                <img src={item.icon} alt="" />
              </span>
              <span>{copy.nav[item.key]}</span>
            </a>
          ))}
        </nav>
      </div>

      <div className="otx-header-right">
        <div className="otx-language-menu" ref={languageMenuRef}>
          <button
            className={`otx-icon-btn otx-language-trigger${isLanguageMenuOpen ? " is-open" : ""}`}
            type="button"
            aria-label={copy.ui.selectLanguage}
            aria-expanded={isLanguageMenuOpen}
            aria-haspopup="menu"
            onClick={() => setIsLanguageMenuOpen((prevValue) => !prevValue)}
          >
            <img src={assets.language} alt="" />
            <span className="otx-language-code">{selectedLocale.shortLabel}</span>
          </button>

          {isLanguageMenuOpen ? (
            <div className="otx-language-dropdown" role="menu" aria-label={copy.ui.languageOptions}>
              {localeOptions.map((locale) => (
                <button
                  key={locale.code}
                  className={`otx-language-option${locale.code === selectedLocale.code ? " is-selected" : ""}`}
                  type="button"
                  role="menuitemradio"
                  aria-checked={locale.code === selectedLocale.code}
                  onClick={() => {
                    setIsLanguageMenuOpen(false);
                    onSelectLocale(locale);
                  }}
                >
                  <span className="otx-language-option-copy">
                    <span className="otx-language-option-native">{locale.nativeLabel}</span>
                    <span className="otx-language-option-label">{locale.label}</span>
                  </span>
                  <span className="otx-language-option-code">{locale.shortLabel}</span>
                </button>
              ))}
            </div>
          ) : null}
        </div>
        <button className="otx-wallet-btn" type="button" onClick={handleGoToApp}>
          <span>{copy.ui.getStarted}</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
