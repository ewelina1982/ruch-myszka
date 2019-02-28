document.body.addEventListener('mousemove',(e)=>{
const x = e.clientX;
const y = e.clientY;
document.querySelector('h1').textContent= x +','+y;
const red =100;
    const green = 10;
    const blue= 50;
    
    document.body.style.backgroundColor = `rgb(${red}%, ${green}%,${blue}%)`
    
})
