import React from "react";

const MapSection = ({ fullWidth = false, className = "" }) => {
  return (
    <div className={`map-section ${className}`}>
      <div className={fullWidth ? "" : "auto-container"}>
        <div className="map-container">
          <iframe
            className="map-iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90627.32882520824!2d17.123766744837777!3d44.778684529769876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475e03062ccd6b05%3A0x73fe3280dfee195d!2sBanja%20Luka%2078000!5e0!3m2!1sen!2sba!4v1681747580972!5m2!1sen!2sba"
            style={{ border: 0 }}
            aria-hidden={false}
            tabIndex={0}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
