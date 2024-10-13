import '../playgame/playgame.css';
import playleft from '../../assets/playgameleft.png';

function Playgame() {
    return (
        <div className='playgames '>
            <div className='row'>
                <div className='col-4'>
                    <img src={playleft} className='img-fluid mt-4' />
                </div>
                <div className='col-4'>
                </div>
                <div className='col-4'>
                    <img className='img-fluid' src="https://cowparadisegames.com/wp-content/uploads/2024/06/play_game_board.webp" alt="" />

                    <div className='about mt-3'>
                        <p>Cow Paradise is a community that offers a variety of engaging games. Players can enjoy these games with friends, earn bonuses, and positively impact the real world by donating their points to charity, seamlessly combining entertainment with social impact.</p>
                    </div>
                </div>
            </div>

            <div className='fencing position-relative'>
                <img src='https://cowparadisegames.com/wp-content/uploads/2024/06/surfboard-pose1-1536x1536.webp' width={840} className='img-fluid m-img' />

                <img src='https://cowparadisegames.com/wp-content/uploads/2024/06/fence1.webp' className='img-fluid' />
            </div>
        </div>
    );
}

export default Playgame;
