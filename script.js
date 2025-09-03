// js code for portFolio
// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let navEvent = document.getElementById('nav_hover')
navEvent.addEventListener('mouseover',function(){
    navEvent.style.animation = 'ease-in-out' 
})




// Add your interactive features here, e.g., form submission handling, animations, etc.
