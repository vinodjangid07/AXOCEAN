// // preloader script
// var loader = document.getElementById("preloader");
// window.addEventListener("load", function () {
//   loader.style.display = "none";
// })







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
//dropdownlist toggle 
function myFunction() {
  document.getElementById("ddlist").classList.toggle("show")
  // document.getElementById("rotatebtn").classList.toggle("rotate")
}
function hidedropdownFunction(){
  document.getElementById("ddlist").classList.remove("show")
}




// mouse hover on dropdownlist
// link 1
function hoverIn() {
  document.getElementById("dropdownlistlink1").style.color = "#ed7a3c";
}
function hoverOut() {
  if (document.getElementById('switch').checked == false) {
    document.getElementById("dropdownlistlink1").style.color = "black";
  }
  else {
    document.getElementById("dropdownlistlink1").style.color = "white";
  }
}
// link 2
function hoverIn2() {
  document.getElementById("dropdownlistlink2").style.color = "#ed7a3c";
}
function hoverOut2() {
  if (document.getElementById('switch').checked == false) {
    document.getElementById("dropdownlistlink2").style.color = "black";
  }
  else {
    document.getElementById("dropdownlistlink2").style.color = "white";
  }
}
//  link 3
function hoverIn3() {
  document.getElementById("dropdownlistlink3").style.color = "#ed7a3c";
}
function hoverOut3() {
  if (document.getElementById('switch').checked == false) {
    document.getElementById("dropdownlistlink3").style.color = "black";
  }
  else {
    document.getElementById("dropdownlistlink3").style.color = "white";
  }
}
//  link 4
function hoverIn4() {
  document.getElementById("dropdownlistlink4").style.color = "#ed7a3c";
}
function hoverOut4() {
  if (document.getElementById('switch').checked == false) {
    document.getElementById("dropdownlistlink4").style.color = "black";
  }
  else {
    document.getElementById("dropdownlistlink4").style.color = "white";
  }
}
// Code Of Mouse hover on dropdown list links ends here ----->

// Code of hamburger hover effects starts from here
function hamburgerMouseOver() {
  document.getElementById("hamburger").style.color = "#ed7a3c";
}
function hamburgerMouseOut() {
  if (document.getElementById('switch').checked == false) {
    document.getElementById("hamburger").style.color = "black";
  }
  else {
    document.getElementById("hamburger").style.color = "white";
  }
}
// exit button hover effect------
function exitbuttonAddcolor() {
  document.getElementById("exitbutton").style.color = "#ed7a3c";
}
function exitbuttonRemovecolor() {
  if (document.getElementById('switch').checked == false) {
    document.getElementById("exitbutton").style.color = "black";
  }
  else {
    document.getElementById("exitbutton").style.color = "white";
  }
}



// see details mouse over function

//button -1
function seedetails1colorchangeFunction() {
  document.getElementById("item1-button").style.color = "#ed7a3c";
  document.getElementById("item1-button").style.backgroundColor = "#0c161c";
}
function seedetails1colorresetFunction() {
  if (document.getElementById('switch').checked == false) {
    document.getElementById("item1-button").style.color = "white";
    document.getElementById("item1-button").style.backgroundColor = "black";
  }
  else {
    document.getElementById("item1-button").style.color = "black";
    document.getElementById("item1-button").style.backgroundColor = "white";
  }
}

//button -2
function seedetails2colorchangeFunction() {
  document.getElementById("item2-button").style.color = "#ed7a3c";
  document.getElementById("item2-button").style.backgroundColor = "#0c161c";
}
function seedetails2colorresetFunction() {
  if (document.getElementById('switch').checked == false) {
    document.getElementById("item2-button").style.color = "white";
    document.getElementById("item2-button").style.backgroundColor = "black";
  }
  else {
    document.getElementById("item2-button").style.color = "black";
    document.getElementById("item2-button").style.backgroundColor = "white";
  }
}
//button -3
function seedetails3colorchangeFunction() {
  document.getElementById("item3-button").style.color = "#ed7a3c";
  document.getElementById("item3-button").style.backgroundColor = "#0c161c";
}
function seedetails3colorresetFunction() {
  if (document.getElementById('switch').checked == false) {
    document.getElementById("item3-button").style.color = "white";
    document.getElementById("item3-button").style.backgroundColor = "black";
  }
  else {
    document.getElementById("item3-button").style.color = "black";
    document.getElementById("item3-button").style.backgroundColor = "white";
  }
}
//button -4
function seedetails4colorchangeFunction() {
  document.getElementById("item4-button").style.color = "#ed7a3c";
  document.getElementById("item4-button").style.backgroundColor = "#0c161c";
}
function seedetails4colorresetFunction() {
  if (document.getElementById('switch').checked == false) {
    document.getElementById("item4-button").style.color = "white";
    document.getElementById("item4-button").style.backgroundColor = "black";
  }
  else {
    document.getElementById("item4-button").style.color = "black";
    document.getElementById("item4-button").style.backgroundColor = "white";
  }
}

// code for Theme Color or Dark mode or LIght mode
function appearanceMOde() {
  if (document.getElementById('switch').checked == false) {
    // BODY 
    document.body.style.backgroundColor = "#f4f4f4";
    // navbar

    // document.getElementById("navbar").style.backgroundColor = "white";
    // document.getElementById("navbar").style.boxShadow = " 0px 0px 10px 0.1px gray";

    document.getElementById("heading").style.color = "black";

    document.getElementById("navbar").style.backdropFilter = "blur(50px)";
    document.getElementById("navbar").style.backgroundColor = "transparent";

    //  hamburger lines
    // document.getElementById("hamburgerline1").style.color = "black";
    // document.getElementById("hamburgerline2").style.color = "black";
    // document.getElementById("hamburgerline3").style.color = "black";
    document.getElementById("hamburger").style.color = "black";

    // homebutton
    document.getElementById("homebtn").style.color = "black";
     document.getElementById("productarticle").style.color = "black";
    //  how we work
    document.getElementById("how_we_work").style.color = "black";
// productdescription
document.getElementById("packaging_description").style.color = "black";
document.getElementById("packaging_description2").style.color = "black";

document.getElementById("fabric_description").style.color = "black";
document.getElementById("fabric_description2").style.color = "black";
    //  productarticle

    document.getElementById("productarticle").style.color = "black";
   //oldprize--newprize
   document.getElementById("oldprize1").style.color = "#212121";
   document.getElementById("oldprize2").style.color = "#212121";
   document.getElementById("oldprize3").style.color = "#212121";
   document.getElementById("oldprize4").style.color = "#212121";

   document.getElementById("newprize1").style.color = "#ed7a3c";
   document.getElementById("newprize2").style.color = "#ed7a3c";
   document.getElementById("newprize3").style.color = "#ed7a3c";
   document.getElementById("newprize4").style.color = "#ed7a3c";


    // items h1 and button 
    // document.getElementById("item1-h1").style.backgroundColor = "#ddd";
    // document.getElementById("item1-button").style.backgroundColor = "#ddd";
    document.getElementById("item1-h1").style.color = "black";
    document.getElementById("item1-button").style.color = "white";
    document.getElementById("item1-button").style.backgroundColor = "black";

    // document.getElementById("item2-h1").style.backgroundColor = "#ddd";
    // document.getElementById("item2-button").style.backgroundColor = "#ddd";
    document.getElementById("item2-h1").style.color = "black";
    document.getElementById("item2-button").style.color = "white";
    document.getElementById("item2-button").style.backgroundColor = "black";

    // document.getElementById("item3-h1").style.backgroundColor = "#ddd";
    // document.getElementById("item3-button").style.backgroundColor = "#ddd";
    document.getElementById("item3-h1").style.color = "black";
    document.getElementById("item3-button").style.color = "white";
    document.getElementById("item3-button").style.backgroundColor = "black";

    // document.getElementById("item4-h1").style.backgroundColor = "#ddd";
    // document.getElementById("item4-button").style.backgroundColor = "#ddd";
    document.getElementById("item4-h1").style.color = "black";
    document.getElementById("item4-button").style.color = "white";
    document.getElementById("item4-button").style.backgroundColor = "black";

    //  h3 of items
    document.getElementById("item1-h3").style.color = "rgb(56, 56, 56)";
    document.getElementById("item2-h3").style.color = "rgb(56, 56, 56)";
    document.getElementById("item3-h3").style.color = "rgb(56, 56, 56)";
    document.getElementById("item4-h3").style.color = "rgb(56, 56, 56)";

   
    // description container
// document.getElementById("itemdescriptioncontainer1").style.backgroundColor = "#c1af98";
// document.getElementById("itemdescriptioncontainer2").style.backgroundColor = "#c1af98";
// document.getElementById("itemdescriptioncontainer3").style.backgroundColor = "#c1af98";
// document.getElementById("itemdescriptioncontainer4").style.backgroundColor = "#c1af98";
    //   items or product containers
    document.getElementById("item1container").style.background = "linear-gradient(rgb(236, 236, 236),rgb(203, 203, 203)";
    document.getElementById("item2container").style.background = "linear-gradient(rgb(236, 236, 236),rgb(203, 203, 203))";
    document.getElementById("item3container").style.background = "linear-gradient(rgb(236, 236, 236),rgb(203, 203, 203))";
    document.getElementById("item4container").style.background = "linear-gradient(rgb(236, 236, 236),rgb(203, 203, 203))";

   

   
    // dropdownlist
    document.getElementById("exitbutton").style.color = "black";
    document.getElementById("ddlist").style.backgroundColor = "#f4f4f4a0";
    document.getElementById("dropdownlistlink1").style.color = "black";
    document.getElementById("dropdownlistlink2").style.color = "black";
    document.getElementById("dropdownlistlink3").style.color = "black";
    document.getElementById("dropdownlistlink4").style.color = "black";

    // footer
    document.getElementById("footer").style.backgroundColor = "rgb(8, 8, 8)";

    //    floating form

    document.getElementById("name").style.backgroundColor = "white";
    document.getElementById("email").style.backgroundColor = "white";
    document.getElementById("message").style.backgroundColor = "white";



  } 

  else {
    // BODY 
    // document.body.style.backgroundImage = "url('protruding-squares.svg')";
    document.body.style.backgroundColor ="#1b1b25"

   
    document.getElementById("heading").style.color = "white";
    // document.getElementById("navbar").style.boxShadow = " 0px 0px 10px 0.1px black";
    document.getElementById("navbar").style.backdropFilter = "blur(50px)";
    document.getElementById("navbar").style.backgroundColor = "rgb(0,0,0,0.555";

    // hamburger lines
    // document.getElementById("hamburgerline1").style.color = "white";
    // document.getElementById("hamburgerline2").style.color = "white";
    // document.getElementById("fas").style.color = "white";
    document.getElementById("hamburger").style.color = "white";



    // homebutton 
    document.getElementById("homebtn").style.color = "white";
      //  how we work
      document.getElementById("how_we_work").style.color = "white";
// productdescription
document.getElementById("packaging_description").style.color = "white";
document.getElementById("packaging_description2").style.color = "white";
document.getElementById("fabric_description").style.color = "white";
document.getElementById("fabric_description2").style.color = "white";
//  productarticle

document.getElementById("productarticle").style.color = "white";

  
    // items h1 and button 
    //  document.getElementById("item1-h1").style.backgroundColor = "white";
    //  document.getElementById("item1-button").style.backgroundColor = "black";
    document.getElementById("item1-h1").style.color = "white";
    document.getElementById("item1-button").style.color = "black";
    document.getElementById("item1-button").style.backgroundColor = "white";


    // document.getElementById("item2-h1").style.backgroundColor = "black";
    // document.getElementById("item2-button").style.backgroundColor = "black";
    document.getElementById("item2-h1").style.color = "white";
    document.getElementById("item2-button").style.color = "black";document.getElementById("item2-button").style.backgroundColor = "white";

    // document.getElementById("item3-h1").style.backgroundColor = "black";
    // document.getElementById("item3-button").style.backgroundColor = "black";
    document.getElementById("item3-h1").style.color = "white";
    document.getElementById("item3-button").style.color = "black";document.getElementById("item3-button").style.backgroundColor = "white";

    // document.getElementById("item4-h1").style.backgroundColor = "black";
    // document.getElementById("item4-button").style.backgroundColor = "black";
    document.getElementById("item4-h1").style.color = "white";
    document.getElementById("item4-button").style.color = "black";document.getElementById("item4-button").style.backgroundColor = "white";
    //  h3 of items
    document.getElementById("item1-h3").style.color = "rgb(175, 175, 175)";
    document.getElementById("item2-h3").style.color = "rgb(175, 175, 175)";
    document.getElementById("item3-h3").style.color = "rgb(175, 175, 175)";
    document.getElementById("item4-h3").style.color = "rgb(175, 175, 175)";

// description container
// document.getElementById("itemdescriptioncontainer1").style.backgroundColor = "#0B0C10";
// document.getElementById("itemdescriptioncontainer2").style.backgroundColor = "#0B0C10";
// document.getElementById("itemdescriptioncontainer3").style.backgroundColor = "#0B0C10";
// document.getElementById("itemdescriptioncontainer4").style.backgroundColor = "#0B0C10";

//oldprize--newprize
document.getElementById("oldprize1").style.color = "#adadad";
document.getElementById("oldprize2").style.color = "#adadad";
document.getElementById("oldprize3").style.color = "#adadad";
document.getElementById("oldprize4").style.color = "#adadad";

document.getElementById("newprize1").style.color = "#ed7a3c";
document.getElementById("newprize2").style.color = "#ed7a3c";
document.getElementById("newprize3").style.color = "#ed7a3c";
document.getElementById("newprize4").style.color = "#ed7a3c";

    //   items or product containers
    document.getElementById("item1container").style.background = "linear-gradient(rgb(14, 14, 14),rgb(14, 14, 14))";
    document.getElementById("item2container").style.background = "linear-gradient(rgb(14, 14, 14),rgb(14, 14, 14))";
    document.getElementById("item3container").style.background = "linear-gradient(rgb(14, 14, 14),rgb(14, 14, 14))";
    document.getElementById("item4container").style.background = "linear-gradient(rgb(14, 14, 14),rgb(14, 14, 14))";

   

    // dropdownlist
    document.getElementById("exitbutton").style.color = "white";
    document.getElementById("ddlist").style.backgroundColor = "#030303a0";
    document.getElementById("dropdownlistlink1").style.color = "white";
    document.getElementById("dropdownlistlink2").style.color = "white";
    document.getElementById("dropdownlistlink3").style.color = "white";
    document.getElementById("dropdownlistlink4").style.color = "white";
    //    document.getElementById("dropdownlistlink4").style. = "#009da5";

    // footer
    document.getElementById("footer").style.backgroundColor = "black";

    // floating form
    document.getElementById("name").style.backgroundColor = "black";
    document.getElementById("email").style.backgroundColor = "black";
    document.getElementById("message").style.backgroundColor =
    "black";


  }

}

// let mybutton = document.getElementById("heading");



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
    if (document.getElementById('switch').checked == false){
      document.getElementById("navbar").style.backdropFilter = "blur(50px)";
      document.getElementById("navbar").style.backgroundColor = "transparent";
      document.getElementById("hamburger").style.color = "black";
      document.getElementById("heading").style.color = "black";
      document.getElementById("homebtn").style.color = "black";
      
    }
    else{
      document.getElementById("navbar").style.backdropFilter = "blur(50px)";
      document.getElementById("navbar").style.backgroundColor = "rgb(0,0,0,0.555";
      document.getElementById("hamburger").style.color = "white";
      document.getElementById("heading").style.color = "white";
      document.getElementById("homebtn").style.color = "white";
    }
   
  }
   else{
      
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("navbar").style.backdropFilter = "blur(0px)";
    document.getElementById("hamburger").style.color = "black";
    document.getElementById("heading").style.color = "black";
    document.getElementById("homebtn").style.color = "black";
      }
     
}
 // for nav blur after scroll >>>>>>>>



