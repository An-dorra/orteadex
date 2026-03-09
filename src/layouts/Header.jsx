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
  { label: "Trade", icon: assets.trade, className: "otx-nav-trade", active: false },
  { label: "Portfolio", icon: assets.portfolio },
  { label: "Signals", icon: assets.signals },
  { label: "Copy Trade", icon: assets.copyTrade },
  { label: "Referral", icon: assets.referral },
  { label: "API Management", icon: assets.api },
];

function Header() {
  return (
    <header className="otx-header otx-header--home">
      <div className="otx-header-left">
        <a href="/" className="otx-logo" aria-label="Go Home">
          <img className="otx-logo-img" src={assets.logo} alt="OrTradeX" />
        </a>

        <nav className="otx-nav" aria-label="Primary">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              className={`${item.className ?? ""} otx-nav-item${item.active ? " is-active" : ""}`}
            >
              <span className="otx-nav-icon" aria-hidden="true">
                <img src={item.icon} alt="" />
              </span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="otx-header-right">
        <button className="otx-icon-btn" type="button" aria-label="Language">
          <img src={assets.language} alt="" />
        </button>
      </div>
    </header>
  );
}

export default Header;
