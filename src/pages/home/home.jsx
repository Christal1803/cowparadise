import Character from "../character/character";
import Comingsoon from "../comingsoon/comingsoon";
import Contactus from "../contactus/contactus";
import Footer from "../footer/footer";
import Gamemodes from "../gamemodes/gamemodes";
import Header from "../header/header";
import Mainsection from "../mainsection/mainsection";
import Playgame from "../playgame/playgame";
import Slider3D from "../slider/slider3D";
import Team from "../team/team";
import Watchtrailer from "../watchtrailer/watchtrailer";

function Home() {
  return (
    <>
    <div>
      {/* <Header/> */}
      <Mainsection />
      <Watchtrailer />
      <Gamemodes />
      <Playgame />
      <Character />
      <Comingsoon />
      <Team />
      <Contactus />
      <Slider3D/>
      <Footer />
    </div>
    </>
    
  );
}

export default Home;
