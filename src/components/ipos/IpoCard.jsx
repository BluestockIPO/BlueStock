import React from "react";

const IpoCard = ({ ipo }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-80">
      {/* Logo and Name */}
      <div className="flex items-center space-x-3 mb-4">
        <img src={ipo.logo} alt={ipo.name} className="w-10 h-10 rounded-full" />
        <h2 className="text-lg font-semibold text-indigo-600">{ipo.name}</h2>
      </div>

      {/* IPO Details */}
      <div className="text-gray-600 text-sm space-y-2">
        <p><strong>PRICE BAND:</strong> <span className="text-black">{ipo.priceBand || "Not Issued"}</span></p>
        <p><strong>OPEN:</strong> {ipo.open || "Not Issued"}</p>
        <p><strong>CLOSE:</strong> {ipo.close || "Not Issued"}</p>
        <p><strong>ISSUE SIZE:</strong> <span className="text-black">{ipo.issueSize || "Not Issued"}</span></p>
        <p><strong>ISSUE TYPE:</strong> {ipo.issueType}</p>
        <p><strong>LISTING DATE:</strong> {ipo.listingDate || "Not Issued"}</p>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex space-x-3">
        <button className="border border-blue-600 text-blue-600 px-4 py-1 rounded-lg">RHP</button>
        <button className="bg-red-500 text-white px-4 py-1 rounded-lg">DRHP</button>
      </div>
    </div>
  );
};

export default IpoCard;
