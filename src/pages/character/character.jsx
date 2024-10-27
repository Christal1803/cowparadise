import '../character/character.css';
import m1 from "../../assets/main1.png";
import m2 from "../../assets/main2.png";
import m3 from "../../assets/main3.png";
import c1 from "../../assets/char1.png";
import c2 from "../../assets/char2.png";
import c3 from "../../assets/char3.png";

function Character() {
    const characters = [
        { name: 'JACK', mainImg: m1, charImg: c2 },
        { name: 'THUNDER', mainImg: m2, charImg: c1 },
        { name: 'SUNNY', mainImg: m3, charImg: c3 }
    ];

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='character'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000"  >
                                <div className="carousel-inner">
                                    {characters.map((character, index) => (
                                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                            <p className='char-name mt-5 mb-2'>{character.name}</p>
                                            <img src={character.charImg} className="d-block img-fluid" alt={character.name} />
                                        </div>
                                    ))}
                                </div>
                                <div className="carousel-indicators">
                                    {characters.map((character, index) => (
                                        <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to={index}
                                            className={`thumbnail ${index === 0 ? 'active' : ''}`}
                                            aria-current={index === 0 ? 'true' : undefined}
                                            aria-label={`Slide ${index + 1}`}
                                            key={index}
                                        >
                                            <img src={character.mainImg} className="d-block w-100 h-126" alt={character.name} />
                                        </button>
                                    ))}
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
