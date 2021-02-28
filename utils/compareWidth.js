
  (async function  compareSliderWidth(totalImageWidth, totalSliderWidth){
        const diff = await (totalSliderWidth - totalImageWidth)*-1;
        const widhtOfOneImage = parseInt(totalImageWidth/totalImage)
        console.log("Total largura slider - total largura das imagens", diff)
        console.log("Tamanho de uma imagem", widhtOfOneImage)
    
        if(totalImageWidth > totalSliderWidth){
            console.log("Imagens são maiores que o slider widht")
            container.style.width =  `${slider_container_width+diff+300}px`
        }
    })(totalImageWidth, slider_container_width) 



