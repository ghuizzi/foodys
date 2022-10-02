import React from "react";
import "../styles/stylesVariables/stylesContent/contentTypes.css";
import spaghetti from "../images/icons/spaghetti.png";
import bean from "../images/icons/bean.png";
import bread from "../images/icons/bread.png";
import salad from "../images/icons/salad.png";
function ContentProducts() {
  return (
    <div>
      <div className="types">
        <div className="categories">
          <img src={spaghetti} alt="" />
        </div>
        <div className="categories">
          <img src={bean} alt="" />
        </div>
        <div className="categories">
          <img src={bread} alt="" />
        </div>
        <div className="categories">
          <img src={salad} alt="" />
        </div>
      </div>
    </div>
  );
}
export default ContentProducts;
