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
 const toggleIcons = document.querySelectorAll('.toggle-icond');
 const toggleEle = document.querySelector('.target');
 toggleIcons.forEach((item)=>{
console.log(item)
// console.log(item.querySelector('.target'));
    item.addEventListener('click',()=>{
        // remove proactive div from all divs
        toggleIcons.forEach((active)=>{
            active.classList.remove('proactive')
        })
        console.log(item.querySelector('.btn'))
        // // toggleEle.classList.toggle("h-0");
        item.classList.add('proactive')
        item.querySelector('.btn').classList.toggle('rotate-90')
        // // document.querySelector('.btn').style.rotate = '90deg';
        item.querySelector('.target').classList.toggle(`max-h-[${toggleEle.scrollHeight}px]`)
     })

 })
 // add click event at close button to close div of links

 const toggleClose = document.querySelector(".close");
 toggleClose.onclick = ()=>{
     document.querySelector('.navlink').classList.remove('move');
     document.querySelector('.navlink').classList.add('translate-x-[112%]');
 }
 // add toggle open
 const toggleOpen = document.querySelector(".open");
 toggleOpen.onclick = ()=>{
    document.querySelector('.navlink').classList.remove('translate-x-[112%]');
    document.querySelector('.navlink').classList.add('move');
 }