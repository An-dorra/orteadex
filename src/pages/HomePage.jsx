import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
import ctaLeft1 from "../assets/home/images/cta_left_1.svg";
import ctaLeft2 from "../assets/home/images/cta_left_2.svg";
import ctaLeft3 from "../assets/home/images/cta_left_3.svg";
import ctaRight1 from "../assets/home/images/cta_right_1.svg";
import ctaRight2 from "../assets/home/images/cta_right_2.svg";
import ctaRight3 from "../assets/home/images/cta_right_3.svg";
import footerLogo from "../assets/home/images/footer_logo.svg";
import footerSocialBg from "../assets/home/images/footer_social_bg.svg";
import footerSocialPath from "../assets/home/images/footer_social_path.svg";
import footerSocialX from "../assets/home/images/footer_social_x.svg";
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
import whyCardGlow from "../assets/home/images/why_card_glow.svg";
import whyClip1 from "../assets/home/images/why_clip_1.svg";
import whyClip2 from "../assets/home/images/why_clip_2.svg";
import whyBackEcoIcon from "../assets/home/images/why_back_eco_icon.svg";
import whyBackSignalIcon from "../assets/home/images/why_back_signal_icon.svg";
import whyBackStackLine from "../assets/home/images/why_back_stack_line.svg";
import whyBackTransparentIcon from "../assets/home/images/why_back_transparent_icon.svg";
import whyIconX from "../assets/home/images/why_icon_x.svg";
import whyOrbit1 from "../assets/home/images/why_orbit1.svg";
import whyOrbit2 from "../assets/home/images/why_orbit2.svg";
import whyOrbit3 from "../assets/home/images/why_orbit3.svg";
import whyOrbit4 from "../assets/home/images/why_orbit4.svg";
import whyOrbit5 from "../assets/home/images/why_orbit5.svg";
import whyOrbit6 from "../assets/home/images/why_orbit6.svg";
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
import "./HomePage.css";

gsap.registerPlugin(ScrollTrigger);

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

const ctaDots = [
  { left: 245, top: 64 },
  { left: 245, top: 246 },
  { left: 245, top: 376 },
  { left: 299, top: 246 },
  { left: 299, top: 376 },
  { left: 299, top: 522 },
  { left: 337, top: 168 },
  { left: 337, top: 376 },
  { left: 337, top: 522 },
  { left: 337, top: 596 },
  { left: 1603, top: 125 },
  { left: 1603, top: 330 },
  { left: 1603, top: 476 },
  { left: 1603, top: 596 },
  { left: 1673, top: 64 },
  { left: 1673, top: 330 },
  { left: 1719, top: 168 },
  { left: 1719, top: 476 },
];

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

function HomePage() {
  const itemHeight = 68;
  const displayPhrases = [...rotatingPhrases, ...rotatingPhrases, ...rotatingPhrases];
  const [index, setIndex] = useState(rotatingPhrases.length);
  const [noTransition, setNoTransition] = useState(false);
  const timerRef = useRef(null);
  const aiSectionRef = useRef(null);
  const aiStickyRef = useRef(null);
  const aiHeadingRefs = useRef([]);
  const aiDescRefs = useRef([]);
  const aiStageRef = useRef(null);
  const aiScreenRef = useRef(null);
  const aiSlideRefs = useRef([]);

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

  useEffect(() => {
    const section = aiSectionRef.current;
    const sticky = aiStickyRef.current;
    const screen = aiScreenRef.current;
    if (!section || !sticky || !screen) return;
    let mediaMatcher = null;

    const ctx = gsap.context(() => {
      const slides = aiSlideRefs.current.filter(Boolean);
      const headings = aiHeadingRefs.current.filter(Boolean);
      const descriptions = aiDescRefs.current.filter(Boolean);
      const screenCount = Math.min(slides.length, headings.length, descriptions.length);
      if (!screenCount) return;

      const setInitialState = () => {
        gsap.set(aiStageRef.current, { autoAlpha: 1 });
        gsap.set(screen, { autoAlpha: 1 });
        gsap.set([...headings, ...descriptions, ...slides], { autoAlpha: 0 });
        gsap.set([headings[0], descriptions[0], slides[0]], { autoAlpha: 1 });
      };

      const buildTimeline = () => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => {
              const sectionHeight = section.getBoundingClientRect().height;
              const stickyHeight = sticky.getBoundingClientRect().height;
              return `+=${Math.max(1, sectionHeight - stickyHeight)}`;
            },
            pin: sticky,
            pinType: "transform",
            pinReparent: true,
            pinSpacing: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        for (let screenIndex = 1; screenIndex < screenCount; screenIndex += 1) {
          const previousIndex = screenIndex - 1;
          timeline
            .to([headings[previousIndex], descriptions[previousIndex]], {
              autoAlpha: 0,
              duration: 0.35,
              ease: "power1.out",
            }, "+=0.7")
            .to(slides[previousIndex], {
              autoAlpha: 0,
              duration: 0.45,
              ease: "power1.out",
            }, "<")
            .to([headings[screenIndex], descriptions[screenIndex]], {
              autoAlpha: 1,
              duration: 0.35,
              ease: "power1.out",
            })
            .to(slides[screenIndex], {
              autoAlpha: 1,
              duration: 0.45,
              ease: "power1.out",
            }, "<");
        }

        return timeline;
      };

      mediaMatcher = gsap.matchMedia();
      mediaMatcher.add("(min-width: 768px)", () => {
        setInitialState();
        const timeline = buildTimeline();
        return () => {
          if (timeline.scrollTrigger) timeline.scrollTrigger.kill();
          timeline.kill();
        };
      });
      mediaMatcher.add("(max-width: 767px)", () => {
        setInitialState();
      });
    }, section);

    return () => {
      if (mediaMatcher) mediaMatcher.revert();
      ctx.revert();
    };
  }, []);

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

        <section className="home-ai" ref={aiSectionRef}>
          <div className="ai-sticky" ref={aiStickyRef}>
            {aiFeatureSlides.map((screen, screenIndex) => (
              <div key={`ai-copy-${screenIndex}`} className={`ai-copy ai-copy-${screenIndex + 1}`}>
                <h2
                  ref={(element) => {
                    aiHeadingRefs.current[screenIndex] = element;
                  }}
                  className="section-title-gradient"
                >
                  {screen.title}
                </h2>
                <p
                  ref={(element) => {
                    aiDescRefs.current[screenIndex] = element;
                  }}
                  className="section-subtitle"
                >
                  {screen.subtitle}
                </p>
              </div>
            ))}

            <div className="ai-shell" ref={aiStageRef}>
              <div className="ai-shell-stage">
                <div className="ai-shell-glow" />
                <div className="ai-shell-core">
                  <div className="ai-shell-screen" ref={aiScreenRef}>
                    {aiFeatureSlides.map((slide, slideIndex) => (
                      <div
                        key={`ai-slide-${slideIndex}`}
                        className={`ai-shell-slide ai-shell-slide-${slideIndex + 1}`}
                        style={{ zIndex: slideIndex + 1 }}
                        ref={(element) => {
                          aiSlideRefs.current[slideIndex] = element;
                        }}
                      >
                        <img className="ai-shell-bg" src={slide.panel} alt="" />
                        <img className="ai-shell-fade" src={slide.fade} alt="" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
              <span>
                <img src={builtTagGlobe} alt="" />
                Origins Network
              </span>
              <span>
                <img src={builtTagX} alt="" />
                Origins Network
              </span>
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
                  <img className="why-orbit why-orbit-1" src={whyOrbit1} alt="" />
                  <img className="why-orbit why-orbit-2" src={whyOrbit2} alt="" />
                  <img className="why-orbit why-orbit-3" src={whyOrbit3} alt="" />
                  <img className="why-orbit why-orbit-4" src={whyOrbit4} alt="" />
                  <img className="why-orbit why-orbit-5" src={whyOrbit5} alt="" />
                  <img className="why-orbit why-orbit-6" src={whyOrbit6} alt="" />
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
                <img className="trade-phone-screen" src={tradePhoneScreenFill} alt="" />
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
                    <span>{item.label}</span>
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
                    <span>{item.label}</span>
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
          <img className="cta-right-1" src={ctaRight1} alt="" />
          <img className="cta-right-2" src={ctaRight2} alt="" />
          <img className="cta-right-3" src={ctaRight3} alt="" />
          <img className="cta-left-1" src={ctaLeft1} alt="" />
          <img className="cta-left-2" src={ctaLeft2} alt="" />
          <img className="cta-left-3" src={ctaLeft3} alt="" />

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

          <a className="footer-social" href="#" aria-label="X">
            <img className="footer-social-bg" src={footerSocialBg} alt="" />
            {/* <span className="footer-social-path-wrap">
              <img className="footer-social-path" src={footerSocialPath} alt="" />
            </span> */}
            <span className="footer-social-x-wrap">
              <img className="footer-social-x" src={footerSocialX} alt="" />
            </span>
          </a>

          <a href="#" className="footer-link footer-terms">
            terms of use
          </a>
          <a href="#" className="footer-link footer-privacy">
            privacy policy
          </a>

          <p className="footer-copyright">© 2026 OrTradeX. All rights reserved.</p>
        </footer>
        </main>
      </div>
    </div>
  );
}

export default HomePage;
