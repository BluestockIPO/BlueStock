import React from "react";

const IpoCard = ({ ipo }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-80">
      {/* Logo and Name */}
      <div className="flex items-center  justify-center space-x-3 mb-4">
        <img src={ipo.logo} alt={ipo.name} className="w-10 h-10 rounded-full" />
        <h2 className="text-lg font-semibold text-indigo-600">{ipo.name}</h2>
      </div>

      {/* IPO Details */}
      <div className="card-details text-gray-500 text-sm space-y-2 flex flex-wrap  justify-center gap-4">
        <p>PRICE BAND:<br /> <span className="text-black font-bold">{ipo.priceBand || "Not Issued"}</span></p>
        <p>OPEN: <br /><span className="text-black font-bold">{ipo.open || "Not Issued"}</span></p>
        <p>CLOSE:<br /> <span className="text-black font-bold">{ipo.close || "Not Issued"}</span></p>
        <p>ISSUE SIZE: <br /><span className="text-black text-black font-bold">{ipo.issueSize || "Not Issued"}</span></p>
        <p>ISSUE TYPE: <br /><span className="text-black font-bold">{ipo.issueType}</span></p>
        <p>LISTING DATE: <br /><span className="text-black font-bold">{ipo.listingDate || "Not Issued"}</span></p>
      </div>


      {/* Buttons */}
      <div className="mt-4 flex  justify-center space-x-3">
        <button className="border border-blue-600 text-blue-600 px-4 py-1 rounded-lg">RHP</button>
        <button className="bg-red-500 text-white px-4 py-1 rounded-lg">DRHP</button>
      </div>
    </div>
  );
};

export default IpoCard;
