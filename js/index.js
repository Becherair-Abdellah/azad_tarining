// navbar coniguration
window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 100) { // Change 200 to the scroll distance you prefer
        navbar.classList.add("f");
    } else {
        navbar.classList.remove("f");
    }
    console.log('nav')
});

 // Add click event listener to toggle sublists
 const toggleIcons = document.querySelectorAll('.toggle-icon');
 toggleIcons.forEach(icon => {
     icon.addEventListener('click', () => {
         const sublist = icon.querySelector('ul');
         if (sublist) {
             sublist.style.display = sublist.style.display === 'none' ? 'block' : 'none';
         }
     });
 });
 // add click event at close button to close div of links

 const toggleClose = document.querySelector(".close");
 toggleClose.onclick = ()=>{
    document.querySelector('.navlink').classList.toggle('-right-[100%]')
 }
 // add toggle open
 const toggleOpen = document.querySelector(".open");
 toggleOpen.onclick = ()=>{
    console.log('open')
    document.querySelector('.navlink').classList.remove('-right-[100%]')

    document.querySelector('.navlink').classList.add('right-0')
 }