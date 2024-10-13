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
<Footer/>
    </div>
  );
}

export default Home;
