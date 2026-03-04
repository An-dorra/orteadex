import React, { useEffect, useRef, useState } from "react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import builtCurveBg from "../assets/home/images/built_curve_bg.svg";
import builtLogoCircle from "../assets/home/images/built_logo_circle.svg";
import builtLogoShape from "../assets/home/images/built_logo_shape.svg";
import builtRotateBg from "../assets/home/images/built_rotate_bg.svg";
import builtTagGlobe from "../assets/home/images/built_tag_globe.svg";
import builtTagX from "../assets/home/images/built_tag_x.svg";
import aiSlide1Fade from "../assets/home/images/ai_slide_1_fade.png";
import aiSlide1Panel from "../assets/home/images/ai_slide_1_panel.png";
import aiSlide2Fade from "../assets/home/images/ai_slide_2_fade.png";
import aiSlide2Panel from "../assets/home/images/ai_slide_2_panel.png";
import aiSlide3Fade from "../assets/home/images/ai_slide_3_fade.png";
import aiSlide3Panel from "../assets/home/images/ai_slide_3_panel.png";
import aiSlide4Fade from "../assets/home/images/ai_slide_4_fade.png";
import aiSlide4Panel from "../assets/home/images/ai_slide_4_panel.png";
import ctaArcMain from "../assets/home/images/cta_arc_main.svg";
import ctaDot from "../assets/home/images/cta_dot.svg";
import ctaLeftGroup from "../assets/home/images/cta_left_group.svg";
import ctaRightGroup from "../assets/home/images/cta_right_group.svg";
import footerLogo from "../assets/home/images/footer_logo.svg";
import footerSocialBg from "../assets/home/images/footer_social_bg.svg";
import footerSocialPath from "../assets/home/images/footer_social_path.svg";
import footerSocialX from "../assets/home/images/footer_social_x.svg";
import pcLogo from "../assets/images/logo.svg";
import hero3dIcon from "../assets/home/images/hero_3d_icon.png";
import heroAndroidIcon from "../assets/home/images/hero_android_icon.svg";
import heroGlowShape from "../assets/home/images/hero_glow_shape.svg";
import heroIosIcon from "../assets/home/images/hero_ios_icon.png";
import heroJimengMask from "../assets/home/images/hero_jimeng_mask.svg";
import heroJimengOverlay from "../assets/home/images/hero_jimeng_overlay.png";
import heroParticle from "../assets/home/images/hero_particle.png";
import heroRing from "../assets/home/images/hero_ring.svg";
import heroShadowEllipse from "../assets/home/images/hero_shadow_ellipse.svg";
import partnerBinance from "../assets/home/images/partner_binance.png";
import partnerChainlink from "../assets/home/images/partner_chainlink.svg";
import partnerMetamask from "../assets/home/images/partner_metamask.png";
import partnerOkx from "../assets/home/images/partner_okx.png";
import partnerOrtradex from "../assets/home/images/partner_ortradex.svg";
import languageIcon from "../assets/icons/language.svg";
import mobileHeroGlow from "../assets/home/mobile/hero_glow_mobile.svg";
import mobileHeroRing from "../assets/home/mobile/hero_ring_mobile.svg";
import mobileHeroShadow from "../assets/home/mobile/hero_shadow_mobile.svg";
import mobilePartnerBinance from "../assets/home/mobile/partners/partner_binance_mobile.png";
import mobilePartnerChainlink from "../assets/home/mobile/partners/partner_chainlink_mobile.png";
import mobilePartnerMetamask from "../assets/home/mobile/partners/partner_metamask_mobile.png";
import mobilePartnerOkx from "../assets/home/mobile/partners/partner_okx_mobile.png";
import mobilePartnerOrigins from "../assets/home/mobile/partners/partner_origins_mobile.png";
import mobileBuiltArtSingle from "../assets/home/mobile/built_art_single.png";
import mobileNavMenu from "../assets/home/mobile/nav_menu.svg";
import tradeAndroidIcon from "../assets/home/images/trade_android_icon.svg";
import tradeBall from "../assets/home/images/trade_ball.svg";
import tradeBeam from "../assets/home/images/trade_beam.svg";
import tradeCheck1 from "../assets/home/images/trade_check1.svg";
import tradeCheck2 from "../assets/home/images/trade_check2.svg";
import tradeCheck3 from "../assets/home/images/trade_check3.svg";
import tradeCheck4 from "../assets/home/images/trade_check4.svg";
import tradeFloorGlow from "../assets/home/images/trade_floor_glow.svg";
import tradeIosIcon from "../assets/home/images/trade_ios_icon.png";
import tradePhonePhoto from "../assets/home/images/trade_phone_photo.png";
import tradePhoneScreenFill from "../assets/home/images/trade_phone_screen_fill.png";
import tradeRingGlow from "../assets/home/images/trade_ring_glow.svg";
import tradeRingGlowM from "../assets/home/mobile/m-iphone.png";
import whyCardGlow from "../assets/home/images/why_card_glow.svg";
import whyClip1 from "../assets/home/images/why_clip_1.svg";
import whyClip2 from "../assets/home/images/why_clip_2.svg";
import whyBackEcoIcon from "../assets/home/images/why_back_eco_icon.svg";
import whyBackSignalIcon from "../assets/home/images/why_back_signal_icon.svg";
import whyBackStackLine from "../assets/home/images/why_back_stack_line.svg";
import whyBackTransparentIcon from "../assets/home/images/why_back_transparent_icon.svg";
import whyEcoIcon from "../assets/home/images/why_eco_icon.svg";
import whyIconX from "../assets/home/images/why_icon_x.svg";
import whyFrontSignalGridH from "../assets/home/images/why_front_signal_grid_h.svg";
import whyFrontSignalGridV from "../assets/home/images/why_front_signal_grid_v.svg";
import whyFrontSignalWifi from "../assets/home/images/why_front_signal_wifi.png";
import whyPlanetBg from "../assets/home/images/why_planet_bg.svg";
import whyShape1 from "../assets/home/images/why_shape_1.svg";
import whyShape2 from "../assets/home/images/why_shape_2.svg";
import whyStack1 from "../assets/home/images/why_stack_1.svg";
import whyStack2 from "../assets/home/images/why_stack_2.svg";
import whyStackIcon from "../assets/home/images/why_stack_icon.svg";
import whyTopLine from "../assets/home/images/why_top_line.svg";
import "swiper/css";
import "swiper/css/effect-fade";
import "./HomePage.css";

const heroStats = [
  { value: "$ 4.14T", label: "Total Trading Volume" },
  { value: "9.24M", label: "Users" },
  { value: "1.85B", label: "Open Interest" },
  { value: "$ 1.11bB", label: "TVL" },
  { value: "181", label: "Symbols" },
];

const rotatingPhrases = [
  "AI-Powered Signals",
  "Structured Alpha",
  "Conviction-Based Trades",
  "Data-Driven Direction",
  "Signal-Based Strategies",
  "Market Intelligence",
];

const tradeFeatures = [
  { icon: tradeCheck1, label: "Real-Time Signal Access" },
  { icon: tradeCheck2, label: "Instant Execution" },
  { icon: tradeCheck3, label: "Strategy Monitoring" },
  { icon: tradeCheck4, label: "Full Risk Control" },
];

const partnerLogos = [
  { icon: partnerBinance, label: "Binance Wallet", iconClass: "is-binance" },
  { icon: partnerChainlink, label: "CHAINLINK", iconClass: "is-chainlink" },
  { icon: partnerOkx, label: "OKX Wallet", iconClass: "is-okx" },
  { icon: partnerMetamask, label: "Metamask", iconClass: "is-metamask" },
  { icon: partnerOrtradex, label: "OrTradeX", iconClass: "is-ortradex" },
];

const mobilePartnerLogos = [
  { icon: mobilePartnerBinance, label: "Binance Wallet", iconClass: "is-binance" },
  { icon: mobilePartnerChainlink, label: "CHAINLINK", iconClass: "is-chainlink" },
  { icon: mobilePartnerOkx, label: "OKX Wallet", iconClass: "is-okx" },
  { icon: mobilePartnerMetamask, label: "Metamask", iconClass: "is-metamask" },
  { icon: mobilePartnerOrigins, label: "OrTradeX", iconClass: "is-ortradex" },
];

const ctaDots = [];

const aiFeatureSlides = [
  {
    title: "Full Execution Control",
    subtitle: "You remain in control at every step.",
    panel: aiSlide1Panel,
    fade: aiSlide1Fade,
  },
  {
    title: "AI Signal Engine",
    subtitle: "Real-time AI-generated trading signals.",
    panel: aiSlide2Panel,
    fade: aiSlide2Fade,
  },
  {
    title: "Automated Strategy Deployment",
    subtitle: "Turn signals into automated execution.",
    panel: aiSlide3Panel,
    fade: aiSlide3Fade,
  },
  {
    title: "Native Copy Trading",
    subtitle: "Follow proven strategies with one click.",
    panel: aiSlide4Panel,
    fade: aiSlide4Fade,
  },
];

const mobileWhyCards = [
  {
    key: "signal",
    title: "Signal-Native\nArchitecture",
    className: "m-why-card-signal",
    icon: whyFrontSignalWifi,
    backTitle: "Signal-Native Architecture",
    backDescription:
      "OrtradeX is built around signals,\nnot just order books.\nEvery trade begins with structured alpha,\nnot manual guessing.",
    backIcon: whyBackSignalIcon,
  },
  {
    key: "stack",
    title: "Integrated\nTrading Stack",
    className: "m-why-card-stack",
    icon: whyStackIcon,
    backTitle: "Integrated Trading Stack",
    backDescription:
      "Signals, automation, execution,\nand copying exist in one unified system.\nNo external bots.\nNo fragmented tools.\nNo workflow friction.",
    useStackLines: true,
  },
  {
    key: "ecosystem",
    title: "Ecosystem -Aligned\nInfrastructure",
    className: "m-why-card-ecosystem",
    icon: whyEcoIcon,
    backTitle: "Ecosystem-Aligned Infrastructure",
    backDescription:
      "Designed within the Origins ecosystem,\nwith node-supported execution routing\nand network-native participation.\nBuilt as infrastructure,\nnot just an app.",
    backIcon: whyBackEcoIcon,
  },
  {
    key: "transparent",
    title: "Transparent by\nDesign",
    className: "m-why-card-transparent",
    icon: whyIconX,
    backTitle: "Transparent by Design",
    backDescription:
      "Clear risk parameters.\nVisible performance history.\nNon-custodial execution.\nConfidence comes from structure,\nnot marketing.",
    backIcon: whyBackTransparentIcon,
  },
];

function DesktopHomePage() {
  const itemHeight = 68;
  const displayPhrases = [...rotatingPhrases, ...rotatingPhrases, ...rotatingPhrases];
  const [index, setIndex] = useState(rotatingPhrases.length);
  const [noTransition, setNoTransition] = useState(false);
  const [activeAiIndex, setActiveAiIndex] = useState(0);
  const timerRef = useRef(null);
  const aiSwiperRef = useRef(null);
  const aiSlidesCount = aiFeatureSlides.length;

  const normalizeAiIndex = (value) => {
    if (!aiSlidesCount) return 0;
    const numeric = Number.isFinite(value) ? Math.trunc(value) : 0;
    return ((numeric % aiSlidesCount) + aiSlidesCount) % aiSlidesCount;
  };

  const handleAiSlideChange = (swiper) => {
    setActiveAiIndex(normalizeAiIndex(swiper?.realIndex));
  };

  const activeAiSlide = aiFeatureSlides[normalizeAiIndex(activeAiIndex)] ?? aiFeatureSlides[0];

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setNoTransition(false);
      setIndex((prev) => prev + 1);
    }, 2200);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);


  const handleTransitionEnd = () => {
    if (index >= rotatingPhrases.length * 2) {
      setNoTransition(true);
      setIndex(rotatingPhrases.length);
      requestAnimationFrame(() => setNoTransition(false));
    }
  };

  return (
    <div className="home-page">
      <div className="home-stage-wrap">
        <main className="home-stage">
        <section className="home-hero">
          <div className="hero-mask-outer">
            <div
              className="hero-mask-inner"
              style={{
                WebkitMaskImage: `url(${heroJimengMask})`,
                maskImage: `url(${heroJimengMask})`,
              }}
            >
              <img src={heroJimengOverlay} alt="" />
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-particle-wrap">
              <div className="hero-particle-rotor">
                <img className="hero-particle" src={heroParticle} alt="" />
              </div>
            </div>
            <img className="hero-ring-bg" src={heroRing} alt="" />
            <img className="hero-capsule-glow" src={heroGlowShape} alt="" />
            <img className="hero-platform-shadow" src={heroShadowEllipse} alt="" />
            <div className="hero-main-icon">
              <img src={hero3dIcon} alt="" />
            </div>
          </div>

          <h1 className="hero-title">
            A New Way to Trade{" "}
            <span className="hero-rotator">
              <span
                className="hero-rotator-track"
                style={{
                  transform: `translateY(-${index * itemHeight}px)`,
                  transition: noTransition ? "none" : "transform 500ms ease",
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {displayPhrases.map((text, phraseIndex) => (
                  <span key={`${text}-${phraseIndex}`} className="hero-rotator-item">
                    {text}
                  </span>
                ))}
              </span>
            </span>
          </h1>
          <p className="hero-subtitle">AI-powered. Copy-enabled.  Non-custodial.</p>
          <p className="hero-description">
            Deploy automated trading bots, follow proven strategies, and keep full control over every
            execution.
          </p>

          <div className="hero-actions">
            <button type="button" className="hero-btn hero-btn-primary">
              Launch App
            </button>
            <button type="button" className="hero-btn hero-btn-secondary">
              Download App
            </button>
            <button type="button" className="hero-icon-btn" aria-label="iOS">
              <img src={heroIosIcon} alt="" />
            </button>
            <button type="button" className="hero-icon-btn" aria-label="Android">
              <img src={heroAndroidIcon} alt="" />
            </button>
          </div>

          <div className="hero-stats">
            {heroStats.map((item) => (
              <div key={item.label} className="hero-stat">
                <p className="hero-stat-value">{item.value}</p>
                <p className="hero-stat-label">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="home-ai">
          <div className="ai-sticky">
            <div className="ai-copy">
              <h2 className={`section-title-gradient${activeAiIndex >= 2 ? " is-small" : ""}`}>
                {activeAiSlide.title}
              </h2>
              <p className="section-subtitle">{activeAiSlide.subtitle}</p>
            </div>

            <div className="ai-shell">
              <div className="ai-shell-stage">
                <div className="ai-shell-glow" />
                <div className="ai-shell-core">
                  <div className="ai-shell-screen">
                    <Swiper
                      modules={[Autoplay, EffectFade]}
                      className="ai-swiper"
                      effect="fade"
                      fadeEffect={{ crossFade: true }}
                      speed={700}
                      loop
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                      }}
                      onSwiper={(swiper) => {
                        aiSwiperRef.current = swiper;
                        handleAiSlideChange(swiper);
                      }}
                      onSlideChange={handleAiSlideChange}
                    >
                      {aiFeatureSlides.map((slide, slideIndex) => (
                        <SwiperSlide key={`ai-slide-${slideIndex}`} className="ai-shell-slide">
                          <img className="ai-shell-bg" src={slide.panel} alt="" />
                          <img className="ai-shell-fade" src={slide.fade} alt="" />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>

            <div className="ai-indicators" aria-label="AI slides">
              {aiFeatureSlides.map((slide, slideIndex) => (
                <button
                  key={`ai-indicator-${slideIndex}`}
                  type="button"
                  className={`ai-indicator${activeAiIndex === slideIndex ? " is-active" : ""}`}
                  aria-label={`Go to slide ${slideIndex + 1}`}
                  aria-current={activeAiIndex === slideIndex ? "true" : "false"}
                  onClick={() => {
                    if (!aiSwiperRef.current) return;
                    aiSwiperRef.current.slideToLoop(slideIndex);
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="home-built">
          <h2 className="section-title-gradient">Built for Origins Ecosystem</h2>
          <p className="section-subtitle">Built on structure, not speculation.</p>

          <div className="built-art">
            <img className="built-bg-1" src={builtCurveBg} alt="" />
            <img className="built-bg-2" src={builtRotateBg} alt="" />
            <img className="built-logo-circle" src={builtLogoCircle} alt="" />
            <img className="built-logo-shape" src={builtLogoShape} alt="" />
          </div>

          <div className="built-copy">
            <p className="built-main">
              OrTradeX is designed as a financial layer inside the Origins ecosystem.
            </p>
            <div className="built-list-wrap">
              <p>Node operators provide infrastructure support, enabling:</p>
              <ul>
                <li>Stable execution routing</li>
                <li>Network-level support</li>
                <li>Ecosystem-native liquidity</li>
                <li>Governance participation</li>
              </ul>
            </div>

            <div className="built-tags">
              <a
                href="https://originspro.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Origins Pro"
              >
                <img src={builtTagGlobe} alt="" />
              </a>
              <a
                href="https://x.com/OriginsNetwork_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Origins Network on X"
              >
                <img src={builtTagX} alt="" />
              </a>
            </div>
          </div>
        </section>

        <section className="home-why">
          <h2 className="section-title-gradient">Why OrTradeX</h2>
          <p className="section-subtitle">Powered by the Origins Network</p>

          <div className="why-cards">
            <article className="why-card why-card-signal">
              <div className="why-card-flip">
                <div className="why-card-face why-card-face-front">
                  <img className="why-card-glow" src={whyCardGlow} alt="" />
                  <img className="why-top-line" src={whyTopLine} alt="" />
                  <div className="why-signal-grid-v">
                    <img src={whyFrontSignalGridV} alt="" />
                  </div>
                  <div className="why-signal-grid-h-wrap">
                    <div className="why-signal-grid-h-rotor">
                      <img src={whyFrontSignalGridH} alt="" />
                    </div>
                  </div>
                  <span className="why-signal-grid-block why-signal-grid-block-top" />
                  <span className="why-signal-grid-block why-signal-grid-block-left" />
                  <span className="why-signal-grid-block why-signal-grid-block-right" />
                  <img className="why-front-icon why-front-icon-signal-shadow" src={whyFrontSignalWifi} alt="" />
                  <img className="why-front-icon why-front-icon-signal-main" src={whyFrontSignalWifi} alt="" />
                  <h3 className="why-front-title why-front-title-signal">
                    Signal-Native
                    <br />
                    Architecture
                  </h3>
                </div>

                <div className="why-card-face why-card-face-back">
                  <div className="why-back-icon-box">
                    <img src={whyBackSignalIcon} alt="" />
                  </div>
                  <h4>Signal-Native Architecture</h4>
                  <p>
                    OrtradeX is built around signals
                    <br />
                    — not just order books.
                    <br />
                    Every trade begins with
                    <br />
                    structured alpha, not manual
                    <br />
                    guessing.
                  </p>
                </div>
              </div>
            </article>

            <article className="why-card why-card-stack">
              <div className="why-card-flip">
                <div className="why-card-face why-card-face-front">
                  <img className="why-card-glow" src={whyCardGlow} alt="" />
                  <img className="why-stack-shape-1" src={whyStack1} alt="" />
                  <img className="why-stack-shape-2" src={whyStack2} alt="" />
                  <img className="why-stack-clip-1" src={whyClip1} alt="" />
                  <img className="why-stack-clip-2" src={whyClip2} alt="" />
                  <img className="why-stack-icon" src={whyStackIcon} alt="" />
                  <img className="why-top-line" src={whyTopLine} alt="" />
                  <h3 className="why-front-title why-front-title-stack">
                    Integrated
                    <br />
                    Trading Stack
                  </h3>
                </div>

                <div className="why-card-face why-card-face-back">
                  <div className="why-back-icon-box">
                    <span className="why-back-stack-lines">
                      <img src={whyBackStackLine} alt="" />
                      <img src={whyBackStackLine} alt="" />
                      <img src={whyBackStackLine} alt="" />
                    </span>
                  </div>
                  <h4>Integrated Trading Stack</h4>
                  <p>
                    Signals, automation, execution,
                    <br />
                    and copying exist in one unified
                    <br />
                    system.
                    <br />
                    No external bots.
                    <br />
                    No fragmented tools.
                    <br />
                    No workflow friction.
                  </p>
                </div>
              </div>
            </article>

            <article className="why-card why-card-ecosystem">
              <div className="why-card-flip">
                <div className="why-card-face why-card-face-front">
                  <img className="why-card-glow" src={whyCardGlow} alt="" />
                  <img className="why-planet-bg" src={whyPlanetBg} alt="" />
                  <img className="why-eco-icon" src={whyEcoIcon} alt="" />
                  <img className="why-top-line" src={whyTopLine} alt="" />
                  <h3 className="why-front-title why-front-title-eco">
                    Ecosystem
                    <br />
                    -Aligned
                    <br />
                    Infrastructure
                  </h3>
                </div>

                <div className="why-card-face why-card-face-back">
                  <div className="why-back-icon-box">
                    <img src={whyBackEcoIcon} alt="" />
                  </div>
                  <h4>Ecosystem-Aligned Infrastructure</h4>
                  <p>
                    Designed within the Origins
                    <br />
                    ecosystem,with node-supported
                    <br />
                    execution routing and network-
                    <br />
                    native participation.
                    <br />
                    Built as infrastructure — not just
                    <br />
                    an app.
                  </p>
                </div>
              </div>
            </article>

            <article className="why-card why-card-transparent">
              <div className="why-card-flip">
                <div className="why-card-face why-card-face-front">
                  <img className="why-card-glow" src={whyCardGlow} alt="" />
                  <img className="why-shape-1" src={whyShape1} alt="" />
                  <img className="why-shape-2" src={whyShape2} alt="" />
                  <img className="why-key-icon" src={whyIconX} alt="" />
                  <img className="why-top-line" src={whyTopLine} alt="" />
                  <h3 className="why-front-title why-front-title-transparent">
                    Transparent
                    <br />
                    by Design
                  </h3>
                </div>

                <div className="why-card-face why-card-face-back">
                  <div className="why-back-icon-box">
                    <img src={whyBackTransparentIcon} alt="" />
                  </div>
                  <h4>Transparent by Design</h4>
                  <p>
                    Clear risk parameters.
                    <br />
                    Visible performance history.
                    <br />
                    Non-custodial execution.
                    <br />
                    Confidence comes from
                    <br />
                    structure, not marketing.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="home-trade-anywhere">
          <h2 className="section-title-gradient">Trade Anywhere. Stay in Control.</h2>
          <p className="section-subtitle">
            OrTradeX brings signal-driven perpetual trading to your fingertips.
          </p>
          <p className="trade-anywhere-desc">
            Monitor AI signals, activate strategies, and manage positions in real time, wherever you
            are.
          </p>

          <ul className="trade-feature-list">
            {tradeFeatures.map((item) => (
              <li key={item.label}>
                <img src={item.icon} alt="" />
                {item.label}
              </li>
            ))}
          </ul>

          <div className="trade-anywhere-actions">
            <button type="button">Get Started</button>
            <span>
              <img src={tradeIosIcon} alt="" />
            </span>
            <span>
              <img src={tradeAndroidIcon} alt="" />
            </span>
          </div>

          <div className="trade-phone-art">
            <img className="trade-glow-ring" src={tradeRingGlow} alt="" />
            <div className="trade-floor">
              <img src={tradeFloorGlow} alt="" />
            </div>
            <img className="trade-sphere" src={tradeBall} alt="" />
            <div className="trade-phone-beam-wrap">
              <div className="trade-phone-rotor">
                <img className="trade-phone-beam" src={tradeBeam} alt="" />
              </div>
            </div>
            <div className="trade-phone-wrap">
              <div className="trade-phone-rotor trade-phone-rotor--phone">
                {/* <img className="trade-phone-screen" src={tradePhoneScreenFill} alt="" /> */}
                <img className="trade-phone" src={tradePhonePhoto} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="home-partner">
          <div className="partner-row">
            <div className="partner-track">
              <div className="partner-group">
                {partnerLogos.map((item) => (
                  <div key={`${item.label}-a`} className={`partner-item ${item.iconClass}`}>
                    {item.iconClass === "is-binance" || item.iconClass === "is-metamask" ? (
                      <span className={`partner-icon-crop ${item.iconClass}`}>
                        <img className={`partner-icon-inner ${item.iconClass}`} src={item.icon} alt="" />
                      </span>
                    ) : (
                      <img className={item.iconClass} src={item.icon} alt="" />
                    )}
                    {item.iconClass !== "is-ortradex" && <span>{item.label}</span>}
                  </div>
                ))}
              </div>

              <div className="partner-group" aria-hidden="true">
                {partnerLogos.map((item) => (
                  <div key={`${item.label}-b`} className={`partner-item ${item.iconClass}`}>
                    {item.iconClass === "is-binance" || item.iconClass === "is-metamask" ? (
                      <span className={`partner-icon-crop ${item.iconClass}`}>
                        <img className={`partner-icon-inner ${item.iconClass}`} src={item.icon} alt="" />
                      </span>
                    ) : (
                      <img className={item.iconClass} src={item.icon} alt="" />
                    )}
                    {item.iconClass !== "is-ortradex" && <span>{item.label}</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="partner-edge-left" />
          <div className="partner-edge-right" />

          <h2 className="section-title-gradient">Partners</h2>
        </section>

        <section className="home-cta">
          <img className="cta-arc" src={ctaArcMain} alt="" />
          <img className="cta-right-group" src={ctaRightGroup} alt="" />
          <img className="cta-left-group" src={ctaLeftGroup} alt="" />

          {ctaDots.map((dot, index) => (
            <img
              key={index}
              className="cta-dot"
              src={ctaDot}
              alt=""
              style={{ left: `${dot.left}px`, top: `${dot.top}px` }}
            />
          ))}

          <h2>Start Trading Smarter.</h2>
          <p>Trade perpetual markets with AI-powered conviction.</p>
          <div className="cta-actions">
            <button type="button">Launch OrtradeX</button>
            <button type="button">Download App</button>
          </div>
        </section>

        <footer className="home-footer">
          <img className="footer-logo" src={footerLogo} alt="OrTradeX" />

          <a
            className="footer-social"
            href="https://x.com/OrTradeX"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="OrTradeX on X"
          >
            <img className="footer-social-bg" src={footerSocialBg} alt="" />
            {/* <span className="footer-social-path-wrap">
              <img className="footer-social-path" src={footerSocialPath} alt="" />
            </span> */}
            <span className="footer-social-x-wrap">
              <img className="footer-social-x" src={footerSocialX} alt="" />
            </span>
          </a>

          <a href="#" className="footer-link footer-terms">
            Terms Of Use
          </a>
          <a href="#" className="footer-link footer-privacy">
            Privacy Policy
          </a>

          <p className="footer-copyright">© 2026 OrTradeX. All rights reserved.</p>
        </footer>
        </main>
      </div>
    </div>
  );
}

function useIsMobileViewport(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(`(max-width: ${breakpoint - 0.02}px)`).matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint - 0.02}px)`);
    const handleChange = (event) => setIsMobile(event.matches);
    setIsMobile(mediaQuery.matches);

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, [breakpoint]);

  return isMobile;
}

function renderMobileMultilineText(text) {
  return text.split("\n").map((line, index, array) => (
    <React.Fragment key={`${text}-${line}-${index}`}>
      {line}
      {index < array.length - 1 ? <br /> : null}
    </React.Fragment>
  ));
}

function MobilePartnerIcon({ item }) {
  return <img className={`m-partner-icon ${item.iconClass}`} src={item.icon} alt="" />;
}

function MobileWhyCard({ item, isFlipped, onToggle }) {
  const handleKeyDown = (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    onToggle(item.key);
  };

  return (
    <article
      className={`m-why-card ${item.className}${isFlipped ? " is-flipped" : ""}`}
      role="button"
      tabIndex={0}
      aria-pressed={isFlipped}
      onClick={() => onToggle(item.key)}
      onKeyDown={handleKeyDown}
    >
      <div className="m-why-card-flip">
        <div className="m-why-card-face m-why-card-face-front">
          <img className="m-why-card-glow" src={whyCardGlow} alt="" />
          <img className="m-why-card-top-line" src={whyTopLine} alt="" />

          {item.key === "signal" && (
            <>
              <div className="m-why-grid-v">
                <img src={whyFrontSignalGridV} alt="" />
              </div>
              <div className="m-why-grid-h">
                <img src={whyFrontSignalGridH} alt="" />
              </div>
              <img className="m-why-main-icon m-why-main-icon-signal-shadow" src={item.icon} alt="" />
            </>
          )}

          {item.key === "stack" && (
            <>
              <img className="m-why-stack-shape-1" src={whyStack1} alt="" />
              <img className="m-why-stack-shape-2" src={whyStack2} alt="" />
              <img className="m-why-stack-clip-1" src={whyClip1} alt="" />
              <img className="m-why-stack-clip-2" src={whyClip2} alt="" />
            </>
          )}

          {item.key === "ecosystem" && <img className="m-why-planet-bg" src={whyPlanetBg} alt="" />}

          {item.key === "transparent" && (
            <>
              <img className="m-why-shape-1" src={whyShape1} alt="" />
              <img className="m-why-shape-2" src={whyShape2} alt="" />
            </>
          )}

          <img className="m-why-main-icon" src={item.icon} alt="" />
          <h3 className="m-why-front-title">{renderMobileMultilineText(item.title)}</h3>
        </div>

        <div className="m-why-card-face m-why-card-face-back">
          <div className="m-why-back-icon-box">
            {item.useStackLines ? (
              <span className="m-why-back-stack-lines">
                <img src={whyBackStackLine} alt="" />
                <img src={whyBackStackLine} alt="" />
                <img src={whyBackStackLine} alt="" />
              </span>
            ) : (
              <img src={item.backIcon} alt="" />
            )}
          </div>
          <h4>{item.backTitle}</h4>
          <p>{renderMobileMultilineText(item.backDescription)}</p>
        </div>
      </div>
    </article>
  );
}

function MobileHomePage() {
  const [activeWhyCardKey, setActiveWhyCardKey] = useState(null);

  const handleMobileWhyCardToggle = (cardKey) => {
    setActiveWhyCardKey((prevKey) => (prevKey === cardKey ? null : cardKey));
  };

  return (
    <div className="m-home-shell">
      <header className="m-home-nav">
        <div className="m-home-nav-brand" aria-label="OrTradeX">
          <img src={pcLogo} alt="OrTradeX" />
        </div>

        <div className="m-home-nav-right">
          <button className="m-home-lang-btn" type="button" aria-label="Language">
            <img src={languageIcon} alt="" />
          </button>
          <button className="m-home-nav-menu" type="button" aria-label="Menu">
            <img src={mobileNavMenu} alt="" />
          </button>
        </div>
      </header>

      <div className="m-home-stage-wrap">
        <div className="m-home-stage">
          <div className="m-home-page">
            <section className="m-home-hero">
              <div
                className="m-hero-mask"
                style={{
                  WebkitMaskImage: `url(${heroJimengMask})`,
                  maskImage: `url(${heroJimengMask})`,
                }}
              >
                <img src={heroJimengOverlay} alt="" />
              </div>

              <div className="m-hero-title-wrap">
                <h1>A New Way to Trade</h1>
                <h2>Perpetual Markets</h2>
                <p>
                  Deploy automated trading bots, follow proven strategies, and keep full control over every
                  execution.
                </p>
              </div>

              <div className="m-hero-device-actions">
                <button type="button" aria-label="iOS">
                  <img src={heroIosIcon} alt="" />
                </button>
                <button type="button" aria-label="Android">
                  <img src={heroAndroidIcon} alt="" />
                </button>
              </div>

              <div className="m-hero-visual">
                <div className="m-hero-particle-wrap">
                  <div className="m-hero-particle-rotor">
                    <img src={heroParticle} alt="" />
                  </div>
                </div>
                <img className="m-hero-ring" src={mobileHeroRing} alt="" />
                <img className="m-hero-glow" src={mobileHeroGlow} alt="" />
                <img className="m-hero-shadow" src={mobileHeroShadow} alt="" />
                <div className="m-hero-main-icon">
                  <img src={hero3dIcon} alt="" />
                </div>
              </div>

              <div className="m-hero-stats">
                {heroStats.map((item) => (
                  <div key={item.label} className="m-hero-stat">
                    <p className="m-hero-stat-value">{item.value}</p>
                    <p className="m-hero-stat-label">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="m-hero-main-actions">
                <button type="button" className="m-btn-primary">
                  Launch App
                </button>
                <button type="button" className="m-btn-secondary">
                  Download App
                </button>
              </div>
            </section>

            <section className="m-home-ai">
              {aiFeatureSlides.map((slide) => (
                <article key={slide.title} className="m-ai-item">
                  <div className="m-ai-copy">
                    <h3>{slide.title}</h3>
                    <p>{slide.subtitle}</p>
                  </div>
                  <div className="m-ai-screen-wrap">
                    <div className="m-ai-screen-glow" />
                    <div className="m-ai-screen">
                      <img className="m-ai-screen-panel" src={slide.panel} alt="" />
                      <img className="m-ai-screen-fade" src={slide.fade} alt="" />
                    </div>
                  </div>
                </article>
              ))}
            </section>

            <section className="m-home-built">
              <div className="m-section-heading">
                <h2>Built for Origins Ecosystem</h2>
                <p>Powered by the Origins Network</p>
              </div>

              <div className="m-built-art">
                <img className="m-built-art-image" src={mobileBuiltArtSingle} alt="" />
              </div>

              <div className="m-built-copy">
                <p className="m-built-main">OrTradeX is designed as a financial layer inside the Origins ecosystem.</p>
                <p className="m-built-list-title">Node operators provide infrastructure support, enabling:</p>
                <ul>
                  <li>Stable execution routing</li>
                  <li>Network-level support</li>
                  <li>Ecosystem-native liquidity</li>
                  <li>Governance participation</li>
                </ul>
                <div className="m-built-tags">
                  <a href="https://originspro.com/" target="_blank" rel="noopener noreferrer" aria-label="Origins Pro">
                    <img src={builtTagGlobe} alt="" />
                  </a>
                  <a
                    href="https://x.com/OriginsNetwork_"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Origins Network on X"
                  >
                    <img src={builtTagX} alt="" />
                  </a>
                </div>
              </div>
            </section>

            <section className="m-home-why">
              <div className="m-section-heading">
                <h2>Why OrTradeX</h2>
                <p>Built on structure, not speculation.</p>
              </div>

              <div className="m-why-grid">
                {mobileWhyCards.map((item) => (
                  <MobileWhyCard
                    key={item.key}
                    item={item}
                    isFlipped={activeWhyCardKey === item.key}
                    onToggle={handleMobileWhyCardToggle}
                  />
                ))}
              </div>
            </section>

            <section className="m-home-trade">
              <div className="m-section-heading">
                <h2>Trade Anywhere. Stay in Control.</h2>
                <p>OrTradeX brings signal-driven perpetual trading to your fingertips.</p>
              </div>

              <div className="m-trade-art">
                <img className="m-trade-ring" src={tradeRingGlowM} alt="" />
               {/*  <div className="m-trade-floor">
                  <img src={tradeFloorGlow} alt="" />
                </div>
                <img className="m-trade-sphere" src={tradeBall} alt="" />
                <div className="m-trade-beam-wrap">
                  <div className="m-trade-beam-rotor">
                    <img src={tradeBeam} alt="" />
                  </div>
                </div>
                <div className="m-trade-phone-wrap">
                  <img className="m-trade-phone-screen" src={tradePhoneScreenFill} alt="" />
                  <img className="m-trade-phone" src={tradePhonePhoto} alt="" />
                </div> */}
              </div>

              <p className="m-trade-desc">
                Monitor AI signals, activate strategies, and manage positions in real time, wherever you are.
              </p>

              <ul className="m-trade-feature-list">
                {tradeFeatures.map((item) => (
                  <li key={item.label}>
                    <img src={item.icon} alt="" />
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>

              <div className="m-trade-actions">
                <button type="button">Get Started</button>
                <span>
                  <img src={tradeIosIcon} alt="" />
                </span>
                <span>
                  <img src={tradeAndroidIcon} alt="" />
                </span>
              </div>
            </section>

            <section className="m-home-partner">
              <h2>Partners</h2>
              <div className="m-partner-list">
                {mobilePartnerLogos.map((item, index) => (
                  <div
                    key={`${item.label}-${index}`}
                    className={`m-partner-item ${item.iconClass}${index < mobilePartnerLogos.length - 1 ? " is-divider" : ""}`}
                  >
                    <MobilePartnerIcon item={item} />
                    <p>{item.iconClass === "is-ortradex" ? "Origins" : item.label}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="m-home-cta">
              <img className="m-cta-left" src={ctaLeftGroup} alt="" />
              <img className="m-cta-right" src={ctaRightGroup} alt="" />
              <img className="m-cta-arc" src={ctaArcMain} alt="" />
              <h2>Start Trading Smarter.</h2>
              <p>Trade perpetual markets with AI-powered conviction.</p>
              <div className="m-cta-actions">
                <button type="button">Launch OrtradeX</button>
                <button type="button">Download App</button>
              </div>
            </section>

            <footer className="m-home-footer">
              <div className="m-home-footer-top">
                <img className="m-home-footer-logo" src={footerLogo} alt="OrTradeX" />
                <a
                  className="m-home-footer-social"
                  href="https://x.com/OrTradeX"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="OrTradeX on X"
                >
                  <img className="m-home-footer-social-bg" src={footerSocialBg} alt="" />
                  <span className="m-home-footer-social-x-wrap">
                    <img src={footerSocialX} alt="" />
                  </span>
                </a>
              </div>

              <div className="m-home-footer-links">
                <a href="#">Terms Of Use</a>
                <a href="#">Privacy Policy</a>
              </div>

              <div className="m-home-footer-bottom">
                <p>© 2026 OrTradeX. All rights reserved.</p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  const isMobile = useIsMobileViewport();
  return isMobile ? <MobileHomePage /> : <DesktopHomePage />;
}

export default HomePage;
