import React from 'react';
import './SafariHeader.css'; // Arquivo CSS para estilização

function SafariHeader() {
  return (
    <div className="safari-header">
      <div className="left-buttons">
        <div className="button circle"></div>
        <div className="button circle"></div>
        <div className="button circle"></div>
      </div>
      <div className="right-buttons">
        <div className="button"></div>
        <div className="button"></div>
        <div className="button"></div>
      </div>
    </div>
  );
}

export default SafariHeader;
