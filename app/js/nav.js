const topBar = document.getElementsByClassName("topBar")[0]; // there is only one
const sideBar = document.getElementsByClassName("sideBar")[0]; // there is only one
const main = document.getElementsByTagName("main")[0]; // there is only one

// fix the main not being on the top or rather it being under the menu
main.style.top = topBar.clientHeight + "px";



// open or close sideBar/topBar
// something on click or whatever
document.getElementById("menuButton").addEventListener("click", e => {
  sideBar.classList.toggle("sideBarClosed");
  if (!topBar.classList.contains("topBarClosed") && !sideBar.classList.contains("sideBarClosed")) {
    topBar.classList.add("topBarClosed");
    main.style.top = "0px";
  } else if(topBar.classList.contains("topBarClosed") && sideBar.classList.contains("sideBarClosed")) {
    topBar.classList.remove("topBarClosed");
    main.style.top = topBar.clientHeight + "px";
  }
});

main.addEventListener("wheel", e => {
  if (e.wheelDelta > 0) {
    topBar.classList.remove("topBarClosed");
    main.style.top = topBar.clientHeight + "px";
    main.style.paddingTop = "0";
  } else if(!topBar.classList.contains("topBarClosed")) {
    topBar.classList.add("topBarClosed");
    main.style.top = "0px";
    main.style.paddingTop = e.deltaY+"px";
  }
});
