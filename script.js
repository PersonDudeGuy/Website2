let deg = 0;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.addEventListener('mousemove', (event) => {
    mouseX = event.clientX + window.scrollX;
    mouseY = event.clientY + window.scrollY;
    (document.querySelectorAll(".dot")).forEach((item) => { 
        item.style.boxShadow = "0px 0px 10px " + (300 - Math.hypot(mouseX - item.getBoundingClientRect().x, mouseY - item.getBoundingClientRect().y))/30 + "px white";
    });
});


function hi(){
    (document.querySelectorAll(".dot")).forEach((item) => { 
        //item.style.left = (item.getBoundingClientRect().x + 1) + "px";
    });
    deg += 1;
    (document.querySelectorAll(".rainbow")).forEach((item) => {
        item.style.color = "hsl(" + deg + ", 99%, 80%)";
    });
    
    requestAnimationFrame(hi);
}

for (let i = 0; i <= 40; i++)
{
    const dot = document.createElement("div");
    dot.className = "dot";
    dot.style.top = getRandomInt(0, 100) + "vh";
    dot.style.left = getRandomInt(0, 100) + "vw";
    let container = document.getElementById("dotScreen");
    container.append(dot);
}

requestAnimationFrame(hi);

//        document.querySelector(".hello").style.color = "hsl(" + deg + ", 99%, 80%)";