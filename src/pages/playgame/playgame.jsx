import '../playgame/playgame.css';
import playleft from '../../assets/playgameleft.png';
import earn from '../../assets/earncoins.png'

function Playgame() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='playgames '>
                    <div className='container'>
                        <div className='row'>
                            <div>
                                <div className='col-sm-12 d-flex justify-content-center mx-auto'>
                                    <div className='my-auto col-sm-12' style={{ width: '500px' }}>
                                        <img className='img-fluid' src="https://cowparadisegames.com/wp-content/uploads/2024/06/earn_coin_board.webp" alt="" />

                                        <div className='about mt-3 text-start fw-300'>
                                            <p>Play to receive unique bonuses and unlock new items. <br />These points can be used to purchase real life assets from our<br />  marketplace in feature.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src={earn} className='img-fluid' />
                                    </div>
                                </div>

                                <div className='col-12 '>
                                    <img src='https://cowparadisegames.com/wp-content/uploads/2024/06/fence2.webp' className='img-fluid mx-4 earn-fencing' />
                                </div>


                                <div className='col-12 d-flex justify-content-center mx-auto'>
                                    <div>
                                        <img src={earn} className='img-fluid' />
                                    </div>
                                    <div className='my-auto ' style={{ width: '500px' }}>
                                        <img className='img-fluid' src="https://cowparadisegames.com/wp-content/uploads/2024/06/unlock_characters_board.webp" alt="" />

                                        <div className='about mt-3 text-start fw-300'>
                                            <p>Spend your collected coins to unlock new characters, customize them to your liking, and enjoy playing with these personalized avatars in all games of cow  paradise alongside your friends.</p>
                                        </div>
                                    </div>

                                </div>

                                <div className='col-12 px-5'>
                                    <img src='https://cowparadisegames.com/wp-content/uploads/2024/06/fence2.webp' className='img-fluid' />
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
