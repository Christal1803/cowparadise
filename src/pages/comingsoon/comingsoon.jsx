import "../comingsoon/comingsoon.css";
import coming from "../../assets//coming_soon_board.png";


function Comingsoon() {

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='comingsoon'>
                    <div class="widget-container">
                        <img className='img-fluid mx-auto' src={coming} alt="" />
                    </div>

                    <div className="col-12 mt-5 char">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-2">
                                <img class="img-fluid mx-auto" src="https://cowparadisegames.com/wp-content/uploads/2024/02/Protagoniste_artist-300x300.webp" alt="Image 1" />
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-2">
                                <img class="img-fluid mx-auto" src="https://cowparadisegames.com/wp-content/uploads/2024/02/Protagoniste_cook-300x300.webp" alt="Image 2" />
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-2">
                                <img class="img-fluid mx-auto" src="https://cowparadisegames.com/wp-content/uploads/2024/02/Protagoniste_cop-300x300.webp" />
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-2">
                                <img class="img-fluid mx-auto" src="https://cowparadisegames.com/wp-content/uploads/2024/02/Protagoniste_Indiana-300x300.webp" />
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-2">
                                <img class="img-fluid mx-auto" src="https://cowparadisegames.com/wp-content/uploads/2024/02/Protagoniste_main_Character-300x300.webp" />
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-2">
                                <img class="img-fluid mx-auto" src="https://cowparadisegames.com/wp-content/uploads/2024/02/Protagoniste_Nurse-300x300.webp" alt="Image 6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comingsoon;