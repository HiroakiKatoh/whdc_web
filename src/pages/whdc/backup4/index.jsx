import React, { useEffect, useRef } from 'react';
import Splitting from 'splitting';
import 'splitting/dist/splitting.css';
import AboutUs1 from "../../components/About-us1";
import BlogsTwoColumnSlider from "../../components/Blogs-two-column-slider";
import CallToAction from "../../components/Call-to-action";
import Clients1 from "../../components/Clients1";
import Footer from "../../components/Footer";
// import IntroWithSlider1 from "../../components/Intro-with-slider1";
import Navbar from "../../components/Navbar";
import Numbers1 from "../../components/Numbers";
import Services1 from "../../components/Services1";
import SkillsCircle from "../../components/Skills-circle";
import Works1Slider from "../../components/Works1-slider";
import RippleEffect from "../../components/rippleEffect";
import IntroText from "../../components/IntroText";

const Homepage1 = () => {
  // ヘッダーからのマージン値を変数として定義
  const headerMargin = '300px';  // この値を変更することでページ全体の位置を調整できます

  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    // Splittingの初期化
    const results = Splitting();
    
    // アニメーション用のカスタム属性を追加
    results.forEach(result => {
      result.chars.forEach((char, i) => {
        char.style.setProperty('--char-index', i);
      });
    });

    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = `${slidHeight}px`;
      }
    }, 1000);
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });

    const animateTexts = document.querySelectorAll('.animate-text');
    animateTexts.forEach((text, index) => {
      setTimeout(() => {
        text.classList.add('animated');
      }, 200 * index);
    });

    const words = document.querySelectorAll('.word');
    words.forEach((word, index) => {
      const chars = word.textContent.split('');
      word.textContent = '';
      chars.forEach((char, charIndex) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.className = 'char';
        span.style.animationDelay = `${(index * 0.2) + (charIndex * 0.05)}s`;
        word.appendChild(span);
      });
    });
  }, []);

  return (
    <>
      <div className="main-visual-container" style={{
        width: '100%',
        maxWidth: '100%',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Navbar nr={navbarRef} lr={logoRef} />
        <div className="main-visual" style={{ 
          width: '100%',
          height: '100vh',
          position: 'relative'
        }}>
          <div className="caption" style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
            width: '100%'
          }}>
            <IntroText />
          </div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="main-visual-video"
            style={{
              position: 'fixed',
              width: '100%',
              height: '100vh',
              top: 0,
              left: 0,
              objectFit: 'cover',
              zIndex: 0,
              opacity: 0.8
            }}
          >
            <source src="/movies/earth.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div ref={MainContent} className="sub-visual" style={{ 
        position: 'relative',
        zIndex: 2,
        background: '#0C0C0C'
      }}>
        <AboutUs1 />
        <Services1 />
        <Numbers1 />
        <Works1Slider />
        <SkillsCircle theme="dark" subBG />
        <Clients1 theme="dark" />
        <BlogsTwoColumnSlider />
        <CallToAction subBG />
        <Footer />
      </div>
    </>
  );
};

export default Homepage1;
