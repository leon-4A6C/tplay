const topBar = document.getElementsByClassName("topBar")[0]; // there is only one
const sideBar = document.getElementsByClassName("sideBar")[0]; // there is only one
const main = document.getElementsByTagName("main")[0]; // there is only one

// fix the main not being on the top or rather it being under the menu
main.style.top = topBar.clientHeight + "px";



// open or close sideBar/topBar
// something on click or whatever
document.getElementById("menuButton").addEventListener("click", e => {
  sideBar.classList.toggle("sideBarClosed");
  topBar.classList.toggle("topBarClosed");
});
