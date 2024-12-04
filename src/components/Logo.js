// src/components/Logo.js
import React from "react";
import "./Logo.css"; // Optional, for styling

const Logo = () => {
  const imageUrl = "https://iconape.com/wp-content/png_logo_vector/aspire-zone-logo.png"; // External image URL

  return (
    <div className="logo-container">
      <img src={imageUrl} alt="AspirePath Logo" className="logo" />
    </div>
  );
};

export default Logo;
