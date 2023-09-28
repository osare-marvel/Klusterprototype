
function navDisplay(){
var navLinks = document.getElementsByClassName("block-navbar.active");

if (navLinks.display === "block"){
    navLinks.style.display = "none";
}
else{
    navLinks.style.display = "block";
}
}