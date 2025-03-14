import React, { useCallback } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import CountdownTimer from '../../components/CountdownTimer';
import TypeWriter from '../../components/TypeWriter';
import 'remixicon/fonts/remixicon.css';

const CountdownPage = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/countDownTimer/images/favicon/icon.png" type="image/x-icon" />
        <title>Countdown Timer</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Syne:wght@400..800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/3.6.0/remixicon.css" />
        <link rel="stylesheet" href="/countDownTimer/css/ds-digital.css" />
        <link rel="stylesheet" href="/countDownTimer/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/countDownTimer/css/style.css" />
        <link rel="stylesheet" href="/countDownTimer/css/media.css" />
      </Head>

      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />

      <div className="video-container">
        <video muted loop autoPlay>
          <source src="/public/movies/earth_dr.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container">
        <div className="top-section">
          <div className="layout">
            <div className="logo">
              <img src="/public/img/logo/logo.png" alt="Logo" style={{ width: '100px' }}/>
            </div>
            
            <div className="row">
              <div className="col-12">
                <TypeWriter text="We' Are Coming Soon" />
              </div>
            </div>

            <CountdownTimer />

            <div className="row">
              <div className="text-center col-12 Desc-1">
                Perfect and awesome template to present your future product or service.
                Fully responsive Under Construction template, which is very clean and minimal.
              </div>
            </div>
          </div>

          <div className="row copy-social">
            <div className="col-12">
              <div className="social-icon-1">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <i className="ri-facebook-fill"></i>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <i className="ri-instagram-line"></i>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <i className="ri-twitter-x-fill"></i>
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <i className="ri-linkedin-fill"></i>
                </a>
              </div>
            </div>
            <div className="col-12">
              <div className="copy-right">
                Copyright © 2025 <a href="https://1.envato.market/website-portfolio" target="_blank" rel="noopener noreferrer">
                  The_Krishna
                </a> | All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>

      <Script src="/countDownTimer/js/jquery.min.js" strategy="beforeInteractive" />
      <Script src="/countDownTimer/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
      <Script src="/countDownTimer/js/Script.js" strategy="afterInteractive" />
    </>
  );
};

export default CountdownPage; 
