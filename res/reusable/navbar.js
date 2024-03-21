let navbar = document.getElementById('navbar');
navbar.addEventListener('animationend', () => {
    console.log(navbar.getAnimations());
    if (navbar.getAnimations()[0].animationName == "navbarFloat" )
    {
        console.log("Navbar floating animation ended");
        navbar.style.animationName = "navbarPop";
        navbar.style.animation = "navbarPop 1s cubic-bezier(0.77, 0, 0.175, 1) forwards";
    } else navbar.classList.remove('navbarFloat');
}, false);
console.log("Navbar floating animation listener added");