import logo from "../assets/images/logo.svg";
import navTrade from "../assets/icons/nav-trade.svg";
import navPortfolio from "../assets/icons/nav-portfolio.svg";
import navSignals from "../assets/icons/nav-signals.svg";
import navCopyTrade from "../assets/icons/nav-copy-trade.svg";
import navReferral from "../assets/icons/nav-referral.svg";
import navApi from "../assets/home/icons/header_api_fill.svg";
import languageIcon from "../assets/icons/language.svg";
import "./Header.css";

const assets = {
  logo,
  trade: navTrade,
  portfolio: navPortfolio,
  signals: navSignals,
  copyTrade: navCopyTrade,
  referral: navReferral,
  api: navApi,
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
