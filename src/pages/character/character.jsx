import '../character/character.css';
import m1 from "../../assets/main1.png";
import m2 from "../../assets/main2.png";
import m3 from "../../assets/main3.png";
import c1 from "../../assets/char1.png";
import c2 from "../../assets/char2.png";
import c3 from "../../assets/char3.png";

function Character() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='character'>
                    <div className='container-fluid'>
                        <div className='row p-5'>



                            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">

                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <p className='char-name mt-5 mb-2'>JACK</p>
                                        <img src={c2} class="d-block img-fluid" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <p className='char-name mt-5 mb-2'>THUNDER</p>
                                        <img src={c1} class="d-block img-fluid" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                    <p className='char-name mt-5 mb-2'>SUNNY</p>
                                        <img src={c3} class="d-block img-fluid" alt="..." />
                                    </div>
                                </div>
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active thumbnail" aria-current="true" aria-label="Slide 1">
                                        <img src={m1} class="d-block w-100 h-126" alt="..." />
                                        <div >

                                        </div>
                                    </button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" class="thumbnail" aria-label="Slide 2">
                                        <img src={m2} class="d-block w-100 h-126" alt="..." />
                                    </button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" class="thumbnail" aria-label="Slide 3">
                                        <img src={m3} class="d-block w-100 h-126" alt="..." />
                                    </button>



                                </div>
                            </div>



                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Character;
