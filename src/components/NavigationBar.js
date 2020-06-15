import React from 'react';
import styled from 'styled-components';
import { FaHome } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaPen } from "react-icons/fa";

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
    <nav class="nav">
      <a href="/" class="nav__link">
        <i class="material-icons nav__icon"><FaHome size="2rem"/></i>
        <span class="nav__text">Home</span>
      </a>

      <a href="/login" class="nav__link nav__link--active">
        <i class="material-icons nav__icon"><FaSignInAlt size="2rem"/></i>
        <span class="nav__text">Login</span>
      </a>

      <a href="/uitleg" class="nav__link">
        <i class="material-icons nav__icon"><FaInfo size="2rem"/></i>
        <span class="nav__text">Uitleg</span>
      </a>

      <a href="/contact" class="nav__link">
        <i class="material-icons nav__icon"><FaPhone size="2rem"/></i>
        <span class="nav__text">Contact</span>
      </a>

      <a href="" class="nav__link">
        <i class="material-icons nav__icon"><FaPen size="2rem"/></i>
        <span class="nav__text">Uiterlijk</span>
      </a>

    </nav>
  </Styles>
)
