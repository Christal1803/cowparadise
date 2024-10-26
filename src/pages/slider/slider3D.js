// Slider3D.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../slider/slider.css";
import s1 from "../../assets/toyshop.png";
import s2 from "../../assets/cinematic.png";
import s3 from "../../assets/beachwears.png";

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
    <div className="slider-container mt-5 pt-5 ">
      <div className="l-block sm-none">
        <Slider {...settings}>
          <div className="slider-item cursor-pointer">
            <div className="container-fluid p-0">
              <div className="row">
                <div className="col-12">
                  <div className="imgs">
                    <img src="https://cowparadisegames.com/wp-content/uploads/2024/06/Toy-1.webp" />
                  </div>
                  <div className="imgs-txt">
                    <p className="imgs-h">Toy Shop</p>
                    <p className="imgs-c">
                      Discover real-world treasures available for your
                      enjoyment. From charming toys to exclusive merchandise,
                      bring the magic of Cow Paradise to life. Dive into the
                      Shop for a delightful shopping experience!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-item cursor-pointer">
            <div className="container-fluid p-0">
              <div className="row">
                <div className="col-12">
                  <div className="imgss-txt mx-auto">
                    <p className="imgss-h">Cinematic Videos</p>
                    <p className="imgss-c">
                      Unveil the rich tapestry of Cow Paradise through our
                      captivating cinematic videos. Immerse yourself in the
                      spellbinding narrative that unfolds the intriguing
                      background story of the game. Uncover secrets, mysteries,
                      and the whimsical history that shaped this extraordinary
                      world. Let the cinematic journey deepen your connection to
                      the enchanting universe of Cow Paradise.
                    </p>
                  </div>
                  <div className="imgss">
                    <img src="https://cowparadisegames.com/wp-content/uploads/2024/02/11CowParadiseExploration.00_00_16_27.Still001.webp" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-item cursor-pointer">
            <div className="container-fluid p-0">
              <div className="row">
                <div className="col-12">
                  <div className="imgsss mt-5 pt-3">
                    <img src="https://cowparadisegames.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-02-21-at-23.50.15-scaled-1.webp" />
                  </div>
                  <div className="imgsss-txt">
                    <p className="imgsss-h">Beach wears</p>
                    <p className="imgsss-c">
                      Elevate your cow style in our Clothing Shop! Explore a
                      trendy collection of outfits and accessories to customize
                      your avatar. Use your collected coins to express your
                      unique personality and stand out in Cow Paradise. Dress up
                      in style and make your mark on the island with our
                      fashionable selections!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div className="l-none sm-block">
        <Slider {...settings}>
          <div className="slider-item cursor-pointer">
            <div className="container-fluid p-0">
              <div className="row">
                <div className="col-12">
                  <div className="imgss-txt mx-auto">
                    <p className="imgss-h">Toy Shop</p>
                    <p className="imgss-c">
                      Discover real-world treasures available for your
                      enjoyment. From charming toys to exclusive merchandise,
                      bring the magic of Cow Paradise to life. Dive into the
                      Shop for a delightful shopping experience!
                    </p>
                  </div>
                  <div className="imgss nw">
                    <img src="https://cowparadisegames.com/wp-content/uploads/2024/06/Toy-1.webp" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-item cursor-pointer">
            <div className="container-fluid p-0">
              <div className="row">
                <div className="col-12">
                  <div className="imgss-txt mx-auto">
                    <p className="imgss-h">Cinematic Videos</p>
                    <p className="imgss-c">
                      Unveil the rich tapestry of Cow Paradise through our
                      captivating cinematic videos. Immerse yourself in the
                      spellbinding narrative that unfolds the intriguing
                      background story of the game. Uncover secrets, mysteries,
                      and the whimsical history that shaped this extraordinary
                      world. Let the cinematic journey deepen your connection to
                      the enchanting universe of Cow Paradise.
                    </p>
                  </div>
                  <div className="imgss mt-3">
                    <img src="https://cowparadisegames.com/wp-content/uploads/2024/02/11CowParadiseExploration.00_00_16_27.Still001.webp" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-item cursor-pointer">
            <div className="container-fluid p-0">
              <div className="row">
                <div className="col-12">
                  <div className="imgss-txt mx-auto">
                    <p className="imgss-h">Beach wears</p>
                    <p className="imgss-c">
                      Elevate your cow style in our Clothing Shop! Explore a
                      trendy collection of outfits and accessories to customize
                      your avatar. Use your collected coins to express your
                      unique personality and stand out in Cow Paradise. Dress up
                      in style and make your mark on the island with our
                      fashionable selections!
                    </p>
                  </div>
                  <div className="imgss">
                    <img src="https://cowparadisegames.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-02-21-at-23.50.15-scaled-1.webp" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Slider3D;
