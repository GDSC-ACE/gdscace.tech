import React, { Component } from 'react'
import gsap from 'gsap';
import Draggable from 'gsap/Draggable';
import './timeline.css';
import '.static/timeline.js';

export default class Timeline extends Component {
  render() {
    return (
      <section>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Draggable Rocket</title>
          <link rel="stylesheet" href="timeline.css" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/Draggable.min.js"></script>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        </head>
        <body>
          <h1 id="title">Draggable Rocket</h1>
          <div className="wrapperModel">
            <div id="container3D"></div>
          </div>
          <div id="wheel"></div>
        </body>
        <script type="module" src="timeline.js"></script>
        <script type="module" src="circular.js"></script>
      </section>
    )
  }
}
