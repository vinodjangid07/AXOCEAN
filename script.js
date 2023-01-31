// preloader script
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
})







// foating form
const formInputs = document.querySelectorAll(
  ".floating-contact-form .form-container .form-input"
);

const contactIcon = document.querySelector(
  ".floating-contact-form .contact-icon"
);

const formContainer = document.querySelector(
  ".floating-contact-form .form-container"
);

contactIcon.addEventListener("click", () => {
  formContainer.classList.toggle("active");
});

// for floating contect form
window.addEventListener("click", (e) => {
  if (!formContainer.classList.contains("active")) return;
  if (e.target.matches(".floating-contact-form *")
    || e.target.matches(".floating-contact-form .contact-icon *")
  ) return;
  formContainer.classList.toggle("active");
 
});


formInputs.forEach((i) => {
  i.addEventListener("focus", () => {
    i.previousElementSibling.classList.add("active");
  });
});

formInputs.forEach((i) => {
  i.addEventListener("blur", () => {
    if (i.value === "") {
      i.previousElementSibling.classList.remove("active");
    }
  }); 
});


function topFunction() {
  document.body.scropllTop = 0;
  document.documentElement.scrollTop = 0;
}

// for nav blur after scroll >>>>>>>>>>>
window.onscroll = function(){
  scrollblurFunction()
};


function scrollblurFunction(){
  if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200)
  {
      document.getElementById("navbar").style.backdropFilter = "blur(50px)";
  }
    else{
      document.getElementById("navbar").style.backdropFilter = "blur(0px)";
    }  
}
 // for nav blur after scroll >>>>>>>>




 let emptyArea = document.getElementById("emptyarea");
 let mobileTogglemenu = document.getElementById("mobiletogglemenu");
// toggle menu by clicking on hamburger
function hamburgerMenu() {
    document.body.classList.toggle("stopscrolling");
 document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu");
 document.getElementById("emptyarea").classList.toggle("blur-class");
document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}
// close mobile toggle menu by clicking on LI
function hidemenubyli(){
document.body.classList.toggle("stopscrolling");
document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
document.getElementById("emptyarea").classList.remove("blur-class");
document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

// close Mobile hamburger toggle menu while clicking in empty area
emptyArea.addEventListener('click',hidetogglemenu);
function hidetogglemenu(){
document.body.classList.remove("stopscrolling");
document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
document.getElementById("emptyarea").classList.remove("blur-class");
document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}