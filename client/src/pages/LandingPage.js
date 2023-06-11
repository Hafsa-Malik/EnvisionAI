import React from "react";
import { Link } from "react-router-dom";
import { Pannellum } from "pannellum-react";
import bg1 from "../images/bg1.jfif";
import logo from "../images/logo.png";
import { FaRegPlayCircle } from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div className="landingPage">
      <Pannellum
        width="100%"
        height="100%"
        image={bg1}
        yaw={300}
        hfov={110}
        autoLoad
        autoRotate={-5}
        stopMoveOnClick={false}
        showFullscreenCtrl={false}
        showControls={false}
        showCompass={false}
      />

      <img src={logo} alt="Logo" className="logo" />

      <Link to="/HomePage" className="centerLink">

        <FaRegPlayCircle className="playButton" />
        GET STARTED
      </Link>

      <div class="socialLinks">
        <a href="https://github.com">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.facebook.com">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://twitter.com">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
