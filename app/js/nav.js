// fix the main being on top
const topBar = document.getElementsByClassName("topBar")[0]; // there is only one
const main = document.getElementsByTagName("main")[0]; // there is only one

main.style.top = topBar.clientHeight + "px";
