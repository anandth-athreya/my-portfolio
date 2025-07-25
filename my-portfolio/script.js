let img = document.getElementById
("myImage");
let position=0;
function moveright(){
    position +=2;
    img.style.left=position + 'px';
    if(position<window.innerWidth-100){
        requestAnimationFrame(moveright);

    }
}
window.onload=function(){
    moveright();
};
