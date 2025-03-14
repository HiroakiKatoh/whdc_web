import React from "react";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const IR = () => {
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
  }, []);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <div className="main-content">
        <div className="container">
          <h1>IR Information</h1>
          <div className="row">
            <div className="col-md-6">
              <a 
                href="https://www.twhdc.co.jp/ir/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                IR Main
              </a>
            </div>
            <div className="col-md-6">
              <a 
                href="https://www.twhdc.co.jp/ir/news/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                IR News
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </DarkTheme>
  );
};

export default IR; 