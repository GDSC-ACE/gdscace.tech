
var info  = $("#info");
var wheel = $("#wheel");

var border = parseInt(wheel.css("border-width"));
var radius = Math.min(window.innerWidth, window.innerHeight) * 0.7 / 2;
var center = radius - border / 2;
var total  = 1;
var slice  = 2 * Math.PI / total;

TweenLite.set(wheel, {
  width:  (radius * 2) - border,
  height: (radius * 2) - border,
  xPercent: -50,
  yPercent: -50
});

for (var i = 0; i < total; i++) {
  createBox(i);
}

var titles = [
  "1PM ->Assembly",
  "The Journey Begins",
  "Into the Unknown",
  "A New Chapter",
  "Uncharted Territories",
  "Beyond the Horizon"
]; 

var titleIndex = 0;
var lastTitleUpdateRotation = -20;

Draggable.create(wheel, {
  type: "rotation",
  throwProps: true,
  bounds: { minRotation: 0, maxRotation : -180} ,
  minimumMovement: 10,
  onDrag: function() {
    updateTitleOnRotation(this.rotation);
  },
  onThrowUpdate: function() {
    updateTitleOnRotation(this.rotation);
  }
});

function createBox(i) {
    
  var num = i + 1;
  var hue = i / total * 360;  
  var angle = i * slice;
  
  var x = center + radius * Math.sin(angle);
  var y = center - radius * Math.cos(angle);

  //Shamz- assigned a class astro
  var box = $("<img class='astro' src='img/rocket.png' />").appendTo(wheel);
  
  TweenLite.set(box, {
    rotation: angle + "_rad",
    xPercent: -50,
    yPercent: -50,
    x: x,
    y: y
  });
};

function updateTitleOnRotation(rotation) {
  // Normalize the rotation to ensure it's within a 0-360 range
  var normalizedRotation = ((rotation % 360) + 360) % 360;
  // Calculate the difference from the last update
  var rotationDifference = Math.abs(normalizedRotation - lastTitleUpdateRotation);
  if (rotationDifference >= 20) {
    // Update the <h1> element's text with the current title from the array
    $("#title").text(titles[titleIndex]);
    // Update the index for the next title, cycling back to 0 if at the end of the array
    titleIndex = (titleIndex + 1) % titles.length;
    // Update lastTitleUpdateRotation to the current normalizedRotation
    lastTitleUpdateRotation = normalizedRotation;
  }
}