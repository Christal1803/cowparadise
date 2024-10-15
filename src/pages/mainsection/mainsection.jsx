import Header from '../header/header';
import '../mainsection/mainsection.css';

function Mainsection() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 p-0'>
                    <div className='hero position-relative'>
                        <div className='sticky'>
                            <Header />
                        </div>

                        <img src='https://cowparadisegames.com/wp-content/uploads/2024/06/signboard.webp' className='img-fluid sign-board px-5'  />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mainsection;
