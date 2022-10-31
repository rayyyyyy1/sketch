let color='black';
makeGrid(16);

function makeGrid(size){
let buci=document.querySelector('.all');
buci.style.gridTemplateColumns= `repeat(${size} , 1fr)`;
buci.style.gridTemplateRows=`repeat(${size} , 1fr)`;

for(let i=0;i<size*size;i++){
    let square= document.createElement('div');
    square.style.backgroundColor='black';
    square.addEventListener('mouseover',()=>{
        square.style.backgroundColor=color;
    });
    buci.insertAdjacentElement('beforeend',square);
}
}
function changeColor(change){
    color=change;
}
    