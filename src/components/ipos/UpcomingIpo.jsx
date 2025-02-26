import React, { useState } from "react";
import "../../styles/UpcomingIpo.css";
import { Facebook, Twitter, Linkedin, Youtube, Instagram, Send } from "lucide-react";

import IpoCard from "./IpoCard"; // Import IPO Card component

const ipoData = [
    {
        id: 1,
        logo: "/images/nova.png",
        name: "Nova Agritech Ltd.",
        priceBand: "Rs 39 - 41",
        open: "2024-01-22",
        close: "2024-01-24",
        issueSize: "143.81 Cr.",
        issueType: "Book Built",
        listingDate: "2024-01-30",
    },
    {
        id: 2,
        logo: "/images/epack.png",
        name: "EPACK Durable Ltd.",
        priceBand: "Rs 218 - 230",
        open: "2024-01-19",
        close: "2024-01-23",
        issueSize: "640.05 Cr.",
        issueType: "Book Built",
        listingDate: "2024-01-29",
    },
    {
        id: 3,
        logo: "/images/oyo.png",
        name: "Oravel Stays Ltd.",
        priceBand: "Not Issued",
        open: "Not Issued",
        close: "Not Issued",
        issueSize: "8430 Cr.",
        issueType: "Book Built",
        listingDate: "Not Issued",
    },
];

const UpcomingIpo = () => {
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    return (
        <div className="upcoming-ipo ">
            <div className="titleName">
                <h1 className="title">Upcoming IPO</h1>
                <p>
                    Companies that have filed for an IPO with SEBI. Few details might be disclosed by the companies later.
                </p>
            </div>

            <div className="ipo-cards">
                {ipoData.map((ipo) => (
                    <IpoCard key={ipo.id} ipo={ipo} />
                ))}
            </div>

            {/* FAQ Section */}
            <div className="faq-container">
                <div className="faq-header">
                    <h1>Frequently Asked Questions?</h1>
                    <p>Find answers to common questions that come in your mind related to IPO.</p>
                </div>

                <div className="faq-sections">
                    <div className={`faq-section ${activeSection === 1 ? "active" : ""}`}>
                        <button className="faq-question" onClick={() => toggleSection(1)}>
                            How to Subscribe to an IPO?
                            <span className="toggle-icon">{activeSection === 1 ? "−" : "+"}</span>
                        </button>
                        {activeSection === 1 && (
                            <div className="faq-answer">
                                <ul>
                                    <li>Step 1: Login to your respective service provider.</li>
                                    <li>Step 2: Click on the IPO button.</li>
                                    <li>Step 3: Select the IPO you want to bid and enter the relevant details.</li>
                                    <li>Step 4: Your subscription will be completed once you make the payment or give permission.</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className={`faq-section ${activeSection === 2 ? "active" : ""}`}>
                        <button className="faq-question" onClick={() => toggleSection(2)}>
                            Should I buy an IPO first day?
                            <span className="toggle-icon">{activeSection === 2 ? "−" : "+"}</span>
                        </button>
                        {activeSection === 2 && (
                            <div className="faq-answer">
                                <p>It depends on the demand and fundamentals of the IPO. Research before investing.</p>
                            </div>
                        )}
                    </div>

                    <div className={`faq-section ${activeSection === 3 ? "active" : ""}`}>
                        <button className="faq-question" onClick={() => toggleSection(3)}>
                            How do you know if an IPO is good?
                            <span className="toggle-icon">{activeSection === 3 ? "−" : "+"}</span>
                        </button>
                        {activeSection === 3 && (
                            <div className="faq-answer">
                                <p>Analyze the company's financials, industry trends, and market sentiment before investing.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <footer className="bg-f9f9f9 text-gray-700 py-10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {/* Resources Section */}
                        <div>
                            <h3 className="font-semibold text-lg mb-3">Resources</h3>
                            <ul className="space-y-2 text-sm">
                                <li>Trading View</li>
                                <li>NSE Holidays</li>
                                <li>e-Voting CDSL</li>
                                <li>e-Voting NSDL</li>
                                <li>Market Timings</li>
                            </ul>
                        </div>

                        {/* Company Section */}
                        <div>
                            <h3 className="font-semibold text-lg mb-3">Company</h3>
                            <ul className="space-y-2 text-sm">
                                <li>Careers</li>
                                <li>Contact Us</li>
                                <li>About Us</li>
                                <li>Community</li>
                                <li>Blogs</li>
                            </ul>
                        </div>

                        {/* Offerings Section */}
                        <div>
                            <h3 className="font-semibold text-lg mb-3">Offerings</h3>
                            <ul className="space-y-2 text-sm">
                                <li>Compare Broker</li>
                                <li>Fin Calculators</li>
                                <li>IPO</li>
                                <li>All Brokers</li>
                                <li>Products</li>
                            </ul>
                        </div>

                        {/* Links Section */}
                        <div>
                            <h3 className="font-semibold text-lg mb-3">Links</h3>
                            <ul className="space-y-2 text-sm">
                                <li>Shark Investor</li>
                                <li>Mutual Funds</li>
                                <li>Sitemap</li>
                                <li>Indian Indices</li>
                                <li>Bug Bounty Program</li>
                            </ul>
                        </div>
                    </div>

                    {/* Social Media & Contact */}
                    <div className="flex flex-col items-center mt-8 text-center">
                        <div className="flex space-x-4">
                            <Facebook className="w-5 h-5 cursor-pointer" />
                            <Twitter className="w-5 h-5 cursor-pointer" />
                            <Linkedin className="w-5 h-5 cursor-pointer" />
                            <Youtube className="w-5 h-5 cursor-pointer" />
                            <Instagram className="w-5 h-5 cursor-pointer" />
                            <Send className="w-5 h-5 cursor-pointer" />
                        </div>

                        <div className="mt-4">
                            <h3 className="font-semibold text-lg">BLUESTOCK</h3>
                            <p className="text-sm">Bluestock Fintech, Pune, Maharashtra</p>
                            <p className="text-xs">MSME Registration No: UDYAM-MH-01-0138001</p>
                            <p className="text-sm font-semibold mt-2 text-orange-500">#startupindia</p>
                        </div>
                    </div>

                    {/* Disclaimer Section */}
                    <div className="mt-6 text-sm text-center">
                        <p>
                            Investment in securities markets is subject to market risks. Read all the related
                            documents carefully before investing as prescribed by SEBI.
                        </p>
                        <p className="mt-2">
                            For queries, contact:{" "}
                            <a href="mailto:hello@bluestock.in" className="text-blue-500">
                                hello@bluestock.in
                            </a>
                            {" "}or{" "}
                            <a href="mailto:cto@bluestock.in" className="text-blue-500">
                                cto@bluestock.in
                            </a>
                        </p>
                    </div>

                    {/* Bottom Footer */}
                    <div className="mt-8 text-center text-xs">
                        <p>Bluestock Fintech All Rights Reserved.</p>
                        <p className="mt-2">Made with ❤️ in Pune, Maharashtra</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default UpcomingIpo;
