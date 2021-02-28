async function audio(){
    let btnPlay_innerText = document.querySelector("#btn_exec_play")
    audioObj = await new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3");
    if(btnPlay_innerText.innerHTML == "Stop music."){
        audioObj.pause()
    }
  if(window.confirm("Play audio?")){
      audioObj.play()
      btnPlay_innerText.innerHTML = "Stop music."
  }
}



//var global guarda o tamanho total das imagens no carousel
var totalImageWidth = 0;
//var global guarda o total de imagens carregadas
var totalImage = 0;

//executa código para renderizar imagens do slider
setTimeout(() => {
    //zera variáveis globais
    totalImage = 0;
    totalImageWidth = 0;
    //Funcao para calcular a largura total das imagens carregadas
    (async function getChild(obj) {
        //usado para armazer os objetos images
        const arrImgs = [];
        for (var i = 0 in obj) {
            // console.log(obj[i])
            if (obj[i].nodeName == "IMG") {

                //soma 1 para cada imagem encontrada
                totalImage += 1;
                //soma a largura total das imagens
                totalImageWidth = totalImageWidth + (parseInt(obj[i].width) * 1)
                // console.log(typeof(totalImageWidth))
            }
        } //aqui recebe o argumento
    })(slider.childNodes[1].childNodes).then(

        //Funcao para recalcular o tamanho do slider 
        (async function compareSliderWidth(totalImageWidth, totalSliderWidth) {
            const diff = await (totalSliderWidth - totalImageWidth) * -1;

            //pega o tamanho de uma imagem 
            const widhtOfOneImage = parseInt(totalImageWidth / totalImage)
            console.log("Total largura slider - total largura das imagens", diff)
            console.log("Tamanho de uma imagem", widhtOfOneImage)

            //se a largura total das imagens > que a largura do slider
            if (totalImageWidth > totalSliderWidth) {
                console.log("Imagens são maiores que o slider widht")
                //redimensiona o slider 
                container.style.width = `${slider_container_width+diff+300}px`
            }
        })(totalImageWidth, slider_container_width)

    )




}, 2000)

   //mostra largura total das imagens ao clicar no botão
   function showTotalImageWidth(){
    alert(totalImageWidth)
}


//contém o slider
var slider = document.querySelector('.slider');
//slider que contém a imagens
var container = slider.querySelector('.slider-container');

//pega o valor de largura do elemento slider 
const slider_container_width = slider.childNodes[1].offsetWidth

setInterval(()=>{
    total += -200

    if (((total * (-1)) > (totalImageWidth - 200)) || total > 2) {
        container.style.transform = 'translateX(' + 0 + 'px)';
        total = 0;
        console.log('Chegou ao final do carousel')
    }

    container.style.transform = 'translateX(' + total + 'px)';
    container.style.transition = 'ease-in-out, transform .35s ease-in-out'
    console.log("andando")
},2000)



// const imgLenght = getChild(slider.childNodes[1].childNodes)

console.log("Tamanho total do nosso slider", slider_container_width)
// console.log(imgLenght)
var origem = 0;
var total = 0;

//armazena valor da posição inicial do toque na tela 
slider.ontouchstart = function (e) {
    origem = e.changedTouches[0].clientX;
}


//evento que ocorre durante o toque na tela 
slider.ontouchmove = function (e) {
    var deslocamento = e.changedTouches[0].clientX - origem;
    var posicao = deslocamento + total;
    container.style.transform = 'translateX(' + posicao + 'px)';
    container.style.transition = 'ease-in-out, transform .35s ease-in-out'
}


//executa ao final do toque na tela 
slider.ontouchend = function (e) {
    total += e.changedTouches[0].clientX - origem;
    // console.log(e.width)
    console.log("Total deslocado à direita: ", total * (-1));
    console.log("Total da largura das imagens", totalImageWidth);
    if (((total * (-1)) > (totalImageWidth - 200)) || total > 2) {
        container.style.transform = 'translateX(' + 0 + 'px)';
        total = 0;
        console.log('Chegou ao final do carousel')
    }
}