gsap.from("#slider",{
    x:-400,
    duration:2,
    // delay:1,

})

gsap.from("#card1",{
    x:-400,
    // y:-800,
    duration:2,
    // rotate:360,
    // delay:1,
})
gsap.from("#card2",{

    y:-200,
    duration:2,
    // rotate:360,
    // delay:1,
})
gsap.from("#card3",{

    y:200,
    duration:2,
    // rotate:360,
    // delay:1,
})
gsap.from("#card4",{
    x:400,
    // y:-800,
    duration:2,
    // rotate:360,
    // delay:1,
})
gsap.from("#bcard",{
    x:-800,
    // y:-800,
    duration:2,
    // rotate:360,
    // dealy:1,
})
var tl = gsap.timeline() 
tl.from(".logo",{
    y:-100,
    opicty:0,
    duration:1,
    // stagger:0.3
})
tl.from("a",{
    y:-100,
    opicty:0,
    duration:1,
    stagger:0.3
})

gsap.from("#bcarda",{
    x:-500,
    duration:2,
    opicty:0,
    scrollTrigger:"#bcarda",
})
gsap.from("abouth1",{

    x:-400,
    duration:1,
    opicty:0,
}
)
gsap.from("#abouta",{

    x:-400,
    duration:1,
    
    opicty:0,
}
)
gsap.from(".lista",{
    scale:0,
    duration:2,
    scrollTrigger:".lista"
})
gsap.from("#mark",{
    x:-400,
    scale:0,
    duration:2,
    scrollTrigger:"#mark"
})
gsap.from("#the",{
    x:400,
    scale:0,
    duration:2,
    scrollTrigger:"#the"
})
gsap.from("#the1",{
    x:-400,
    scale:0,
    duration:2,
    scrollTrigger:"#the1"
})
gsap.from("#bcarda3",{
    x:-400,
    scale:0,
    duration:2,
    scrollTrigger:"#bcarda3"
})
gsap.from(".con",{
    x:-400,
    duration:2,
    opicty:0,
    stagger:0.3
})
// gsap.from("#abh1",{
//     x:-400,
//     duration:1,
//     opicty:0,
//     scrollTrigger:"#abh1",
// })
gsap.from("#ec1",{
    y:150,
    duration:2,
    scrollTrigger:"#ec1"
})
gsap.from("#conhl",{
    scale:0,
    duration:2,
    scrollTrigger:"#conhl"
})
gsap.from("#home",{
    scale:0,
    duration:2,
    scrollTrigger:"#home"
})