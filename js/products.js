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

showMenu();
}
app();