import React from "react";
import "../src/app.css"
import Banner from "./Components/Banner/Banner";
import Navebar from "./Components/Navebar/Navbar";
import Rowpost from "./Components/Rowpost/Rowpost";
import {Action,originals} from "../src/url"


function App() {
  return (
    <div className="App">
      <Navebar />
      <Banner />
      <Rowpost url={originals} title='Netflix originals'/>
      <Rowpost url={Action} title='Action' isSmall={true}/>

    </div>

  );
}

export default App;
