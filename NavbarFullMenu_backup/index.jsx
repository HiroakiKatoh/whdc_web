import React from "react";
import Link from "next/link";

const NavbarFullMenu = () => {
  return (
    <div className="navbar navbar-expand-lg">
      <div className="container">
        <div className="navbar-nav">
          <div className="nav-item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
          <div className="nav-item">
            <Link href="/showcases">
              <a>Showcases</a>
            </Link>
          </div>
          <div className="nav-item">
            <Link href="/about">
              <a>About</a>
            </Link>
          </div>
          <div className="nav-item">
            <Link href="/portfolio">
              <a>Portfolio</a>
            </Link>
          </div>
          <div className="nav-item" style={{ display: 'block' }}>
            <a href="https://www.twhdc.co.jp/ir/" target="_blank" rel="noopener noreferrer">
              IR
            </a>
          </div>
          <div className="nav-item">
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarFullMenu; 