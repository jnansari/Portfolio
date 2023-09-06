// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.onclick = () =>{
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// }

// let section  = document.querySelectorAll('section')
// let navLinks  = document.querySelectorAll('header nav a')

// window.onscroll = () =>{
//     section.array.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsettTop -100;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('');
//         if(top >=offset && top < offset + height){
//             navLinks.array.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a [href*= '+id+']').classList.add('active')
//             });
//             // active animation  for animation  on scroll
//             sec.classList.add('show-animate');
//             // if want to use animation  that repeats  on scroll  use  this 
           
//         }
//         else{
//             sec.classList.remove('show-animate')
//         }
//     });
//     let header = document.querySelector('header');
//     header.classList.toggle('stciky' ,window.scrollY >200)
//     // reomve toggle icon and  navbar when click navbar links (scrooll)
//     menuIcon.classList.remove('bx-x');
//     navbar.classList.remove('active');
//     // animation footer on scroll
//     let footer = document.querySelector('footer');
//     footer.classList.toggle('show-animate' ,this.innerHeight + this.screenY >= document.scrollingElement.scrollHeight);
// }

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('bx-x');
}
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id= sec.getAttribute('id');
        if (top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a [herf*=' + id + ']').classList.add('active');
            });
        }
    });
}
window.onscroll = () => {
    let header = document.querySelector('.header');
    header.classList.toggle('stick' , window.scrollY > 100);
}