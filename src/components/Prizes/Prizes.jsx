//Dhruv P
import React, { Component } from "react";
import "../../styles/global.css";
import planet1 from "./Assets/planet1.png";
import planet2 from "./Assets/planet2.png";
import planet3 from "./Assets/planet3.png";
import rocks from "./Assets/rocks.png";

export default class Prizes extends Component {
  render() {
    return (
      <section className="Prizes font-cursive text-center text-3xl mt-44">
        <h2 className="prize-title text-white text-2x1 max-w-150px inline-block">Prizes</h2>
        
          <div className="square">
              <div className="prize-value">
                <img className="planet1" src={planet2} alt="planet1" />
                <div className="rank">1st</div>
                <span>
                  <img className="rock" src={rocks} alt="rock" />
                  <p> &#8377; 50,000</p>
                </span>
              </div>

              <div className="prize-value">
                <img className="planet2" src={planet3} alt="planet2" />
                <div className="rank">2nd</div>
                <span>
                  <img className="rock" src={rocks} alt="rock" />
                  <p> &#8377; 25,000</p>
                </span>
              </div>

              <div className="prize-value">
                <img className="planet3" src={planet1} alt="planet3" />
                <div className="rank">3rd</div>
                <span>
                  <img className="rock" src={rocks} alt="rock" />
                  <p> &#8377; 10,000</p>
                </span>
              </div>
            </div>
       
      </section>
    );
  }
}
