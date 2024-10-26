import "../uer/uer.css";
import coming from "../../assets//coming_soon_board.png";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "preline/preline";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../slider/slider.css";

function Uer() {
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
    const location = useLocation();

    useEffect(() => {
        window.HSStaticMethods.autoInit(["carousel", "dropdown"]);
    }, [location.pathname]);


    return (
        <div className="container-fluid" id='comingsoon'>
            <div className="row">
                <div className="comingsoon">
                    <div class="widget-container se">
                        <img className="img-fluid mx-auto" src={coming} alt="" />
                    </div>
                    <div className="container">
                        <div className="row">
                        <Slider {...settings}>
                        <div className="slider-item cursor-pointer">
                            <div className="imgs">
                               <img src="https://cowparadisegames.com/wp-content/uploads/2024/06/Toy-1.webp"/>
                            </div>
                            <div className="imgs-txt">
                            <p className="imgs-h">Toy Shop 
								</p>
                                <p className="imgs-c">Discover real-world treasures available for your enjoyment. From charming toys to exclusive merchandise, bring the magic of Cow Paradise to life. Dive into the Shop for a delightful shopping experience! 
                                </p>
                            </div>
                        </div>
                        <div className="slider-item cursor-pointer">
                        <div className="imgss-txt mx-auto">
                            <p className="imgss-h">Cinematic Videos 
								 
								</p>
                                <p className="imgss-c">Unveil the rich tapestry of Cow Paradise through our captivating cinematic videos. Immerse yourself in the spellbinding narrative that unfolds the intriguing background story of the game. Uncover secrets, mysteries, and the whimsical history that shaped this extraordinary world. Let the cinematic journey deepen your connection to the enchanting universe of Cow Paradise.  
                                </p>
                            </div>
                            <div className="imgss">
                               <img src="https://cowparadisegames.com/wp-content/uploads/2024/02/11CowParadiseExploration.00_00_16_27.Still001.webp"/>
                            </div>
                            
                        </div>
                        <div className="slider-item cursor-pointer">
                        <div className="imgsss">
                               <img src="https://cowparadisegames.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-02-21-at-23.50.15-scaled-1.webp"/>
                            </div>
                            <div className="imgsss-txt">
                            <p className="imgsss-h">Beach wears
								</p>
                                <p className="imgsss-c">Elevate your cow style in our Clothing Shop! Explore a trendy collection of outfits and accessories to customize your avatar. Use your collected coins to express your unique personality and stand out in Cow Paradise. Dress up in style and make your mark on the island with our fashionable selections!  
                                </p>
                            </div>
                        </div>
                    </Slider>
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
    );
}

export default Uer;
