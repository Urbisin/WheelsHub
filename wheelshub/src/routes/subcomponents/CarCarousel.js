import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Colocar api

function CarCarousel() {
    return (
        <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false}>
            <div className="carousel-image-container">
                <img src="https://i.pinimg.com/736x/9d/8d/8f/9d8d8f03969750386d742dd5fc248b87.jpg" alt="BMW 130i" />
            </div>
            <div className="carousel-image-container">
                <img src="https://imganuncios.mitula.net/medium/honda_cr_v_2008_gasolina_honda_cr_v_2009_2560042713463658680.jpg" alt="Honda CRV" />
            </div>
            <div className="carousel-image-container">
                <img src="https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1562245522/autoexpress/2017/11/discovery-sport_18my_-si4_013.jpg" alt="Land Rover Discovery Sport" />
            </div>
        </Carousel>
    )
}

export default CarCarousel;