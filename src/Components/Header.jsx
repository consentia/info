import React from "react";
import ParticlesBg from "particles-bg";

const Header = (props) => {
    if (!props.data) return null;

    const torrijaHeader = "images/" + props.data.torrijaHeader;
    const name = props.data.name;
    const description = props.data.description;
    
    return (
      <header id="home" style={{height:window.innerHeight}}>
        <ParticlesBg type="cobweb" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="" href="#portfolio">
                Works
              </a>
            </li>
            <li>
              <a className="" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
              <h1 className="responsive-headline">{name}</h1>
              <h3>{description}.</h3>
            <hr />
            <img src={torrijaHeader} alt="torrija" style={{width:"30vw"}}></img>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }

export default Header;