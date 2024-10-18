import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Flex, IconButton, useColorMode, Spacer } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FaSun, FaMoon, FaLinkedin, FaGithub } from 'react-icons/fa'
import { FaRegChessPawn } from "react-icons/fa6";
import "./Style.css";
export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const{ colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === 'dark';
 



  return (

  <Flex as="nav" align="center" justify="space-between" p={4} bg="teal.500" gap= "2rem" className='nav'>
      
  <IconButton icon={<HamburgerIcon />} aria-label="Menu"  onClick={toggleMenu} />
  {isMenuOpen && (
  <div className="popup-menu">
    <ul>
      <li>
      <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="/Drone">Drone</Link>
      </li>
      <li>
      <Link to="/Raspberry">Raspberry PI</Link>
      </li>
      <li>
      <Link to="/Intro">Intro</Link>
      </li>
      <li>
      <Link to="/Berichten">Berichten</Link>
      </li>
    </ul>
  </div>   

)}
<Spacer></Spacer>
      <Link to="https://www.linkedin.com/in/stefan-broeks-462318225/">
      <IconButton icon={<FaLinkedin />} isRound="true"></IconButton>
      </Link>
      <Link to="https://github.com/Steef130">
      <IconButton icon={<FaGithub />} isRound="true"></IconButton>
      </Link>
     
      <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
    </Flex>
  );
};
