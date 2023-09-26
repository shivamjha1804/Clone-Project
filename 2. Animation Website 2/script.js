const videocon = document.querySelector("#video-container");
const playbtn = document.querySelector("#play");

videocon.addEventListener("mouseenter",function(){
    gsap.to(playbtn, {
        scale: 1,
        opacity: 1
    })
});

videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn, {
        scale: 0,
        opacity: 0
    })
});

videocon.addEventListener("movemove", function(dets){
    g
})