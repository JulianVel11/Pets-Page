//Tag divs text and background effect
const showAnimal = () =>{
    const animatedCanineTag = document.querySelector('.canines-tag');
    const animatedFelinesTag = document.querySelector('.felines-tag');
    
    animatedCanineTag.addEventListener('mouseenter',()=>{
        animatedCanineTag.classList.add("hover");
    })
    animatedCanineTag.addEventListener('mouseleave', () => {
        animatedCanineTag.classList.remove('hover');
    });
    
    animatedFelinesTag.addEventListener('mouseenter',()=>{
            animatedFelinesTag.classList.add("hover");
    })
    animatedFelinesTag.addEventListener('mouseleave', () => {
        animatedFelinesTag.classList.remove('hover');
    }); 
}

//button bounce animation
const bounceBtn = () =>{
    const heroBtn = document.querySelector('.hero-btn');

    heroBtn.addEventListener('mouseenter', ()=>{
        gsap.to(heroBtn,{
            y: -60,
            duration: 0.2,
                onComplete:()=>{
                    gsap.to(heroBtn,{
                        y: 0,
                        duration: 0.2, 
                    })
                }
        })
    })
}


//Text changing every 10 seconds animation for the data container
const dataContainer = document.querySelector('.description-container');
const dataContainerTexts = ['Recuerda que la mejor manera de evitar enfermedades en tus mascotas es vacunarlas!', 'Un gato atigrado llamado Stubbs fue alcalde de Talkeetna, una pequeña ciudad de Alaska, ¡durante 20 años!', 'La nariz de tu canino está formada por una combinación única que es diferente en cada perro y esto mismo pasa en las huellas dactilares.', 'Los gatos tienen un total de 32 músculos… en cada oreja.'];
let iText = 0;
const changeText = () =>{
    dataContainer.textContent = dataContainerTexts[iText];
    iText = (iText + 1) % dataContainerTexts.length; 
}
setInterval(changeText, 10000)


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
    
    tl.to('.service-card',{backgroundColor: '#FFD700'});
}


// Footer's map location with Leaflet
let map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)

bounceBtn();
changeText();
changeColor();
showAnimal();
