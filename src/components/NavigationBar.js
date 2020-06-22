import React from 'react';
import styled from 'styled-components';
import { FaHome } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import {Link} from 'react-router-dom'

const Styles = styled.div`
body {
  margin: 0 0 55px 0;
}

.nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 80px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  background-color: #32ADBD;
  display: flex;
  overflow-x: auto;
}

.nav__link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  min-width: 50px;
  overflow: hidden;
  white-space: nowrap;
  font-family: Segoe UI;
  font-size: 22px;
  font-size: 100%;
  color: #FFFFFF;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
}

.nav__link:hover {
  background-color: #E7FCFF;
  color: #F27405;
}

.nav__icon {
  font-size: 18px;
}

}`;

export const NavigationBar = () => (
  <Styles>

    <nav class="nav className="block-example border-right border-dark>
      <a href="/" class="nav__link">
        <i class="material-icons nav__icon"><FaHome size="2rem"/></i>
        <span class="nav__text">Home</span>
      </a>

      <Link to="/login" className="nav__link nav__link--active">
        <i className="material-icons nav__icon"><FaSignInAlt size="2rem"/></i>
        <span className="nav__text">Login</span>
      </Link>

      <Link to="/uitleg" className="nav__link">
        <i className="material-icons nav__icon"><FaInfo size="2rem"/></i>
        <span className="nav__text">Uitleg</span>
      </Link>

      <Link to="/contact" className="nav__link">
        <i className="material-icons nav__icon"><FaPhone size="2rem"/></i>
        <span className="nav__text">Contact</span>
      </Link>

      <Link to="/uiterlijk" className="nav__link">
        <i className="material-icons nav__icon"><FaPen size="2rem"/></i>
        <span className="nav__text">Uiterlijk</span>
      </Link>

    </nav>
  </Styles>
)
