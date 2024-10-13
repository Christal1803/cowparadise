import Character from "../character/character";
import Comingsoon from "../comingsoon/comingsoon";
import Footer from "../footer/footer";
import Gamemodes from "../gamemodes/gamemodes";
import Header from "../header/header";
import Mainsection from "../mainsection/mainsection";
import Playgame from "../playgame/playgame";
import Watchtrailer from "../watchtrailer/watchtrailer";

function Home() {
  return (
    <div>
{/* <Header/> */}
<Mainsection/>
<Watchtrailer/>
<Gamemodes/>
<Playgame/>
<Character/>
<Comingsoon/>
<Footer/>
    </div>
  );
}

export default Home;
