import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import SuperHero from './components/SuperHero';

import "./style/landingpage.css"

function App() {
  return (
    <div>
      {/* intro section */}
      <div className="myBackGround">    
        <NavigationBar/>
        <Intro/>
      </div>
      {/* end section intro*/}

      {/* trending section */}
      <div className="myTrending">
        <Trending/>
      </div>
      {/* end section trending */}

      {/* super hero section  */}
      <div className="mySuperHero">
        <SuperHero/>
      </div>
      {/* end section super hero */}
    </div>
  );
}

export default App;
