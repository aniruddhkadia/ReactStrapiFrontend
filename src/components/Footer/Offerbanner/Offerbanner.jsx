import React from "react";
import "./Offerbanner.scss";
import OfferBanner from "../../../assets/offer.jpg";

const Newsletter = () => {
    return (
        <div className="Offerbanner-section">
            <div className="Offerbanner-content">
                <a href="https://apps.apple.com/in/app/myntra-fashion-shopping-app/id907394059?mt=8"><img className="offerbanner-img" src={OfferBanner} /></a>
            </div>
        </div>
    );
};

export default Newsletter;
