import React, { useEffect, useRef } from 'react';
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
import DarkTheme from "../../layouts/Dark";
import RippleEffect from "../../components/rippleEffect";

const Homepage1 = () => {
  // ヘッダーからのマージン値を変数として定義
  const headerMargin = '300px';  // この値を変更することでページ全体の位置を調整できます

  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
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

  }, []); // 空の依存配列を確認

  return (
    <DarkTheme>
      <div style={{
        width: '100%',
        maxWidth: '100%',
        overflowX: 'hidden',  // 横スクロールを防ぐ
        position: 'relative'
      }}>
        <Navbar nr={navbarRef} lr={logoRef} />
        <div style={{ 
          height: '200vh',  // 150vhから200vhにさらに増やす
          width: '100%',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div className="caption" style={{
            position: 'absolute',
            top: '25%',              // 40%から25%に変更してテキストを上に移動
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
            color: '#fff',
            width: '100%',
            textAlign: 'center'
          }}>
            <h1 className="words chars splitting" data-splitting style={{
              fontSize: '4vw',
              fontWeight: '700',
              lineHeight: '1.6',
              opacity: 0,
              animation: 'fadeInUp 1s ease-in-out forwards',
              animationDelay: '0.5s',
              textAlign: 'center'
            }}>
              Welcome to WHDC！
            </h1>
            <h2 className="words chars splitting" data-splitting style={{
              fontSize: '2.5vw',
              fontWeight: '500',
              lineHeight: '1.8',
              opacity: 0,
              animation: 'fadeInUp 1s ease-in-out forwards',
              animationDelay: '1s',
              textAlign: 'center'
            }}>
              我々が提供するのは価値提供の場、<br />
              企業再成プラットフォーム。<br />
              ビジネスモデルの総合商社、<br />
              THE WHY HOW DO COMPANY。
            </h2>
          </div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="floating-video"
            style={{
              position: 'absolute',
              width: '100vw',         // 画面幅いっぱいに
              height: 'auto',         // 縦横比を保持
              minHeight: '100vh',     // 最小高さを画面高さに
              top: '75%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              objectFit: 'cover',     // containからcoverに変更して画面を埋める
              zIndex: 0,
              opacity: 0.8,
              transition: 'all 0.3s ease-in-out'
            }}
          >
            <source src="/movies/earth.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div ref={MainContent} className="main-content" style={{ marginTop: headerMargin }}>
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
    </DarkTheme>
  );
};

export default Homepage1;
