var scrollInicial = 0
var scrollFinal

addEventListener("scroll", (event) => {
    let altura = document.scrollingElement.scrollTop;
    let sticky = document.querySelector('#stickyBack')

    scrollFinal = altura
    if(scrollInicial > scrollFinal){
        sticky.style.top = "0px"
        console.log(scrollInicial+"-"+scrollFinal)        
    }
    else{
        sticky.style.top = "-52px"
    }
    
    scrollInicial = altura;
});