import '../watchtrailer/watchtrailer.css';
import board from "../../assets/watch_trailer_board.jpg"
function Watchtrailer() {
  return (
    <div>
      <div className='container-fluid watchtrailer' id='trailer'>
        <div className='row'>
          <div className='col-12'>
            <div className="widget-container" >
              <img className='img-fluid' src={board} alt="" />
            </div>
          </div>
          <div className='col-12 my-5 char'>
            <div id="carouselExampleFade" className="carousel slide video carousel-fade bg-black">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="video-container">
                    <video className="d-block w-100 h-100" autoPlay muted loop>
                      <source src="https://cowparadisegames.com/wp-content/uploads/2024/09/videoplayback-1.mp4" type="video/mp4" />
                    </video>
                    <div className="carousel-caption d-none d-md-block">
                      <div className='text-start v-cation'>
                        <h5 className='video-caption-title'>Cinematic Trailer </h5>
                        <button className='v-c-btn' data-bs-target="#carouselExampleFade" data-bs-slide="prev">PREV </button>
                        <span className='v-c-btn'>/</span>
                        <button className='v-c-btn' type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">NEXT</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="video-container">
                    <video className="d-block w-100 h-100" autoPlay muted loop>
                      <source src="https://cowparadisegames.com/wp-content/uploads/2024/09/videoplayback-3.mp4" type="video/mp4" />
                    </video>
                    <div className="carousel-caption d-none d-md-block">
                      <div className='text-start v-cation'>
                        <h5 className='video-caption-title'>Story Trailer </h5>
                        <button className='v-c-btn' data-bs-target="#carouselExampleFade" data-bs-slide="prev">PREV </button>
                        <span className='v-c-btn'>/</span>
                        <button className='v-c-btn' type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">NEXT</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Watchtrailer;
