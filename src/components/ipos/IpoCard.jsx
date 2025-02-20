import React from "react";
import "../../styles/IpoCard.css";
 // Separate CSS for card

const IpoCard = ({ ipo }) => {
  return (
    <div className="ipo-card">
      <img src={ipo.logo} alt={ipo.name} className="ipo-logo" />
      <h3 className="ipo-title">{ipo.name}</h3>

      <p><strong>Price Band:</strong> {ipo.priceBand}</p>
      <p><strong>Open:</strong> {ipo.open}</p>
      <p><strong>Close:</strong> {ipo.close}</p>
      <p><strong>Issue Size:</strong> {ipo.issueSize}</p>
      <p><strong>Issue Type:</strong> {ipo.issueType}</p>
      <p><strong>Listing Date:</strong> {ipo.listingDate}</p>

      <div className="ipo-buttons">
        <button className="rhp-button">RHP</button>
        <button className="drhp-button">DRHP</button>
      </div>
    </div>
  );
};

export default IpoCard;
