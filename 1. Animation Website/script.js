const main = document.querySelector("#main");
const image = document.querySelector("#body>img");
const hand = document.querySelector("#hand");

main.addEventListener("mousemove", function(move){
    image.style.top = move.y*0.05 + "px";
    image.style.left = move.x*0.05 + "px";
})


main.addEventListener("mousemove", function(move){
    hand.style.top = move.y*0.05 + "px";
})
