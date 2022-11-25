import React from 'react';
import '../styles/Banner.css';

function Banner() {
  const title = '🌱 La maison jungle 🌿';
  return <h1 className="lmj-title">{title.toUpperCase()}</h1>;
}

export default Banner;
