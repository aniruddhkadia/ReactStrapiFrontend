import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.jpg";
import BannerImgBig from "../../../assets/banner-img-big.jpg";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">

                <img className="myntra-small-banner-img" src={BannerImg} />
                <img className="myntra-small-banner-img" src={BannerImgBig} />

                {/* <div className="text-content">
                    <h1>SALES</h1>
                    <p>
                        Convallis interdum purus adipiscing dis parturient
                        posuere ac a quam a eleifend montes parturient posuere
                        curae tempor
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} /> */}
            </div>
        </div>
    );
};

export default Banner;
