// gsap.to(".box",{
//     x:700,
//     delay:1,
//     duration: 2,
// });
// gsap.from(".box",{
//     x:700,
//     delay:1,
//     duration: 4,
// });

//TEXT LEFT TO RIGHT

// gsap.to("h1",{
//     x:700,
//     delay:1,
//     duration:2,
//     // stagger: 1
//     repeat:-1,
//     yoyo:true
// });

var tL = gsap.timeline()

tL.to(".first",{
   
    y:-550,
    duration:1
})
tL.to(".first",{
    opacity : 0,
    duration:1
})

tL.to(".second",{
    y:-550,
    duration:1
})
tL.to(".second",{
    opacity : 0,
    duration:1
})

tL.to(".third",{
    y:-550,
    duration:1
})
tL.to(".third",{
    opacity : 0,
    duration:1
})
