import '../playgame/playgame.css';
import playleft from '../../assets/playgameleft.png';
import earn from '../../assets/earncoins.png'
import e2 from "../../assets/earn22.png";
import playb from "../../assets/play_game_board.jpg";
import surf from "../../assets/surfboard-pose1-1536x1536.jpg";
import f1 from "../../assets/fence1.jpg";
import f2 from "../../assets/fence2.jpg";
import eboard from "../../assets/earn_coin_board.jpg";
import uboard from "../../assets/unlock_characters_board.jpg";
function Playgame() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='playgames '>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-4 col-sm-12  col-md-12'>
                                <img src={playleft} className='img-fluid mt-4' />
                            </div>
                            <div className='col-lg-4 col-sm-12  col-md-12'>
                            </div>
                            <div className='col-lg-4 col-sm-12  col-md-12' >
                                <img className='img-fluid' src={playb} alt="" />

                                <div className='about mt-3'>
                                    <p>Cow Paradise is a community that offers a variety of engaging games. Players can enjoy these games with friends, earn bonuses, and positively impact the real world by donating their points to charity, seamlessly combining entertainment with social impact.</p>
                                </div>
                            </div>
                        </div>

                        <div className='fencing position-relative'>
                            <img src={surf} width={840} className='img-fluid m-img'  />

                            <img src={f1} className='img-fluid' />
                        </div>
                        <div className='row'>
                            <div>
                                <div className='col-sm-12 d-sm-block d-lg-flex justify-content-center mx-auto'>
                                    <div className='my-auto col-sm-12 w-500' >
                                        <img className='img-fluid' src={eboard} alt="" />

                                        <div className='about mt-3 text-start fw-300'>
                                            <p>Play to receive unique bonuses and unlock new items. <br />These points can be used to purchase real life assets from our<br />  marketplace in feature.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src={earn} className='img-fluid' />
                                    </div>
                                </div>

                                <div className='col-12 '>
                                    <img src={f2} className='img-fluid mx-4 earn-fencing' />
                                </div>


                                <div className='col-12 d-sm-block d-lg-flex  justify-content-center mx-auto'>
                                    <div>
                                        <img src={e2} className='img-fluid' />
                                    </div>
                                    <div className='my-auto w-500'>
                                        <img className='img-fluid' src={uboard} alt="" />

                                        <div className='about mt-3 text-start fw-300 mb-5'>
                                            <p>Spend your collected coins to unlock new characters, customize them to your liking, and enjoy playing with these personalized avatars in all games of cow  paradise alongside your friends.</p>
                                        </div>
                                    </div>

                                </div>

                                <div className='col-12 f2'>
                                    <img src={f2} className='img-fluid px-4' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

         
        </div>

    );
}

export default Playgame;
