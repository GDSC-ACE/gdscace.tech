import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <aside className="w-[25svh] h-[80svh] fixed">
        <nav className="h-full">
          <ul className="text-white list-none pl-12 flex flex-col justify-center h-full gap-y-3 font-semibold lg:font-bold text-md lg:text-xl">
            <li>Home</li>
            <li>About</li>
            <li>Domains</li>
            <li>Prizes</li>
            <li>Timeline</li>
            <li>Sponsors</li>
            <li>FAQs</li>
            <li>Contact</li>
          </ul>
        </nav>
      </aside>
    );
  }
}
