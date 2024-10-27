import "../comingsoon/comingsoon.css";
import coming from "../../assets//coming_soon_board.png";
import { useEffect } from "react";
import { useLocation } from "react-router-dom"; 
import "preline/preline";
import Slider from "react-slick";
import Slider3D from "../slider/slider3D";
import artist from "../../assets/Protagoniste_artist-300x300.jpg"
import cook from "../../assets/Protagoniste_cook-300x300.jpg"
import cop from "../../assets/Protagoniste_cop-300x300.jpg"
import indiana from "../../assets/Protagoniste_Indiana-300x300.jpg"
import main from "../../assets/Protagoniste_main_Character-300x300.jpg"
import nurse from "../../assets/Protagoniste_Nurse-300x300.jpg"

function Comingsoon() {
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
                    <div className="col-12 mt-5 char">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-2">
                                <img
                                    class="img-fluid mx-auto character-pics mt-3"
                                    src={artist}
                                    alt="Image 1"
                                />
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-2 mt-3">
                                <img
                                    class="img-fluid mx-auto character-pics"
                                    src={cook}
                                    alt="Image 2"
                                />
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-2 mt-3">
                                <img
                                    class="img-fluid mx-auto character-pics"
                                    src={cop}

                                />
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-2 mt-3">
                                <img
                                    class="img-fluid mx-auto character-pics"
                                    src={indiana}

                                />
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-2 mt-3">
                                <img
                                    class="img-fluid mx-auto character-pics"
                                    src={main}

                                />
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-2 mt-3">
                                <img
                                    class="img-fluid mx-auto character-pics"
                                    src={nurse}
                                    alt="Image 6"
                                />
                            </div>
                        </div>
                    </div>


                    <div className="col-12 my-5 ">

                        <Slider3D />

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Comingsoon;
