import React from "react";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar";
import SmallFooter from "../../components/Small-footer";

const GovernanceTeam = () => {
  const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
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
    window.addEventListener("load", () => {
      setTimeout(() => {
        if (fixedHeader.current) {
          var slidHeight = fixedHeader.current.offsetHeight;
          if (MainContent.current) {
            MainContent.current.style.marginTop = slidHeight + "px";
          }
        }
      }, 0);
    });
  }, [fixedHeader, MainContent, navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <header
        ref={fixedHeader}
        className="works-header fixed-slider hfixd valign"
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <video
          style={{
            position: 'absolute',
            width: '70%',
            height: 'auto',
            top: '60%',
            left: '50%',
            objectFit: 'contain',
            transform: 'translate(-50%, -50%)',
            zIndex: -1,
            maxWidth: '1200px',
            margin: '0 auto'
          }}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/movies/governance_movie.mp4" type="video/mp4" />
        </video>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-11 static">
              <div className="capt text-center mt-50">
                <h4 className="parlx">
                  Governance Team
                </h4>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div ref={MainContent} className="main-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-11">
              <div className="text-center">
                {/* ここにチーム情報を追加 */}
              </div>
            </div>
          </div>
        </div>
        <SmallFooter />
      </div>
    </DarkTheme>
  );
};

export default GovernanceTeam;
