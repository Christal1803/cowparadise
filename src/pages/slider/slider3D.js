// Slider3D.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../slider/slider.css"; // We'll style the slider here

const Slider3D = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    focusOnSelect: true,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
  };

  return (
    <div className="slider-container mt-5 pt-5">
      <Slider {...settings}>
        <div className="slider-item cursor-pointer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="first-img">
                  <img
                    src="https://cowparadisegames.com/wp-content/uploads/2024/06/Toy-1.webp"
                    className="img-fluid banner-img"
                  />
                </div>
                <div className="trans">
                  <h4>Toy Shop</h4>
                  <h6>
                    Discover real-world treasures available for your enjoyment.
                    From charming toys to exclusive merchandise, bring the magic
                    of Cow Paradise to life. Dive into the Shop for a delightful
                    shopping experience!
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-item cursor-pointer">
          {/* <div className="container-fluid">
            <div className="row">
              <div className="col-12">
              <div className="trans-2 text-center">
                  <h4>Cinematic Videos</h4>
                  <h6>
                  Unveil the rich tapestry of Cow Paradise through our captivating cinematic videos. Immerse yourself in the spellbinding narrative that unfolds the intriguing background story of the game. Uncover secrets, mysteries, and the whimsical history that shaped this extraordinary world. Let the cinematic journey deepen your connection to the enchanting universe of Cow Paradise.
                  </h6>
                </div>
              </div>
            </div>
          </div> */}
          <img
            src="https://cowparadisegames.com/wp-content/uploads/2024/02/11CowParadiseExploration.00_00_16_27.Still001.webp"
            alt="Slide 2"
          />

          
        </div>
        <div className="slider-item cursor-pointer">
          <img
            src="https://cowparadisegames.com/wp-content/uploads/2024/06/Toy-1.webp"
            alt="Slide 3"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Slider3D;
