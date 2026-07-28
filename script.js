/* ===================================
   PORTFOLIO SCRIPT
   Raj Kumar R
=================================== */


/* ===================================
   Smooth Scroll Navigation
=================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});



/* ===================================
   Mobile Navbar Auto Close
=================================== */

const navLinks = document.querySelectorAll(".nav-link");

const navbarCollapse =
document.querySelector(".navbar-collapse");


navLinks.forEach(link => {

    link.addEventListener("click",()=>{

        if(navbarCollapse.classList.contains("show")){

            new bootstrap.Collapse(navbarCollapse)
            .hide();

        }

    });

});



/* ===================================
   Navbar Scroll Effect
=================================== */


window.addEventListener("scroll",()=>{


const navbar =
document.querySelector(".navbar");


if(window.scrollY > 50){

navbar.style.background =
"rgba(13,110,253,0.98)";

navbar.style.boxShadow =
"0 10px 25px rgba(0,0,0,.25)";

}

else{


navbar.style.background =
"rgba(13,110,253,.95)";


navbar.style.boxShadow =
"0 8px 20px rgba(0,0,0,.15)";


}



});



/* ===================================
   Active Menu Highlight
=================================== */


const sections =
document.querySelectorAll("section");


window.addEventListener("scroll",()=>{


let current="";


sections.forEach(section=>{


const sectionTop =
section.offsetTop - 120;


const sectionHeight =
section.clientHeight;



if(
scrollY >= sectionTop &&
scrollY < sectionTop + sectionHeight
){

current =
section.getAttribute("id");

}


});



navLinks.forEach(link=>{


link.classList.remove("active");


if(
link.getAttribute("href")
==
"#"+current
){

link.classList.add("active");

}


});


});




/* ===================================
   Typing Animation
=================================== */


const textArray=[

"BE Computer Science Engineering Student",

"Web Developer",

"Java Programmer",

"Python Developer",

"Future Full Stack Developer"

];


let textIndex=0;

let charIndex=0;


const typingElement =
document.querySelector("#home h3");



function typing(){


if(charIndex < textArray[textIndex].length){


typingElement.innerHTML +=
textArray[textIndex].charAt(charIndex);


charIndex++;


setTimeout(typing,100);


}


else{


setTimeout(erase,1500);


}


}



function erase(){


if(charIndex > 0){


typingElement.innerHTML =
textArray[textIndex].substring(
0,charIndex-1
);


charIndex--;


setTimeout(erase,50);


}

else{


textIndex++;


if(textIndex >= textArray.length){

textIndex=0;

}


setTimeout(typing,500);


}


}



window.addEventListener(
"load",
()=>{

typing();

}

);





/* ===================================
   Scroll Reveal Animation
=================================== */


const revealElements =
document.querySelectorAll(
"section,.card,.about-box,.timeline-item"
);



function reveal(){


revealElements.forEach(element=>{


let position =
element.getBoundingClientRect()
.top;


let screenHeight =
window.innerHeight;



if(position < screenHeight - 100){


element.style.opacity="1";

element.style.transform=
"translateY(0)";


}


});


}



revealElements.forEach(element=>{


element.style.opacity="0";

element.style.transform=
"translateY(50px)";

element.style.transition=
"all .8s ease";


});


window.addEventListener(
"scroll",
reveal
);


window.addEventListener(
"load",
reveal
);





/* ===================================
   Profile Image Click Effect
=================================== */


const profile =
document.querySelector(".profile-img");


if(profile){


profile.addEventListener(
"click",
()=>{


profile.style.transform=
"scale(1.15) rotate(5deg)";


setTimeout(()=>{


profile.style.transform=
"";


},500);


});


}





/* ===================================
   Project Card Tilt Effect
=================================== */


const cards =
document.querySelectorAll(".card");


cards.forEach(card=>{


card.addEventListener(
"mousemove",
(e)=>{


const rect =
card.getBoundingClientRect();


const x =
e.clientX - rect.left;


const y =
e.clientY - rect.top;



const rotateX =
(y-rect.height/2)/15;


const rotateY =
(rect.width/2-x)/15;



card.style.transform =
`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.03)
`;



});



card.addEventListener(
"mouseleave",
()=>{


card.style.transform="";


});


});






/* ===================================
   Current Year Footer
=================================== */


const year =
new Date().getFullYear();


const footerText =
document.querySelector("footer p");


if(footerText){


footerText.innerHTML =
`© ${year} Raj Kumar R. All Rights Reserved.`;


}






/* ===================================
   Form Submit Alert
=================================== */


const form =
document.querySelector("form");


if(form){


form.addEventListener(
"submit",
function(e){


e.preventDefault();


alert(
"Thank you for contacting me! I will reply soon."
);


form.reset();


}

);


}
