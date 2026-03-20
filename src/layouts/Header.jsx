import logo from "../assets/images/logo.svg";
import routeTrade from "../assets/icons/route-trade.svg";
import routePortfolio from "../assets/icons/route-portfolio.svg";
import routeSignals from "../assets/icons/route-signals.svg";
import routeCopyTrade from "../assets/icons/route-copy-trade.svg";
import routeReferral from "../assets/icons/route-referral.svg";
import routeApi from "../assets/icons/route-api.svg";
import languageIcon from "../assets/icons/language.svg";
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
    label: "Trade",
    icon: assets.trade,
    className: "otx-nav-trade",
    active: false,
    href: "https://app.ortradex.com/trade",
  },
  { label: "Portfolio", icon: assets.portfolio, href: "https://app.ortradex.com/portfolio" },
  { label: "Signals", icon: assets.signals, href: "https://app.ortradex.com/signals" },
  { label: "Copy Trade", icon: assets.copyTrade, href: "https://app.ortradex.com/copy-trade" },
  { label: "Referral", icon: assets.referral, href: "https://app.ortradex.com/referral" },
  { label: "API Management", icon: assets.api, href: "https://app.ortradex.com/api-management" },
];

const APP_URL = "https://app.ortradex.com/";

function Header() {
  const handleGoToApp = () => {
    if (typeof window === "undefined") return;
    window.open(APP_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <header className="otx-header otx-header--home">
      <div className="otx-header-left">
        <a href="/" className="otx-logo" aria-label="Go Home">
          <img className="otx-logo-img" src={assets.logo} alt="OrTradeX" />
        </a>

        <nav className="otx-nav" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${item.className ?? ""} otx-nav-item${item.active ? " is-active" : ""}`}
            >
              <span className="otx-nav-icon" aria-hidden="true">
                <img src={item.icon} alt="" />
              </span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      <div className="otx-header-right">
        <button className="otx-icon-btn" type="button" aria-label="Language">
          <img src={assets.language} alt="" />
        </button>
        <button className="otx-wallet-btn" type="button" onClick={handleGoToApp}>
          <span>Get Started</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
