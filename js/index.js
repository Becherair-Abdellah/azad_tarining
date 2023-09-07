

// navbar coniguration
window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 100) { // Change 200 to the scroll distance you prefer
        navbar.classList.add("f");
    } else {
        navbar.classList.remove("f");
    }
    
});

 // Add click event listener to toggle sublists
 const toggleIcons = document.querySelectorAll('.toggle-icond');
 const toggleEle = document.querySelector('.target');
 toggleIcons.forEach((item)=>{

    item.addEventListener('click',()=>{
        // remove proactive div from all divs
        toggleIcons.forEach((active)=>{
            active.classList.remove('proactive')
        })
        // // toggleEle.classList.toggle("h-0");
        item.classList.add('proactive')
        item.querySelector('.btn').classList.toggle('rotate-90')
        // // document.querySelector('.btn').style.rotate = '90deg';
        setTimeout(()=>{
        item.querySelector('.target').classList.toggle(`max-h-[${toggleEle.scrollHeight}px]`)
        },0)
    })

 })
 // add click event at close button to close div of links

 const toggleClose = document.querySelector(".close");
 toggleClose.onclick = ()=>{
    //  document.querySelector('.navlink').classList.remove('move');
     document.querySelector('.navlink').classList.add('translate-x-[112%]');
 }
 // add toggle open
 const toggleOpen = document.querySelector(".open");
 toggleOpen.onclick = ()=>{
    document.querySelector('.navlink').classList.remove('translate-x-[112%]');
    // document.querySelector('.navlink').classList.add('move');
 }
 // making dropdown 
//  JavaScript (Optional)
document.querySelectorAll('.dropdown').forEach((dropdown) => {
    dropdown.addEventListener('mouseenter', () => {
        // dropdown.querySelector('.dropdown-content').style.display = 'block';
        dropdown.querySelector('.dropdown-content').style.height = `${dropdown.querySelector('.dropdown-content').scrollHeight}px`; 
        // dropdown.querySelector('.dropdown-content').style.height = `${dropdown.querySelector('.dropdown-content').scrollHeight}px`; 
    });

    dropdown.addEventListener('mouseleave', () => {
        dropdown.querySelector('.dropdown-content').style.height = `0px`; 

    });
});

// search implementation
const search = ()=>{
    const div = document.createElement('div');
    const input = document.createElement('input');
    input.name = 'search';
    input.placeholder = 'Type and hit Enter to search'
    div.appendChild(input);
    // opening search bar
    document.querySelector('.search').onclick = ()=>{
      if(!document.querySelector(".search").classList.contains('close')){
        const input = document.createElement('input');
        input.classList = `p-2 shadow outline-none rounded left-[-315px] top-[-3px] w-[300px] absolute left-0 bg-gray-50 text-[14px]`
        input.name = 'search';
        input.placeholder = 'Type and hit Enter to search'
       document.querySelector('.search').parentNode.prepend(input);
        document.querySelector('.search').classList = "fa-solid fa-close text-3xl search close"
      }else{
        document.querySelector('.search').parentNode.querySelector('input').remove();
        // reset classes 
        document.querySelector('.search').classList = "fa-solid fa-magnifying-glass text-xl search"
    }
    }
    // closing search bar
    // document.querySelector('.close').onclick = ()=>{

    // }
}
search();
