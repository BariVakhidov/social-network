import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            <div>
                <h3><img src="https://pyxis.nymag.com/v1/imgs/bc9/5bb/95f88f06973066c75f07b98ed8af7f634a-18-pepe-the-frog.rsocial.w1200.jpg" alt=""/></h3>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
            <div>
                <h3>5</h3>
            </div>
            <div>
                <h3>6</h3>
            </div>
        </Slider>
    );
}
