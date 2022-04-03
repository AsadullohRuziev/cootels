import React from "react";
import styled from "styled-components";
import "./header.scss";
import Button from "../components/Button";
import leftImg from "../assets/image/header_first.png"
import midImg from "../assets/image/header_two.png"
import rightImg from "../assets/image/header_three.png"
import Text from "../components/Text";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="navbar">
          <h1 className="logo">Cooters</h1>
          <nav className="nav">
            <a href="#">Rooms </a>
            <a href="#">Reservation</a>
            <a href="#">Contacs</a>
          </nav>
          <Button title="Get Started" />
        </div>
        <div className="banner">
          <div className="left">
            <h3>Nature, Warmth, and Beauty in One Space</h3>
            <Text title="One place to release all the stress, bring back happines, and get
              back to nature. We provide the best room and nature for you. Come
              visit us anytime you want."/>
            <Button title="Reservation"/>
          </div>
          <div className="right">
              <img src={leftImg} className="header_first" alt="haha" />                
              <img src={midImg} className="header_two" alt="haha" />                
              <img src={rightImg} className="header_three" alt="haha" />                
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

const Nav = styled.nav``;
