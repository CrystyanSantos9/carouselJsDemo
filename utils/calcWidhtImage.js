
   //mostra largura total das imagens ao clicar no botão
   function showTotalImageWidth(){
    alert(totalImageWidth)
}

//função para calcular a largura total das imagens
(function getChild(obj){
    //usado para armazer os objetos images
    const arrImgs=[];
    for(var i = 0 in obj ){
        // console.log(obj[i])
        if(obj[i].nodeName=="IMG"){
            
            //soma 1 para cada imagem encontrada 
            totalImage +=1;
            //soma a largura total das imagens
            totalImageWidth =  totalImageWidth+(parseInt(obj[i].width) * 1)
            // console.log(typeof(totalImageWidth))
        }
    } //aqui recebe o argumento
})(slider.childNodes[1].childNodes)

 