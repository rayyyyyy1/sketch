let color='black';
let sizes=16;
makeGrid(sizes);
let colorArray=['blue',
    'yellow','green','pink','red'];
  //  color=colorArray[Math.floor(Math.random() * colorArray.length)];
function makeGrid(size){
if (size<2 || size>100){
    document.querySelector(".warning").textContent='try again';
    return;}
    sizes=size;
    color='white';
let buci=document.querySelector('.all');
let squares= buci.querySelectorAll('div');
squares.forEach((div) => {
    div.remove();
});
buci.style.gridTemplateColumns= `repeat(${size} , 1fr)`;
buci.style.gridTemplateRows=`repeat(${size} , 1fr)`;

for(let i=0;i<size*size;i++){
    let square= document.createElement('div');
    square.style.backgroundColor='white';
    square.addEventListener('mouseover',addEvent);
    buci.insertAdjacentElement('beforeend',square);
    }
}
function addEvent(){
    if (color==='random')
        this.style.backgroundColor=colorArray[Math.floor(Math.random() * colorArray.length)];
    else this.style.backgroundColor=color;
}

function changeColor(col){
   color=col;
}
    