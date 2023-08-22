const btnMenu = document.querySelector('.menu');
const header = document.querySelector('header');
const navMenu = document.querySelector('.nav-menu');

btnMenu.addEventListener('click',() => {
    const scrollposicao = window.scrollY;
    navMenu.classList.toggle('active')

    if(scrollposicao === 0) {
        navMenu.style.boxShadow = "0 1px 2px 0 rgba(0, 0, 0, 0.5)"
    }
})

const mudarCorHeader = () => {
    const scrollposicao = window.scrollY;
    if(scrollposicao > 40) {
        header.style.boxShadow = "0 1px 4px 0 rgba(0, 0, 0, 0.5)"
    } else {    
        header.style.boxShadow = "none"
    }
}

document.addEventListener('scroll', mudarCorHeader);

const verificarTamanhoJanela = () => {
    return window.innerWidth;   
}

window.addEventListener("resize", () => {
    const larguraJanela = verificarTamanhoJanela() 
    if(larguraJanela > 992) {
        navMenu.style.boxShadow = "none"
    } else {
        navMenu.style.boxShadow = "0 1px 4px 0 rgba(0, 0, 0, 0.5)";
    }
})

//header menu nav
