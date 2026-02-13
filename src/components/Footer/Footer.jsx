import React from "react";
import "./Footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">MEN’S SHOPPING AT MYNTRA: A SUPERIOR EXPERIENCE</div>
                    <div className="text">Myntra is one of the best sites when it comes to online shopping for men. The finest of material, superior design and unbeatable style go into the making of our men’s shopping collection. </div>
                </div>
                <div className="col">
                    <div className="title">ONLINE SHOPPING</div>
                    <span className="text">Men</span>
                    <span className="text">Women</span>
                    <span className="text">Kids</span>
                    <span className="text">Home & Living</span>
                    <span className="text">Beauty</span>
                    <span className="text">Gift Cards</span>
                </div>
                <div className="col">
                    <div className="title">CUSTOMER POLICIES</div>
                    <span className="text">Contact Us</span>
                    <span className="text">FAQ</span>
                    <span className="text">T&C</span>
                    <span className="text">Terms Of Use</span>
                    <span className="text">Track Orders</span>
                    <span className="text">Shipping</span>
                </div>
                <div className="col">
                    <div className="title">USEFUL LINKS</div>
                    <div className="title">Blog</div>
                    <span className="text">Careers</span>
                    <span className="text">Site Map</span>
                    <span className="text">Corporate Information</span>
                    <span className="text">Whitehat</span>
                    <span className="text">Cleartrip</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        © 2024 www.myntra.com. All rights reserved.
                    </span>
                    <span className="text">A Flipkart company</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
