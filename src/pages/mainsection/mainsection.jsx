import Header from '../header/header';
import '../mainsection/mainsection.css';
import sboard from "../../assets/signboard.jpg"
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";


function Mainsection() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className='container-fluid' id="home">
            <div className='row'>
                <div className='col-12 p-0'>
                    <div className='hero position-relative'>
                        <div className='sticky'>
                            {/* <Header /> */}
                        </div>
                        <div class="icon-bar " data-aos="fade-up">
                            <a href="https://www.facebook.com/profile.php?id=61552567389239&mibextid=9R9pXO" class="facebook"><i class="fa-brands fa-facebook"></i></a>
                            <a href="https://twitter.com/x/migrate?tok=7b2265223a222f436f77766572736547616d6573222c2274223a313731373837383536307d6e35fdc1f57a36117ffd893b7b13b6c9" class="twitter"><i class="fa-brands fa-twitter"></i></a>
                            <a href="https://www.youtube.com/@CowParadiseGames" class="youtube"><i class="fa-brands fa-youtube"></i></a>
                        </div>
                        <img src={sboard} className='img-fluid sign-board px-5' data-aos="fade-right" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mainsection;
