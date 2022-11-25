import React from 'react';
import logo from '../assets/logo';
import '../styles/Banner.css';

function Banner() {
  const title = '🌱 La maison jungle 🌿';
  return (
    <div className="lmj-banner">
      <img src={logo} alt="La maison jungle" className="lmj-logo" />
      <h1 className="lmj-title">{title.toUpperCase()}</h1>
    </div>
  );
}
export default Banner;
