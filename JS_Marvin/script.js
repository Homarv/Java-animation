// Fonctionnalité 1:
//////////////////////////////////////////////////////////////////////////////////////
let footer = document.getElementsByTagName("footer")[0];

footer.addEventListener("click",function(){
  console.log("clic pour voir mon Gars" );}
);


// Fonctionnalité 1:-bis
//////////////////////////////////////////////////////////////////////////////////////

let count = 0;

footer.addEventListener("click",function(){
  count ++;
  console.log("clic numéro " + count );}
);


// Fonctionnalité 2:
//////////////////////////////////////////////////////////////////////////////////////

let burger = document.getElementsByClassName("navbar-toggler")[0];

burger.addEventListener("click", function(){
  document.getElementById("navbarHeader").classList.toggle("collapse");}
);

// Fonctionnalité 3 :
//////////////////////////////////////////////////////////////////////////////////////

let cardText0 = document.getElementsByClassName("card-text")[0];
let cardEditBtn0 = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];

cardEditBtn0.addEventListener("click", function(){
  cardText0.style.color = "red" ;}
);


// Fonctionnalité 4 :
//////////////////////////////////////////////////////////////////////////////////////

let cardText1 = document.getElementsByClassName("card-text")[1];
let cardEditBtn1 = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];

cardEditBtn1.addEventListener("click", function(){
  if (cardText1.style.color === "green"){
    cardText1.style.color = "black" ;
  } else {
    cardText1.style.color = "green" ;
  }
}
);


// Fonctionnalité 5:
//////////////////////////////////////////////////////////////////////////////////////

let navbar = document.getElementsByTagName("header")[0];
let bootstrapLink = document.getElementsByTagName("link")[0];
let body = document.getElementsByTagName("body")[0];

navbar.addEventListener("dblclick",function(){
  bootstrapLink.disabled = true;}
);

body.addEventListener("click",function(){
  bootstrapLink.disabled = false;}
);


// Fonctionnalité 6 :
//////////////////////////////////////////////////////////////////////////////////////



// Fonctionnalité 7 :
//////////////////////////////////////////////////////////////////////////////////////

let row1 = document.getElementsByClassName("row")[1];
let cards = document.getElementsByClassName("col-md-4");

let rightBtnJumpbottron = document.getElementsByClassName("btn btn-secondary my-2")[0];

rightBtnJumpbottron.addEventListener("click",function(){
  row1.insertBefore(cards[5], cards[0]);
}
);



// Fonctionnalité 8 :
//////////////////////////////////////////////////////////////////////////////////////

let leftBtnJumpbottron = document.getElementsByClassName("btn btn-primary my-2")[0];

leftBtnJumpbottron.removeAttribute('href');

leftBtnJumpbottron.addEventListener("click",function(){
    row1.insertBefore(cards[0], cards[6]);
  }
  );

// Fonctionnalité 9 :

