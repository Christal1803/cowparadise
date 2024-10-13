import Header from '../header/header';
import '../mainsection/mainsection.css';

function Mainsection() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 p-0'>
                    <div className='hero '>
                        <div className='sticky'>
                            <Header />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mainsection;
