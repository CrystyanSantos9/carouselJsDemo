var slider = document.querySelector('.slider');
var container = slider.querySelector('.slider-container');
var buttonRight = document.querySelector('#touchR');
var buttonLeft = document.querySelector('#touchL');

container.addEventListener('touchstart', e=>{
    let image = e.target.style.transform = 'rotateX(0deg)'
})

container.addEventListener('touchend', e=>{
    let image = e.target.style.transform = 'perspective(7.5cm) rotateX(-15deg) rotateY(15deg)'

})

container.addEventListener('mouseover', e=>{
    let image = e.target.style.transform = 'rotateX(0deg)'
})

container.addEventListener('mouseout', e=>{
    let image = e.target.style.transform = 'perspective(7.5cm) rotateX(-15deg) rotateY(15deg)'
    
})







buttonRight.addEventListener("touchstart", clickMovetToRight);
buttonLeft.addEventListener("touchstart", clickMovetToLeft);



var origem = 0;
var total = 0;
var origemBtn = 0;

// calcula o ponto inicial de toque
slider.ontouchstart = function(e){
origem = e.changedTouches[0].clientX;
}

function clickMovetToRight(e){
// var deslocamento = e.changedTouches[0].clientX + origemBtn;
// var posicao = deslocamento + total;
origemBtn = origemBtn + 220;
console.log(origemBtn)
var deslocamento = origemBtn;
container.style.transform = 'translateX(' + deslocamento + 'px)';
container.style.transition='ease-in-out, transform 0.7s ease-in-out';

}

function clickMovetToLeft(e){
    origemBtn = origemBtn - 220;
// var deslocamento = e.changedTouches[0].clientX + origemBtn;
// var posicao = deslocamento + total;
console.log(origemBtn)
var deslocamento = origemBtn;
container.style.transform = 'translateX(' + deslocamento + 'px)';


container.style.transition='ease-in-out, transform 0.5s ease-in-out';

}



slider.ontouchmove = function(e){
// calcula o quanto o dedo moveu com relação a origem do 1o toque
var deslocamento = e.changedTouches[0].clientX - origem;
var posicao = deslocamento + total;
container.style.transform = 'translateX(' + deslocamento + 'px)';

}

slider.ontouchend = function(e) {
total += e.changedTouches[0].clientX - origem;
}


    //   const switchBtn = document.getElementsByClassName("switch");

    //   const printScreen = document.querySelector(".screen")

    // //   console.log(printScreen)

    //   console.log(switchBtn[1].addEventListener('touchstart',toqueAntes))
    //   console.log(switchBtn[1].addEventListener('touchend',toqueDepois))


    //   console.log(switchBtn[0].addEventListener('touchmove',touchMoved))
     

let start=0; //armazena tempo inicial do toque

 //calcula tempo de toque iniciado na tela 
 function toqueAntes(e){
     start = new Date().getTime();
     console.log(start)
 }
 
 function toqueDepois(e){
    let agora = new Date().getTime();
     // se start foi há menos de 100ms, dispara ação
        if (agora <= start + 150) {
        troca(e);
        }
 }  
 
 //funcao que verfica o touchmove
 function touchMoved(e){
    var toque = e.changedTouches[0];
    var val = `Valores da tela no eixo X = ${toque.clientX} e no eixo Y = ${toque.clientY}`
    printScreen.innerHTML = val
console.log('X: ' + toque.clientX);
console.log('Y: ' + toque.clientY);

 }
      
function troca(e) {
   
    const target = e.currentTarget

   console.log(target)
}