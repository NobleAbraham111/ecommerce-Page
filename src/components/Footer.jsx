import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-section">
                    <h4><strong>Luxury Furnishing</strong></h4>
                    <p>Elevate your living space with Laxury Furnishing.</p>

                </div>


                <div className="footer-section">
                    <h4><strong>Customer Service</strong></h4>
                    <ul>
                        <li><a href="#">Shipping & Returns</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                </div>


            </div>


            <div className="footer-bottom">
                <p>©{new Date().getFullYear()} Luxury Furnishing. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
