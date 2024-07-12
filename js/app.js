const app = () => {
    //Tag divs text and background effect
const showAnimal = () =>{
    const animatedCards = document.querySelectorAll('.hero-card');
        animatedCards.forEach((card) => {
            card.addEventListener('mouseenter', ()=>{
            card.classList.add("hover");
        })
        card.addEventListener('mouseleave', ()=>{
            card.classList.remove("hover");
        })
    });
}

const showMenu = () =>{
    const burgerMenu = document.querySelector('.burguer-menu');
    const linksMenu = document.querySelector('.nav-links');

    const checkSize = () =>{
        if(screen.width > 1050){
            linksMenu.classList.remove('nav-active')
            burgerMenu.classList.remove('toggle')
        }
    }
    checkSize();

    window.addEventListener('resize', checkSize);

    burgerMenu.addEventListener('click', ()=>{
        linksMenu.classList.toggle('nav-active');
        burgerMenu.classList.toggle('toggle');
    })
}


//Text changing every 10 seconds animation for the general info container
const dataContainer = document.querySelector('.paragraph-container');
const dataContainerTexts = ['Recuerda que la mejor manera de evitar enfermedades en tus mascotas es vacunarlas!', 'Un gato atigrado llamado Stubbs fue alcalde de Talkeetna, una pequeña ciudad de Alaska, ¡durante 20 años!', 'La nariz de tu canino está formada por una combinación única que es diferente en cada perro y esto mismo pasa en las huellas dactilares.', 'Los gatos tienen un total de 32 músculos… en cada oreja.'];
let iText = 0;
const changeText = () =>{
    dataContainer.textContent = dataContainerTexts[iText];
    iText = (iText + 1) % dataContainerTexts.length; 
}
setInterval(changeText, 8000)


//Card color change animation
const changeColor = () =>{
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger:'.service-card',
            start: 'top center',
            end: 'top center',
            scrub: true,
            markers: false
        }
    });
    
    tl.to('.service-card',{backgroundColor: 'rgb(255, 225, 93)'});
}



// Slider Animation
$(document).ready(function(){
    $('.slick-carousel').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive:[
            {
                breakpoint: 1300,
                settings:{
                    slidesToShow: 2,
                }
            },{
                breakpoint: 1050,
                settings:{
                    slidesToShow: 1,
                    centerPadding: '20px',
                }
            }
        ]
    });
});

showMenu()
showAnimal();
changeText();
changeColor();
}
app();