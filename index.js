const contained = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
let div = document.createElement("div");
div.style.width = "35px";
div.style.height = "35px";
div.style.position = "relative"
div.style.background = "black";


div.addEventListener('mouseover',function white () {
    div.style.background = "blue";
    console.log("hovering")
})




contained.appendChild(div);
    
}

/*changing color*/




