//Akshata
import React, { Component } from 'react'
import '../../styles/global.css';
import "./Sidebar.css"

export default class Sidebar extends Component {
  render() {
    return (

      <div className="Navbar sidebar-content h-full w-1/4 fixed  ">

        
        <nav className="mt-10 ml-20">
          <ul className="list-none ">
            <li className="py-2 px-4 mb-5 mt-40 text-3xl ">Home</li>
            <li className="py-2 px-4 mb-5 text-3xl ">About Us</li>
            <li className="py-2 px-4 mb-5 text-3xl">Domain</li>
            <li className="py-2 px-4 mb-5 text-3xl ">Prizes</li>
            <li className="py-2 px-4 mb-5 text-3xl">Timeline</li>
            <li className="py-2 px-4 mb-5 text-3xl">Sponsors</li>
            <li className="py-2 px-2 mb-5 text-3xl">FAQ's</li>
            <li className="py-2 px-4 mb-5 text-3xl">Contact Us</li>



          </ul>
        </nav>
      </div>

    )
  }
}
