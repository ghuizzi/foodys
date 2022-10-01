import React from "react";
import imageHero2 from "../images/imageHero2.jpg";
import Wavy from "../components/icons/Wavy";
import "../styles/home.css";
import ContentProducts from "../components/ContentProducts";
function Home() {
  return (
    <div>
      <div>
        <img className="hero1" src={imageHero2} alt="imageHero1" />
        <div className="bgWavy">
          <Wavy width="100%" />
        </div>
        <div className="typesProducts">
          <ContentProducts />
        </div>
      </div>
    </div>
  );
}

export default Home;
