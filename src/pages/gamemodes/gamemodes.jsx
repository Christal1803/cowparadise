import '../gamemodes/gamemodes.css';

function Gamemodes() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='gamemodes'>
                    <div class="widget-container">
                        <img className='img-fluid' src="https://cowparadisegames.com/wp-content/uploads/2024/06/game_modes_board.webp" alt="" />
                    </div>
                    <div className='col-12 my-5 char'>
                    <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <video class="d-block w-100" autoPlay muted loop>
                <source src="https://cowparadisegames.com/wp-content/uploads/2024/09/videoplayback-1.mp4" type="video/mp4" />
            </video>
            <div class="video-caption">
                <div className='col-12 caption'>
                    <h3 className='align-self-center fw-bold f-30'>Endless Runner Game</h3>
                    <a class="btn-button inline-flex items-center font-medium text-sm rounded-lg bg-blue-600 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-blue-500" href="#">
                      Learn More
                    </a>
                </div>
            </div>
        </div>
        <div class="carousel-item">
            <video class="d-block w-100" autoPlay muted loop>
                <source src="https://cowparadisegames.com/wp-content/uploads/2024/09/videoplayback-3.mp4" type="video/mp4" />
            </video>
            <div class="video-caption">
                <div className='col-12 caption'>
                    <h3 className='align-self-center fw-bold f-30'>Open World Game</h3>
                    <a class="btn-button inline-flex items-center font-medium text-sm rounded-lg bg-blue-600 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-blue-500" href="#">
                      Learn More
                    </a>
                </div>
            </div>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>



                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gamemodes;
