const app = () =>{
        // Responsive navbar
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
};

const showSections = () =>{
    const dogTag = document.querySelector(".dogs-tag");
    const catTag = document.querySelector(".cats-tag");
    const dogSection = document.querySelector(".dog-section-container");
    const catSection = document.querySelector(".cat-section-container");

    dogTag.addEventListener('click', ()=>{
        dogSection.classList.toggle('showDogSection');
        catSection.classList.remove('showCatSection');
    })
    catTag.addEventListener('click', ()=>{
        catSection.classList.toggle('showCatSection');
        dogSection.classList.remove('showDogSection');
    })
}
showSections();
showMenu();

}
app();