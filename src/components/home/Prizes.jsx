//Dhruv P
import React, { Component } from "react";

export default class Prizes extends Component {
  render() {
    return (
      <section className="min-h-[100svh] flex flex-col justify-center gap-y-20 items-center">
        <h2 className="font-serif text-4xl max-w-[150px] inline-block text-white">
          Prizes
        </h2>

        <div className="square">
          <div className="prize-value">
            <img
              className="planet1"
              src={"/assets/planet3.png"}
              alt="planet1"
            />
            <span>
              <img className="rocks" src={"/assets/rocks.png"} alt="rocks" />
              <p> &#8377; 50,000</p>
            </span>
          </div>

          <div className="prize-value">
            <img
              className="planet2"
              src={"/assets/planet2.png"}
              alt="planet2"
            />
            <span>
              <img className="rocks" src={"/assets/rocks.png"} alt="rocks" />
              <p> &#8377; 25,000</p>
            </span>
          </div>

          <div className="prize-value">
            <img
              className="planet3"
              src={"/assets/planet1.png"}
              alt="planet3"
            />
            <span>
              <img className="rocks" src={"/assets/rocks.png"} alt="rocks" />
              <p> &#8377; 10,000</p>
            </span>
          </div>
        </div>
      </section>
    );
  }
}
