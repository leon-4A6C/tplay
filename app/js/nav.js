const topBar = document.getElementsByClassName("topBar")[0]; // there is only one
const sideBar = document.getElementsByClassName("sideBar")[0]; // there is only one
const main = document.getElementsByTagName("main")[0]; // there is only one
const optionBar = document.getElementsByClassName("optionBar")[0]; // there is only one
const pages = document.getElementsByClassName("contentWrapper");
let currentPageOptionBar = optionBar.children[0]; // starts on tv-shows
let currentPage = pages[0]; // starts on tv-shows

// fix the main not being on the top or rather it being under the menu
main.style.top = topBar.clientHeight + "px";



// open or close sideBar/topBar
// something on click or whatever
document.getElementById("settingsButton").addEventListener("click", menuSwitch);
document.getElementById("exitSettings").addEventListener("click", menuSwitch);

function menuSwitch() {
  sideBar.classList.toggle("sideBarClosed");
  if (!topBar.classList.contains("topBarClosed") && !sideBar.classList.contains("sideBarClosed")) {
    topBar.classList.add("topBarClosed");
    main.style.top = "0px";
  } else if(topBar.classList.contains("topBarClosed") && sideBar.classList.contains("sideBarClosed")) {
    topBar.classList.remove("topBarClosed");
    main.style.top = topBar.clientHeight + "px";
  }
}

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

for (var i = 0; i < optionBar.children.length; i++) {
  optionBar.children[i].addEventListener("click", e => {
    currentPageOptionBar.classList.remove("selected");
    e.target.classList.add("selected");
    currentPageOptionBar = e.target;
    for (var i = 0; i < pages.length; i++) {
      if (pages[i].classList.contains(e.target.innerHTML)) {
        // move into view
        shiftPages(pages[i]); // puts it in front of the thingy
      }
    }
  });
}

// switches the page
function shiftPages(newPage) {
  if (newPage.classList.contains("tv-shows")) {
    newPage.style.transform = "translateX(0)"; // tv-shows
    pages[1].style.transform = "translateX(100%)"; // movies
    pages[2].style.transform = "translateX(200%)"; // anime
  } else if (newPage.classList.contains("movies")) {
    newPage.style.transform = "translateX(0)"; // movies
    pages[0].style.transform = "translateX(-100%)"; // tv-shows
    pages[2].style.transform = "translateX(100%)"; // anime
  } else if (newPage.classList.contains("anime")) {
    newPage.style.transform = "translateX(0)"; // anime
    pages[0].style.transform = "translateX(-200%)"; //tv-shows
    pages[1].style.transform = "translateX(-100%)"; //movies
  }
  currentPage = newPage;
}
