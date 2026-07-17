import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import PesquisaBar from "./components/PesquisaBar";
import Froggy from "./components/Froggy";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {

  const [clima, setClima] = useState(null);
console.log("setClima no App:", setClima);
console.log("tipo:", typeof setClima);
  return (
    <div id="pagina1">

      <Navbar/>

      <PesquisaBar setClima={setClima}/>

      <Froggy clima={clima}/>

      <About/>

      <Footer/>

    </div>
  );
}

export default App;